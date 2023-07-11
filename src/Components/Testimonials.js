import "../App.css";
import RegButton from "./RegButton";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="greenContainer">
      <div className="Testimonials-container">
        <h2 style={{ color: "white" }}>Testimonials</h2>
        <div>
          <TestimonialCard reviewName="Jae" reviewReview="Decent food" />
        </div>
        <div>
          <TestimonialCard reviewName="John" reviewReview="Greate Place" />
        </div>
        <div>
          <TestimonialCard reviewName="Jin" reviewReview="Love it here" />
        </div>
        <div>
          <TestimonialCard reviewName="Jake" reviewReview="Had a decent time" />
        </div>
        <div id="tes-button">
          <RegButton buttonName="View More" />
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
