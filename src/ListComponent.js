import React from "react";
import Draggable from "react-draggable";
import "./App.css";

const ListComponent = ({ item, circles, setCircles }) => {
  // keeps track of x and y positions data and saves in the state
  const trackPositions = (data) => {
    const filteredCircles = circles.filter(
      (circle) => circle.label !== item.label
    );

    setCircles([
      ...filteredCircles,
      { x: data.x, y: data.y, label: item.label },
    ]);
  };

  return (
    <Draggable
      defaultPosition={
        item === null ? { x: 0, y: 0 } : { x: item.x, y: item.y }
      }
      position={{ x: item.x, y: item.y }}
      onStop={(e, data) => trackPositions(data)}
    >
      <div className="Circle"></div>
    </Draggable>
  );
};

export default ListComponent;
