import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import * as counterActions from "../../redux/actions/counterAction";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

function AboutPage({ counter, actions }) {
  //const [counter, setCounter] = useState(1);
  // const counter = 1;

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

      <button onClick={actions.counterAction}>We go up</button>
      <span>{counter}</span>
      <button onClick={actions.counterActionDec}>We go down</button>
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
