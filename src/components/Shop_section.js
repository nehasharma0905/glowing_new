import { homeData } from "./../Data/home.js";
import ImageWithButton from "./ImageWithButton";
import HeadingTexts from "./Texts";

const ShopSection = (props) => {
  return (
    <div className="ShopSection">
      <HeadingTexts
        head="Shop by Categories"
        para="Our products are designed for everyone."
      />
      <div className="ShopSectionBoxes">
        {homeData.shoppingCart.map((el, ind) => (
          <ImageWithButton key={ind} title={el.title} imgUrl={el.imgUrl} />
        ))}
      </div>
    </div>
  );
};

export default ShopSection;
