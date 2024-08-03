import Button from "../Elements/Button";
const ImageWithButton = (props) => {
  return (
    <div className="ImageWithButton">
      <img src={props.imgUrl} />
      <Button className="image_button" button={props.title} />
    </div>
  );
};

export default ImageWithButton;
