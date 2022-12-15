import React from "react";
import "./App.css";

const AddButton = (props) => {
  return (
    <button className="AddButton" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default AddButton;
