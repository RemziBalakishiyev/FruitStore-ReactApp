import { useState } from "react";
import "./App.css";
import FruitList from "./components/Fruits/FruitList";
import FruitForm from "./components/Fruits/NewFruits/FruitForm";

function App() {
  const [retrievedFruit, setRetrievedFruit] = useState();

  const onSaveFruitData = function (fruit) {
    setRetrievedFruit({ id: Math.random(), ...fruit });
  };

  return (
    <section>
      <FruitForm createNewFruit={onSaveFruitData}></FruitForm>
      <FruitList fruitValue={retrievedFruit} />
    </section>
  );
}

export default App;
