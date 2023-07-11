import "../App.css";
import { FaStar, FaUserCircle } from "react-icons/fa";

const TestimonialCard = (props) => {
  const starRating = 5;
  return (
    <div className="tes-card">
      <div>
        {[...Array(starRating)].map((star, index) => {
          return <FaStar key={index} color="#FFC403" fontSize="1.5em" />;
        })}
      </div>
      <div className="ReviwerIMGContainer">
        <FaUserCircle color="#333333" fontSize="2em" />
      </div>

      <p>{props.reviewName}</p>
      <p>{props.reviewReview}</p>
    </div>
  );
};

export default TestimonialCard;
