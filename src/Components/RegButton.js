import { Link } from "react-router-dom";
import "../App.css";
const RegButton = (props) => {
  return (
    <button id="regButton">
      <Link to={props.LinkRoute}>{props.buttonName}</Link>
    </button>
  );
};
export default RegButton;
