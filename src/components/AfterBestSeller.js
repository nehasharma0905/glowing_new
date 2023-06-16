import { BsBox } from "react-icons/bs";
import { TiLeaf } from "react-icons/ti";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { AiOutlineCreditCard } from "react-icons/ai";
import AfterBestSellerElement from "../Elements/AfterBestSellerElement";

const AfterBestSeller = () => {
  return (
    <div className="AfterBestSeller">
      <AfterBestSellerElement
        icon={<BsBox />}
        text1="Free Shipping"
        text2="Free Shipping for orders over $130"
      />
      <AfterBestSellerElement
        icon={<TiLeaf />}
        text1="Returns"
        text2="Within 30 days for an exchange."
      />
      <AfterBestSellerElement
        icon={<HiOutlineChatBubbleLeftRight />}
        text1="Online Support"
        text2="24 hours a day, 7 days a week"
      />
      <AfterBestSellerElement
        icon={<AiOutlineCreditCard />}
        text1="Flexible Payment"
        text2="Pay with Multiple Credit Cards"
      />
    </div>
  );
};
export default AfterBestSeller;
