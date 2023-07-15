import "../ReserveATable_CSS.css";
import { useState } from "react";

const ReserveATable = () => {
  const [partySize, setPartySize] = useState(1);

  const addPerson = () => {
    if (partySize < 6) {
      setPartySize((count) => count + 1);
    }
  };
  const removePerson = () => {
    if (partySize === 1) {
    } else setPartySize((count) => count - 1);
  };

  return (
    <div className="ReserveATable">
      <div id="RAT-Title">
        <h1>Reseve A Table</h1>
      </div>
      <div className="Table-view">
        <div id={partySize < 3 ? "mini-circle" : ""}></div>
        <div id={partySize === 2 ? "mini-circle2" : ""}></div>
        <div id={partySize > 2 ? "mini-circle3" : ""}></div>
        <div id={partySize > 3 ? "mini-circle4" : ""}></div>
        <div id={partySize > 2 ? "mini-circle5" : ""}></div>
        <div id={partySize > 2 ? "mini-circle6" : ""}></div>
        <div id={partySize > 2 ? "Squared-Table" : "Circle"}>
          <div id={partySize < 3 ? "Plate-circle1" : ""}></div>
          <div id={partySize === 2 ? "Plate-circle2" : ""}></div>
          <div id={partySize > 2 ? "Plate-circle3" : ""}></div>
          <div id={partySize > 3 ? "Plate-circle4" : ""}></div>
          <div id={partySize > 2 ? "Plate-circle5" : ""}></div>
          <div id={partySize > 2 ? "Plate-circle6" : ""}></div>
        </div>
      </div>
      <div id="Party-button">
        <h2>Party Size</h2>
        <h1>{partySize}</h1>
        <button onClick={removePerson}>-</button>
        <button onClick={addPerson}>+</button>
      </div>
      <div id="Date">
        <h3>Select a Date:</h3>
      </div>
      <div id="DatePickerbg">
        <div id="calendar-container"></div>
      </div>
      <div id="Time">
        <h3>Pick a time:</h3>
      </div>
      <div id="Name">
        <h3>Name:</h3>
      </div>
      <div id="Phone">
        <h3>Phone Number:</h3>
      </div>
      <div id="Notes">
        <h3>Notes:</h3>
      </div>
    </div>
  );
};
export default ReserveATable;
