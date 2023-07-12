import "../App.css";
import aboutUsIMG1 from "../Images/Mario and Adrian A.jpg";
import aboutUsIMG2 from "../Images/Mario and Adrian b.jpg";

const OverlappedIMG = () => {
  return (
    <div className="About-IMGcontainer">
      <div>
        <img src={aboutUsIMG1} alt="" />
      </div>
      <div>
        <img src={aboutUsIMG2} alt="" />
      </div>
    </div>
  );
};
export default OverlappedIMG;
