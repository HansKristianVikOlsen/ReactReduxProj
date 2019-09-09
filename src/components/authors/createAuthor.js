import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthorForm from "./AuthorForm";
import { saveAuthor } from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function createAuthor({ saveAuthor, history, ...props }) {
  const [author, setAuthor] = useState({ ...props.author });

  function handleSave(event) {
    event.preventDefault();

    saveAuthor(author).then(() => {
      history.push("/courses");
    });
    debugger;
  }

  function handleChange(event) {
    const newAuthor = {
      //...author,
      [event.target.name]: event.target.value
    };
    setAuthor(newAuthor);
  }

  return (
    <>
      <Link to="/courses">Go back to courses</Link>
      <AuthorForm onChange={handleChange} onSave={handleSave} author={author} />
    </>
  );
}

function mapStateToProps(state) {
  return {
    author: state.author
  };
}

const mapDispatchToProps = {
  saveAuthor: saveAuthor
};

createAuthor.propTypes = {
  history: PropTypes.object.isRequired,
  saveAuthor: PropTypes.func.isRequired,
  author: PropTypes.object.isRequired
};
//export default createAuthor;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createAuthor);
