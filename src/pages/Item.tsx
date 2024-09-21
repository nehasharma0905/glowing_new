import ShopLayout from "../components/ShopLayout";
import imgTest1 from "../assets/images/product-15.jpg";
import imgTest2 from "../assets/images/product-gallery-10.jpg";
import imgTest3 from "../assets/images/product-gallery-11.jpg";
import imgTest4 from "../assets/images/product-gallery-12.jpg";
import { FaRegStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { LuAlarmClock } from "react-icons/lu";
import { PiPackage } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";
import img from "../assets/images/instagram-02.jpg";

import paymentMethod from "./../assets/images/paymentMethods.png";
import productImg1 from "./../assets/images/product-info-3-1.png";
import productImg2 from "./../assets/images/product-info-3-2.png";
import productImg3 from "./../assets/images/product-info-3-3.png";
import productImg4 from "./../assets/images/product-info-3-4.png";

const Item = () => {
  const [lineWidth, setLineWidth] = useState(10);
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(imgTest1);
  const [activeSection, setActiveSection] = useState("Product Details");
  const setQunatityMinusHandler = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
    if (lineWidth >= 10) {
      setLineWidth(lineWidth - 10);
    }
  };
  const setQunatityPlusHandler = () => {
    if (quantity <= 9) {
      setQuantity(quantity + 1);
    }
    if (lineWidth <= 90) {
      setLineWidth(lineWidth + 10);
    }
  };
  return (
    <>
      <div className="Item">
        <div>
          <ShopLayout />
        </div>
        <div className="ItemBox">
          <div className="itemImage">
            <Tooltip className="heart-box" title="Add to Wishlist" arrow>
              <div className="heart-icon">
                <FiHeart />
              </div>
            </Tooltip>
            <img src={image} />
            <div className="imageOverlay">
              <img onClick={() => setImage(imgTest1)} src={imgTest1} />
              <img onClick={() => setImage(imgTest2)} src={imgTest2} />
              <img onClick={() => setImage(imgTest3)} src={imgTest3} />
              <img onClick={() => setImage(imgTest4)} src={imgTest4} />
            </div>
          </div>
          <div className="itemDescription">
            <div className="priceContainer">
              <p className="price">39.00</p>
              <p className="discountPrice">29.00</p>
              <div className="discount">20%</div>
            </div>
            <h1 className="itemName">Natural Coconut CLeansing Oil</h1>
            <div className="rating">
              <p>4.86</p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </div>
            <p className="description">
              Niacinamide and Vitamin C are two anti-aging superstars but not
              usually formulated together because of their different pH levels.
            </p>
            <p className="description">
              <FaRegEye />
              <span>
                <strong>17 people </strong>are veiwing this right now
              </span>
            </p>
            <p className="description">
              <LuAlarmClock />
              <strong>Only 10 left in stock</strong>
            </p>
            <div className="lineWrapper">
              <div
                className="filledLine"
                style={{ width: `${lineWidth}%` }}
              ></div>
              <div className="fadedLine"></div>
            </div>
            <p className="quantity">Quantity:</p>
            <div className="quantityBox">
              <button
                onClick={() => {
                  setQunatityMinusHandler();
                }}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                onClick={() => {
                  setQunatityPlusHandler();
                }}
              >
                +
              </button>

              <button className="addToCart">Add to Bag</button>
            </div>
            <p className="description">
              <TbTruckDelivery />
              <span>
                <strong>Get it between: </strong>Feb 3 - Feb 14,2021
              </span>
            </p>
            <p className="description">
              <PiPackage />
              <span>
                <strong>Free Shipping & Returns: </strong>On all orders over
                $200
              </span>
            </p>
            <div className="imageSection">
              <img src={paymentMethod} />
              <p>Guarantee safe & secure checkout</p>
            </div>
            <div className="Line"></div>
            <p className="description">
              <span>
                <strong>Categories: </strong>
                Makeup, Skincare
              </span>
            </p>
            <p className="lastLine">
              <FaFacebookF />
              Facebook
              <FaInstagram />
              Instagram
              <FaYoutube />
              Youtube
            </p>
          </div>
        </div>
      </div>
      <div className="Line"></div>
      <div className="productDetailSection">
        <ul className="productDetailList">
          <li
            className={activeSection === "Product Details" ? "active" : ""}
            onClick={() => setActiveSection("Product Details")}
          >
            <h3>Product Details</h3>
          </li>
          <li
            className={activeSection === "How to use" ? "active" : ""}
            onClick={() => setActiveSection("How to use")}
          >
            <h3> How to use</h3>
          </li>
          <li
            className={activeSection === "Ingredients" ? "active" : ""}
            onClick={() => setActiveSection("Ingredients")}
          >
            <h3> Ingredients</h3>
          </li>
        </ul>
        {activeSection === "Product Details" ? (
          <div className="Product-Details">
            <div className="Image">
              <img src={img} />
            </div>
            <div className="Details">
              <p className="heading">
                For Normal, Oily, Combination Skin Types
              </p>
              <p className="text">
                Complexion-perfecting natural foundation enriched with
                antioxidant-packed superfruits, vitamins, and other
                skin-nourishing nutrients. Creamy liquid formula sets with a
                pristine matte finish for soft, velvety smooth skin.
              </p>
              <p className="text">
                Say hello to flawless, long-lasting foundation that comes in 7
                melt-into-your-skin shades. This lightweight, innovative formula
                creates a smooth, natural matte finish that won’t settle into
                lines. It’s the perfect fit for your skin. 1 fl. oz.
              </p>
              <p className="heading">Benefits</p>
              <ul className="list">
                <li className="listitem">Buildable medium-to-full coverage</li>
                <li className="listitem">Weightless, airy feel—no caking!</li>
                <li className="listitem">Long-wearing</li>
                <li className="listitem">Evens skin tone</li>
                <li className="listitem">
                  Available in 07 shades (all exclusive to Makeaholic!)
                </li>
              </ul>
              <div className="Images">
                <img src={productImg1} />
                <img src={productImg2} />
                <img src={productImg3} />
                <img src={productImg4} />
              </div>
            </div>
          </div>
        ) : null}
        {activeSection === "How to use" ? (
          <div className="How-to-use">
            <p className="heading">
              Follow these safety guidelines when using cosmetics products of
              any type:
            </p>
            <ul className="list">
              <li className="listitem">
                Read the label. Follow all directions and heed all warnings.
              </li>
              <li className="listitem">
                Wash your hands before you use the product.
              </li>
              <li className="listitem">Do not share makeup.</li>
              <li className="listitem">
                Keep the containers clean and tightly closed when not in use,
                and protect them from temperature extremes.
              </li>
              <li className="listitem">
                Throw away cosmetics if there are changes in color or smell.
              </li>
              <li className="listitem">
                Use aerosols or sprays cans in well-ventilated areas. Do not use
                them while you are smoking or near an open flame. It could start
                a fire.
              </li>
            </ul>
          </div>
        ) : null}
        {activeSection === "Ingredients" ? (
          <div className="Ingredients">
            <div className="Ingredients-details">
              <p className="item">CAS</p>
              <p className="description">92128-82-0, 9057-02-7</p>
            </div>
            <div className="Ingredients-details">
              <p className="item">INCI</p>
              <p className="description">
                Nannochloropsis Oculata (micro algae) extract, pullulan
              </p>
            </div>
            <div className="Ingredients-details">
              <p className="item">Composition</p>
              <p className="description">
                Nannochloropsis Oculata (micro algae) extract, pullulan, water,
                ethanol
              </p>
            </div>
            <div className="Ingredients-details">
              <p className="item">Appearance</p>
              <p className="description">Yellow to amber, viscous liquid</p>
            </div>
            <div className="Ingredients-details">
              <p className="item">Solubility</p>
              <p className="description">Soluble in water & ethanol</p>
            </div>
            <div className="Ingredients-details">
              <p className="item">Storage</p>
              <p className="description">
                Store refrigerated (4-8oC / 39-46oF)
              </p>
            </div>
            <p className="text">
              Perfect for Equestrian homes or every horse lover. Designer
              premium signature aluminum alloy all Arthur Court is compliance
              with FDA regulations. Aluminum Serveware can be chilled in the
              freezer or refrigerator and warmed in the oven to 350. Wash by
              hand with mild dish soap and dry immediately – do not put in the
              dishwasher. Comes in Gift Box perfect for Equestrian home or Horse
              lover in your life.
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Item;
