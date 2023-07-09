import "../App.css";
import FooterLogo from "../Images/logoLLR.png";
const PageFooter = () => {
  return (
    <div className="greenContainer">
      <div className="footer-grid">
        <img src={FooterLogo} alt="" />
        <ul>
          <h3>Doormat Nav</h3>
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
          <h3>Contact</h3>
          <p>123st, San Fransico, CA 123456</p>
          <p>#: 123-123-1234</p>
          <p>littlelemon@notreal.com</p>
        </ul>
        <ul>
          <h3>Social Media</h3>
        </ul>
      </div>
    </div>
  );
};
export default PageFooter;
