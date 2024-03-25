import ProductCard from "./ProductCard";
import HeadingTexts from "./Texts";
import { products } from "./../Data/products";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const BestsellerSection = () => {
  return (
    <div className="BestsellerSection">
      <HeadingTexts
        head="Our Bestsellers"
        para={
          <span>
            Looking for something specific? Shop by category to find <br />
            your perfect piece of jewellery!"
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
          {products.slice(0, 6).map((el, ind) => (
            <ProductCard key={ind} {...el} />
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};
export default BestsellerSection;
