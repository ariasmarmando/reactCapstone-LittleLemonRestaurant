import "../App.css";

const AboutUs = (props) => {
  return (
    <div className="nobgContainer2">
      <h1 id="TitleHeader">{props.Atitle}</h1>
      <h3 id="LocationHeader">{props.ALtitle}</h3>
      <p>{props.aboutusdesc}</p>
      <img id="overlapthis" src="./" alt="" />
      <img id="thebigimage" src="./" alt="" />
    </div>
  );
};
export default AboutUs;
