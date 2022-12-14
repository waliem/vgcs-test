import "./App.css";
import { useState, useEffect } from "react";
import { AddButton } from "./AddButton.js";
import { ClearButton } from "./ClearButton.js";
import ListComponent from "./ListComponent.js";

const App = () => {
  const [circles, setCircles] = useState([]);

  //checks if there is any previous circles stored in the local storage and if there is it sets it the state
  useEffect(() => {
    const retriveCircles = JSON.parse(localStorage.getItem("circles"));
    if (retriveCircles) setCircles(retriveCircles);
  }, []);

  //checks that if there is any circles it sets them in the local storage
  useEffect(() => {
    if (circles?.length) {
      localStorage.setItem("circles", JSON.stringify(circles));
    }
  }, [circles]);

  // Adds a new circle and stores it in local storage
  function addCircle() {
    setCircles([...circles, ""]);
    localStorage.setItem("circles", JSON.stringify(circles));
  }

  //removes all circles when clicking clear button
  function clearContainer() {
    setCircles([]);
    localStorage.clear();
  }
  return (
    <>
      <div className="external-container">
        <div>
          <AddButton onClick={addCircle} text="Add Circle" />
          <ClearButton onClick={clearContainer} text="Clear Container" />
        </div>

        <div className="container">
          {circles &&
            circles.map((item, index) => (
              <ListComponent key={index} text={item} />
            ))}
        </div>
      </div>
    </>
  );
};

export default App;
