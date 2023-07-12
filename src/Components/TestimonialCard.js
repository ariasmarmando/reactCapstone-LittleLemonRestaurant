import "../App.css";
import { FaStar, FaUserCircle } from "react-icons/fa";

const TestimonialCard = (props) => {
  const starRating = 5;
  return (
    <div className="tes-card">
      <div>
        {[...Array(starRating)].map((star, index) => {
          return <FaStar key={index} color="#FFC403" id="reactIconsStar" />;
        })}
      </div>
      <div className="ReviwerIMGContainer">
        <FaUserCircle color="#333333" id="reactIconsUser" />
      </div>

      <p id="ReviwerName">{props.reviewName}</p>
      <div className="ReviewComment">
        <p>{props.reviewReview}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
