import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import "./App.css";

const ListComponent = (props) => {
  const [position, setPosition] = useState([{}]);

  const index = props.index;

  // keeps track of x and y positions data and saves in the state
  const trackPositions = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  console.log(position);

  // useEffect(() => {
  //   const existingDivPositions = JSON.parse(localStorage.getItem("position"));
  //   setPosition(existingDivPositions);
  //   console.log(existingDivPositions);
  // }, []);

  useEffect(() => {
    localStorage.setItem("position", JSON.stringify(position));
  }, [position]);

  return (
    <Draggable onStop={(e, data) => trackPositions(data)}>
      <div key={index} index={index} className="Circle">
        <div>
          <p>x: {position.x}</p> <p>y: {position.y}</p>
        </div>
      </div>
    </Draggable>
  );
};

export default ListComponent;
