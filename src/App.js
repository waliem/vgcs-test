import "./App.css";
import { useState, useEffect } from "react";
import { AddButton } from "./AddButton.js";
import { ClearButton } from "./ClearButton.js";
import ListComponent from "./ListComponent.js";

const App = () => {
  const [circles, setCircles] = useState([
    {
      label: makeid(1),
      x: 0,
      y: 0,
    },
  ]);

  console.log("circles state", circles);

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

  // Adds a new circle and should store it in local storage
  function addCircle() {
    const newCircles = [...circles];
    newCircles.push({
      label: makeid(1),
      x: 0,
      y: 0,
    });
    setCircles([...newCircles]);
    localStorage.setItem("newCircles", JSON.stringify(newCircles));
  }
  // this tracks and updates the specific circle with its position
  // but it needs to be able to find the right circle AND update the circle state with the new positions of X and Y
  const updateXYPos = (obj) => {
    console.log(obj);
  };

  //removes all circles when clicking clear button
  function clearContainer() {
    setCircles([]);
    localStorage.clear();
  }
  // generates a random letter for the circles. extra task to make sure that the letter does not duplicate
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
          {circles &&
            circles.map((item, index) => (
              <ListComponent
                key={index}
                text={item}
                onUpdate={updateXYPos}
                label={item.label}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default App;
