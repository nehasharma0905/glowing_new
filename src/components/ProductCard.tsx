import { useNavigate } from "react-router-dom";
import { TSearchProductItem } from "../redux/product/product.type";
const ProductCard = (props: TSearchProductItem) => {
  const navigate = useNavigate();
  const handleOpenItem = () => {
    navigate("/item");
  };
  return (
    <div className="ProductCard" onClick={handleOpenItem}>
      <img src={props.image} />

      <p className="price">
        {/* {props.discount > 0 ? (
          <span>
            {" "}
            ${Math.round(props.price * (100 + props.discount).toFixed(2)) / 100}
          </span>
        ) : null} */}
        ${props.price}
      </p>
      <p className="title">{props.name}</p>
      <p className="rating">Rating: {props.rating}</p>
    </div>
  );
};
export default ProductCard;
