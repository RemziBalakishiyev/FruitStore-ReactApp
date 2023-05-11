import "./Fruit.css";
import { Button } from "../UI/Styles/Button.styled";

function Fruit(props) {
  const {
    fruitDetail: { fruitName, description, img, price },
  } = props;

  return (
    <div
      className="card"
      style={{ backgroundColor: price > 10 ? "#edede9" : "" }}
    >
      <div className="card--head">
        <img src={img} alt="" />
      </div>
      <div className="card--body">
        <h1 className="title">{fruitName}</h1>
        <p className="description">{description}</p>
        <div className="card--footer">
          <div className="price">
            Price <span>{price}$</span>
          </div>

          <Button bg="secondary" isOutline>
            Add to basket
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Fruit;
