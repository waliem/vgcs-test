import React, { useState } from "react";
import Draggable from "react-draggable";
import "./App.css";

const ListComponent = (props) => {
  const [position, setPosition] = useState([{}]);

  const index = props.index;
  const onUpdateFunc = props.onUpdate;
  const label = props.label;

  // keeps track of x and y positions data and saves in the state
  const trackPositions = (data) => {
    onUpdateFunc({ label, x: data.x, y: data.y });
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable onStop={(e, data) => trackPositions(data)}>
      <div key={index} className="Circle">
        <div>
          <p>{label}</p>
        </div>
      </div>
    </Draggable>
  );
};

export default ListComponent;
