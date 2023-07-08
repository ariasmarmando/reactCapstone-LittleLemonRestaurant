import "./App.css";
import LogoImg from "./Images/Logo.webp";

const Nav = () => {
  return (
    <div className="nav">
      <img src={LogoImg} alt=""></img>
      <ul>
        <li>
          <a href="./">Home</a>
        </li>
        <li>
          <a href="./">About</a>
        </li>
        <li>
          <a href="./">Menu</a>
        </li>
        <li>
          <a href="./">Reservations</a>
        </li>
        <li>
          <a href="./">Order Online</a>
        </li>
        <li>
          <a href="./">Login</a>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
