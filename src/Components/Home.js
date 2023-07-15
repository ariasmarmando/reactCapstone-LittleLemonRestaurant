import "../App.css";
import Header from "./Header";
import SpecialsWrapper from "./SpecialsWrapper";
import Testimonials from "./Testimonials";
import AboutUs from "./AboutUs-Section";

const restaurantTitle = "Little Lemon";
const locationTitle = "California";
const restaurantDesc =
  "Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.";

const HomePage = () => {
  return (
    <div>
      <Header
        title={restaurantTitle}
        Ltitle={locationTitle}
        desc={restaurantDesc}
      />
      <SpecialsWrapper />
      <Testimonials />
      <AboutUs
        Atitle={restaurantTitle}
        ALtitle={locationTitle}
        aboutusdesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </div>
  );
};

export default HomePage;
