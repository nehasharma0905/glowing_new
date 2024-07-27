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

import paymentMethod from "../assets/images/paymentMethods.png";

const Item = (props) => {
  const [lineWidth, setLineWidth] = useState(10);
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(imgTest1);
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
              <p1>4.86</p1>
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
      <div className="productDetailSection">
        <ul>
          <li>Product Details</li>
          <li>How to use</li>
          <li>Ingredients</li>
        </ul>
      </div>
    </>
  );
};
export default Item;
