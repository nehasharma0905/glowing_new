import data from "./../Data/home.json";
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
        {data.shoppingCat.map((el, ind) => (
          <ImageWithButton key={ind} title={el.title} imgUrl={el.imgUrl} />
        ))}
      </div>
    </div>
  );
};

export default ShopSection;
