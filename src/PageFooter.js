import "./App.css";
import FooterLogo from "./Images/logoLLR.png";
const PageFooter = () => {
  return (
    <div className="greenContainer">
      <div className="footer-grid">
        <img src={FooterLogo} alt="" />
        <ul>
          <p>Doormat Nav</p>
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
        <ul>
          <p>Contact</p>
        </ul>
        <ul>
          <p>Social Media</p>
        </ul>
      </div>
    </div>
  );
};
export default PageFooter;
