import React from "react";
import "./App.css";

const ClearButton = (props) => {
  return (
    <button className="ClearButton" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default ClearButton;
