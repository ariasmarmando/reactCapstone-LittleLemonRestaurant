import "../App.css";
import RegButton from "./RegButton.js";
import headerIMG from "../Images/restauranfood.jpg";

const Header = (props) => {
  return (
    <div className="greenContainer">
      <div className="header_container">
        <h1 id="TitleHeader">{props.title}</h1>
        <h3 id="LocationHeader">{props.Ltitle}</h3>
        <p id="T-overGreen">{props.desc}</p>
        <RegButton buttonName="Reserve a Table" />
        <img src={headerIMG} alt=""></img>
      </div>
    </div>
  );
};
export default Header;
