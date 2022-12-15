import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import AddButton from "./AddButton.js";
import ClearButton from "./ClearButton.js";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

const App = () => {
  const [circles, setCircles] = useState([]);

  //checks if there is any previous circles stored in the local storage and if there is it sets it the state
  useEffect(() => {
    const retriveCircles = JSON.parse(localStorage.getItem("circles"));
    if (retriveCircles) setCircles(retriveCircles);
  }, []);

  //checks that if there is any circles it sets them in the local storage
  useEffect(() => {
    console.log("circles", circles);
    if (circles.length > 0) {
      localStorage.setItem("circles", JSON.stringify(circles));
    }
  }, [circles]);

  // Adds a new circle and should store it in local storage
  const addCircle = () => {
    const newCircles = [...circles];
    newCircles.push(makeid(1));
    setCircles([...newCircles]);
    localStorage.setItem("newCircles", JSON.stringify(newCircles));
  };

  //removes all circles when clicking clear button
  function clearContainer() {
    setCircles([]);
    localStorage.clear();
  }

  //Sorts the new array when dragging is done
  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newArr = [...circles];
    const ordered = arrayMove(newArr, oldIndex, newIndex);

    setCircles([...ordered]);
  };

  // sets the items in the array as an item
  const SortableItem = sortableElement(({ item, index, circles = [] }) => (
    <li className="circle" key={index}>
      <span>{item}</span>
    </li>
  ));

  const SortableContainer = sortableContainer(({ children }) => {
    return <ul className="circleHolder">{children}</ul>;
  });

  // generates a random letter for the circles
  function makeid(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  return (
    <>
      <div className="external-container">
        <div>
          <AddButton onClick={addCircle} text="Add Circle" />
          <ClearButton onClick={clearContainer} text="Clear Container" />
        </div>

        <div className="container">
          <SortableContainer onSortEnd={onSortEnd} axis="yx">
            {circles &&
              circles.map((item, index) => (
                <SortableItem key={"key_" + index} item={item} index={index} />
              ))}
          </SortableContainer>
        </div>
      </div>
    </>
  );
};

export default App;
