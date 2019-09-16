import React, { useReducer, useState } from "react";
import { connect } from "react-redux";
import * as counterActions from "../../redux/actions/counterAction";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

function AboutPage({ counter, actions }) {
  //const [counter, setCounter] = useState(1);
  // const counter = 1;
  const initialState = { count: 0 };
  function counter2Reducer(state, action) {
    debugger;
    switch (action.type) {
      case "INCREMENT": {
        return { count: state.count + 1 };
      }
      case "DECREMENT": {
        return { count: state.count - 1 };
      }
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(counter2Reducer, initialState);

  function useCounter() {
    const [counter3, setCounter3] = useState(0);

    const onClick = type => {
      if (type === "UP") {
        setCounter3(counter3 + 1);
      } else if (type === "DOWN") {
        setCounter3(counter3 - 1);
      }
    };

    return [counter3, onClick];
  }

  const [counter3, onCounterClick] = useCounter();
  //const counter = useSelector(state => state.counter);
  // const dispatch = useDispatch();

  function onClick() {
    // dispatch(counterActions.counterAction);
    //setCounter(counter + 1);
    //this.props.actions.counter(counter);
    // dispatch(counterActions.counterAction(counter));
  }

  const handleIncrement = counter => {
    //this.props.actions.counterAction(counter);
    //  console.log(counter);
  };
  return (
    <div>
      <h2>About</h2>
      <p>
        This app uses React, Redux, React Router, and many other helpful
        libraries.
      </p>
      This is done with Redux <br />
      <button onClick={actions.counterAction}>We go up</button>
      <span>{counter}</span>
      <button onClick={actions.counterActionDec}>We go down</button>
      <br />
      This is done with useReducer
      <br />
      <button onClick={() => dispatch({ type: "INCREMENT" })}>We go up</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>We go up</button>
      <br />
      This is done with a custom hook
      <br />
      <button onClick={() => onCounterClick("UP")}>We go up</button>
      <span>{counter3}</span>
      <button onClick={() => onCounterClick("DOWN")}>We go down</button>
    </div>
  );
}

AboutPage.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      counterAction: bindActionCreators(counterActions.counterAction, dispatch),
      counterActionDec: bindActionCreators(
        counterActions.counterActionDec,
        dispatch
      )
    }
  };
}

//export default AboutPage;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage);
