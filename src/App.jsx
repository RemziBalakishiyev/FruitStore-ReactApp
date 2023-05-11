import { useState } from "react";
import "./App.css";
import FruitList from "./components/Fruits/FruitList";
import FruitForm from "./components/Fruits/NewFruits/FruitForm";
import ChangeColor from "./components/UI/ChangeColor";

function App() {
  const [retrievedFruit, setRetrievedFruit] = useState();
  const [color, setColor] = useState("");
  const onSaveFruitData = function (fruit) {
    console.log(fruit);
    setRetrievedFruit({ id: Math.random(), ...fruit });
  };

  const changeBackColor = (color) => {
    setColor(color);
  };

  return (
    <section className={`back-color-${color}`}>
      <FruitForm createNewFruit={onSaveFruitData}></FruitForm>
      <ChangeColor onChangeColor={changeBackColor} />
      <FruitList fruitValue={retrievedFruit} />
    </section>
  );
}

export default App;
