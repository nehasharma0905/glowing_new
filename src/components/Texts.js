const HeadingTexts = (props) => {
  return (
    <div className="HeadingTexts">
      <h1 className="text">{props.head}</h1>
      <p className="text1">{props.para}</p>
    </div>
  );
};
export default HeadingTexts;
