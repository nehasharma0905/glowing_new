const Button = (props) => {
  return (
    <button className={`button ${props.className ?? ""}`}>
      {props.button}
    </button>
  );
};

export default Button;
