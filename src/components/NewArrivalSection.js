import ProductCard from "./ProductCard";
import HeadingTexts from "./Texts";
import data from "./../Data/products.json";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const NewArrivalSection = () => {
  return (
    <div className="NewArrivalSection">
      <HeadingTexts
        head="New Arrivals"
        para={
          <span>
            Looking for something specific? Shop by category to find <br />
            your perfect piece of jewellery!
          </span>
        }
      />
      <div className="ProductCardSection">
        <AliceCarousel
          responsive={{
            0: {
              items: 1,
            },
            1024: {
              items: 4,
              itemsFit: "contain",
            },
          }}
        >
          {data.products.slice(7, 14).map((el, ind) => (
            <ProductCard key={ind} {...el} />
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};
export default NewArrivalSection;
