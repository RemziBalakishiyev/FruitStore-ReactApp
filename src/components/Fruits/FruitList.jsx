import Fruit from "./Fruit";
import "./FruitList.css";
import FruitForm from "./NewFruits/FruitForm";

const fruits = [
  {
    id: 1,
    fruitName: "Apple",
    img: "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    description:
      "An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.",
    price: 15.32,
  },
  {
    id: 2,
    fruitName: "Ananas",
    img: "https://images.unsplash.com/photo-1589606743932-747c74e7330e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    description:
      "The pineapple (Ananas comosus) is a tropical plant with an edible fruit; it is the most economically significant plant in the family Bromeliaceae.",
    price: 20.32,
  },
  {
    id: 3,
    fruitName: "Avocado",
    img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
    description:
      "The avocado fruit is a climacteric, single-seeded berry, due to the imperceptible endocarp covering the seed, rather than a drupe.",
    price: 30.58,
  },
];

let fruitContent = <p>No fruit found.</p>;
function FruitList(props) {
  const loadFruits = () => {
    if (props.fruitValue) {
      fruits.push({
        ...props.fruitValue,
        img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
        description:
          "The avocado fruit is a climacteric, single-seeded berry, due to the imperceptible endocarp covering the seed, rather than a drupe.",
      });
    }
  };

  if (fruits.length > 0) {
    fruitContent = (
      <div className="container">
        {fruits.map((f) => (
          <Fruit key={f.id} fruitDetail={f} />
        ))}
      </div>
    );
  }
  loadFruits();
  return fruitContent;
}

export default FruitList;
