import "./Fruit.css";

function Fruit(props) {
  console.log(props);
  const {
    fruitDetail: { fruitName, description, img, price },
  } = props;
  return (
    <div className='card'>
      <div className='card--head'>
        <img src={img} alt='' />
      </div>
      <div className='card--body'>
        <h1 className='title'>{fruitName}</h1>
        <p className='description'>{description}</p>
        <div className='card--footer'>
          <div className='price'>
            Price <span>{price}$</span>
          </div>

          <a className='add--basket'>Add to basket</a>
        </div>
      </div>
    </div>
  );
}

export default Fruit;
