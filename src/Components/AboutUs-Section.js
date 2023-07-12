import "../App.css";
import OverlappedIMG from "./OverlappedIMG";

const AboutUs = (props) => {
  return (
    <div className="nobgContainer2">
      <h1 id="AboutItem1">{props.Atitle}</h1>
      <h3 id="AboutItem2">{props.ALtitle}</h3>
      <p id="AboutItem3">{props.aboutusdesc}</p>
      <div id="AboutItem4">
        <OverlappedIMG />
      </div>
    </div>
  );
};
export default AboutUs;
