import React, { useState } from "react";
import "./FruitForm.css";

export default function FruitForm(props) {
  const [fruitInput, setFruitInput] = useState({
    enteredname: "",
    enteredtitle: "",
    enteredprice: 0,
  });

  const createNewFruit = function (event) {
    event.preventDefault();
    const fruitModel = {
      fruitName: fruitInput.enteredname,

      title: fruitInput.enteredprice,
      price: fruitInput.enteredtitle,
    };
    console.log(props);
    props.createNewFruit(fruitModel);
  };

  const nameChangeHandler = (event) => {
    setFruitInput((prevState) => {
      return { ...prevState, enteredname: event.target.value };
    });
  };

  const titleChangeHandler = (event) => {
    setFruitInput((prevState) => {
      return { ...prevState, enteredtitle: event.target.value };
    });
  };
  const priceChangeHandler = (event) => {
    setFruitInput((prevState) => {
      return { ...prevState, enteredprice: event.target.value };
    });
  };
  return (
    <form action="" onSubmit={createNewFruit}>
      <div className="form--card">
        <div className="form-card-group">
          <div className="form--card--item">
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={fruitInput.enteredname}
              onChange={nameChangeHandler}
            />
          </div>

          <div className="form--card--item">
            <input
              type="text"
              id="title"
              placeholder="Title"
              value={fruitInput.enteredtitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="form--card--item">
            <input
              type="number"
              id="price"
              placeholder="Price"
              value={fruitInput.enteredprice}
              onChange={priceChangeHandler}
            />
          </div>
        </div>
        <div className="card--footer">
          <button className="submit--btn" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
