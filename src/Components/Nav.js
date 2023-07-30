import "../App.css";
import LogoImg from "../Images/Logo.webp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Home";
import ReserveATable from "./ReserveATable";
const Nav = () => {
  return (
    <>
      <Router>
        <div className="nav">
          <Link to="/">
            <img src={LogoImg} alt=""></img>
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="./">Menu</Link>
            </li>
            <li>
              <Link to="/reserve-a-table">Reservations</Link>
            </li>
            <li>
              <Link to="./">Order Online</Link>
            </li>
            <li>
              <Link to="./">Login</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reserve-a-table" element={<ReserveATable />} />
        </Routes>
      </Router>
    </>
  );
};
export default Nav;
