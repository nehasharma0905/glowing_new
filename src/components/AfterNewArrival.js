import Button from "../Elements/Button";
import { homeData } from "../Data/home";
const AfterNewArrival = () => {
  return (
    <div className="AfterNewArrival">
      <div className="img1">
        <div className="img1_text">
          <p>{homeData.newArrival[0].tagline}</p>
          <h1>
            Mountain Pine <br />
            Bath Oil
          </h1>
          <Button
            className="image_button"
            button={homeData.newArrival[0].buttonText}
          />
        </div>
        <img src={homeData.newArrival[0].imgUrl} />
      </div>
      <div className="img2">
        <div className="img2_text">
          <h1>25% off Everything</h1>
          <p>
            Makeup with extended range in
            <br /> colors for every human.
          </p>
          <Button
            className="image_button"
            button={homeData.newArrival[1].buttonText}
          />
        </div>
        <img src={homeData.newArrival[1].imgUrl} />
      </div>
    </div>
  );
};
export default AfterNewArrival;
