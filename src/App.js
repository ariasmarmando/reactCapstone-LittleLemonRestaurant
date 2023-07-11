import "./App.css";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import SpecialsWrapper from "./Components/SpecialsWrapper";
import PageFooter from "./Components/PageFooter";
import Testimonials from "./Components/Testimonials";

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
      <PageFooter />
    </div>
  );
}

export default App;
