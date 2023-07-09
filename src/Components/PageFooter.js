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
          <a href="https://www.facebook.com">
            <img
              id="fsocialIcon"
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png"
              alt=""
            ></img>
          </a>
          <a href="https://www.instagram.com">
            <img
              id="fsocialIcon"
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"
              alt=""
            ></img>
          </a>
        </ul>
      </div>
    </div>
  );
};
export default PageFooter;
