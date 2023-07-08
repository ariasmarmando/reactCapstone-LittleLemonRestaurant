import "./App.css";
import Nav from "./Nav";
import Header from "./Header";
import SpecialsWrapper from "./SpecialsWrapper";
import Testimonials from "./Testimonials";

const restaurantTitle = "Little Lemon";
const locationTitle = "California";
const restaurantDesc =
  "Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header
        title={restaurantTitle}
        Ltitle={locationTitle}
        desc={restaurantDesc}
      />
      <SpecialsWrapper />
      <Testimonials />
    </div>
  );
}

export default App;
