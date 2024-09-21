import { useNavigate } from "react-router-dom";
const ProductCard = (props) => {
  const navigate = useNavigate();
  const handleOpenItem = () => {
    navigate("/item");
  };
  return (
    <div className="ProductCard" onClick={handleOpenItem}>
      <img src={props.imgUrl} />

      <p className="price">
        {props.discount > 0 ? (
          <span>
            {" "}
            ${Math.round(props.price * (100 + props.discount).toFixed(2)) / 100}
          </span>
        ) : null}
        ${props.price}
      </p>
      <p className="title">{props.title}</p>
      <p className="rating">Rating: {props.star}</p>
    </div>
  );
};
export default ProductCard;
