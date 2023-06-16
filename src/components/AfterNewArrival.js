import Button from "../Elements/Button";
const AfterNewArrival = () => {
  return (
    <div className="AfterNewArrival">
      <div className="img1">
        <div className="img1_text">
          <p>NEW COLLECTION</p>
          <h1>
            Mountain Pine <br />
            Bath Oil
          </h1>
          <Button className="image_button" button="Explore More" />
        </div>
        <img src="https://templates.g5plus.net/glowing/images/banner-21.jpg" />
      </div>
      <div className="img2">
        <div className="img2_text">
          <h1>25% off Everything</h1>
          <p>
            Makeup with extended range in
            <br /> colors for every human.
          </p>
          <Button className="image_button" button="Shop Sale" />
        </div>
        <img src="https://templates.g5plus.net/glowing/images/banner-22.jpg" />
      </div>
    </div>
  );
};
export default AfterNewArrival;
