import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
const Nav = () => {
  return (
    <div className="Navigation-bar">
      <p className="free-shipping-text">
        Free shipping on all u.s. orders $50+
      </p>
      <div className="Navigation">
        <ul className="Navigation-items">
          <li>Home</li>
          <li>Products</li>
          <li>Stores</li>
          <li>Contact us</li>
        </ul>
        <h1 className="glowing">GLOWING</h1>

        <ul className="Navigation-items">
          <li>
            <AiOutlineUser />
          </li>
          <li>
            <AiOutlineStar />
          </li>
          <li>$0.00</li>
          <li>
            <FiShoppingBag />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
