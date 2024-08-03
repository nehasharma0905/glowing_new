import ShopLayout from "../components/ShopLayout";

const Item = (props) => {
  return (
    <div className="Item">
      <div>
        <ShopLayout />
      </div>
      <div className="ItemBox">
        <div className="itemimage"></div>
        <div className="itemdescription"></div>
      </div>
    </div>
  );
};
export default Item;
