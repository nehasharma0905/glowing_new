import Button from "../Elements/Button";

const SignUpSection = () => {
  return (
    <div className="SignUpSection">
      <h1>
        Stay Up to Date with All News
        <br />
        and Exclusive Offers
      </h1>
      <div className="Input_box">
        <input placeholder="Enter your email address" />
        <Button className="Subscribe" button="Subscribe" />
      </div>
      <p>
        <input type="checkbox"></input> I accept the terms & conditions and the
        data protection
      </p>
    </div>
  );
};
export default SignUpSection;
