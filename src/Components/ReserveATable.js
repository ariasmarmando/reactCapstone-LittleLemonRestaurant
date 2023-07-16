import "../ReserveATable_CSS.css";
import { useState } from "react";
import foodPlate from "../Images/foodPlate.svg";

const ReserveATable = () => {
  const [partySize, setPartySize] = useState(1);

  const addPerson = () => {
    if (partySize < 20) {
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
        <div id={(partySize > 2) & (partySize < 5) ? "mini-circle3" : ""}></div>
        <div id={(partySize > 3) & (partySize < 5) ? "mini-circle4" : ""}></div>
        <div id={(partySize > 2) & (partySize < 5) ? "mini-circle5" : ""}></div>
        <div id={(partySize > 2) & (partySize < 5) ? "mini-circle6" : ""}></div>
        <div id={(partySize > 4) & (partySize < 7) ? "mini-circle7" : ""}></div>
        <div id={(partySize > 4) & (partySize < 7) ? "mini-circle8" : ""}></div>
        <div id={(partySize > 4) & (partySize < 7) ? "mini-circle9" : ""}></div>

        <div
          id={(partySize > 4) & (partySize < 7) ? "mini-circle10" : ""}
        ></div>
        <div
          id={(partySize > 4) & (partySize < 7) ? "mini-circle11" : ""}
        ></div>
        <div id={partySize === 6 ? "mini-circle12" : ""}></div>
        <div id={partySize > 6 ? "mini-circle13" : ""}></div>
        <div id={partySize > 6 ? "mini-circle14" : ""}></div>
        <div id={partySize > 6 ? "mini-circle15" : ""}></div>
        <div id={partySize === 8 ? "mini-circle16" : ""}></div>
        <div id={partySize > 6 ? "mini-circle17" : ""}></div>
        <div id={partySize > 6 ? "mini-circle18" : ""}></div>
        <div id={partySize > 6 ? "mini-circle19" : ""}></div>
        <div id={partySize > 6 ? "mini-circle20" : ""}></div>
        <div
          id={
            partySize < 3
              ? "Circle"
              : partySize < 5
              ? "Squared-Table"
              : partySize < 7
              ? "Longer-Table"
              : partySize > 6
              ? "Big-Party"
              : null
          }
        >
          <div id={partySize < 3 ? "Plate-circle1" : ""}>
            {partySize < 3 ? (
              <img
                alt="Plate of food"
                src={foodPlate}
                style={{
                  width: "inherit",
                  height: "auto",
                }}
              />
            ) : null}
          </div>
          <div id={partySize === 2 ? "Plate-circle2" : ""}>
            {partySize === 2 ? (
              <img
                alt="Plate of food"
                src={foodPlate}
                style={{
                  width: "inherit",
                  height: "auto",
                }}
              />
            ) : null}
          </div>
          <div id={(partySize > 2) & (partySize < 7) ? "Plate-circle3" : ""}>
            {" "}
            {(partySize > 2) & (partySize < 7) ? (
              <img
                src={foodPlate}
                alt="Plate of food"
                style={{
                  width: "inherit",
                  height: "auto",
                }}
              />
            ) : null}
          </div>
          <div id={(partySize > 3) & (partySize < 7) ? "Plate-circle4" : ""}>
            {" "}
            {(partySize > 3) & (partySize < 7) ? (
              <img
                alt="Plate of food"
                src={foodPlate}
                style={{
                  width: "inherit",
                  height: "auto",
                }}
              />
            ) : null}
          </div>
          <div id={(partySize > 2) & (partySize < 7) ? "Plate-circle5" : ""}>
            {" "}
            {(partySize > 2) & (partySize < 7) ? (
              <img
                alt="Plate of food"
                src={foodPlate}
                style={{
                  width: "inherit",
                  height: "auto",
                }}
              />
            ) : null}
          </div>
          <div id={(partySize > 2) & (partySize < 7) ? "Plate-circle6" : ""}>
            {" "}
            {(partySize > 2) & (partySize < 7) ? (
              <img
                alt="Plate of food"
                src={foodPlate}
                style={{
                  width: "inherit",
                  height: "auto",
                }}
              />
            ) : null}
          </div>
          <div id={(partySize > 4) & (partySize < 7) ? "Plate-circle7" : ""}>
            {" "}
            {(partySize > 4) & (partySize < 7) ? (
              <img
                alt="Plate of food"
                src={foodPlate}
                style={{
                  width: "inherit",
                  height: "auto",
                }}
              />
            ) : null}
          </div>
          <div id={(partySize > 5) & (partySize < 7) ? "Plate-circle8" : ""}>
            {" "}
            {(partySize > 5) & (partySize < 7) ? (
              <img
                alt="Plate of food"
                src={foodPlate}
                style={{
                  width: "inherit",
                  height: "auto",
                }}
              />
            ) : null}
          </div>
          <div id={(partySize > 6) & (partySize < 9) ? "Plate-circle9" : ""}>
            {" "}
            {(partySize > 6) & (partySize < 9) ? (
              <img
                alt="Plate of food"
                src={foodPlate}
                style={{
                  width: "inherit",
                  height: "auto",
                }}
              />
            ) : null}
          </div>
          <div id={(partySize > 6) & (partySize < 9) ? "Plate-circle10" : ""}>
            {" "}
            {(partySize > 6) & (partySize < 9) ? (
              <img
                alt="Plate of food"
                src={foodPlate}
                style={{
                  width: "inherit",
                  height: "auto",
                }}
              />
            ) : null}
          </div>
          <div id={(partySize > 6) & (partySize < 9) ? "Plate-circle11" : ""}>
            {" "}
            {(partySize > 6) & (partySize < 9) ? (
              <img
                alt="Plate of food"
                src={foodPlate}
                style={{
                  width: "inherit",
                  height: "auto",
                }}
              />
            ) : null}
          </div>
          <div id={(partySize > 6) & (partySize < 9) ? "Plate-circle12" : ""}>
            {" "}
            {(partySize > 6) & (partySize < 9) ? (
              <img
                alt="Plate of food"
                src={foodPlate}
                style={{
                  width: "inherit",
                  height: "auto",
                }}
              />
            ) : null}
          </div>
          <div id={(partySize > 6) & (partySize < 9) ? "Plate-circle13" : ""}>
            {" "}
            {(partySize > 6) & (partySize < 9) ? (
              <img
                alt="Plate of food"
                src={foodPlate}
                style={{
                  width: "inherit",
                  height: "auto",
                }}
              />
            ) : null}
          </div>
          <div id={(partySize > 6) & (partySize < 9) ? "Plate-circle14" : ""}>
            {" "}
            {(partySize > 6) & (partySize < 9) ? (
              <img
                alt="Plate of food"
                src={foodPlate}
                style={{
                  width: "inherit",
                  height: "auto",
                }}
              />
            ) : null}
          </div>
          <div id={(partySize > 6) & (partySize < 9) ? "Plate-circle15" : ""}>
            {" "}
            {(partySize > 6) & (partySize < 9) ? (
              <img
                alt="Plate of food"
                src={foodPlate}
                style={{
                  width: "inherit",
                  height: "auto",
                }}
              />
            ) : null}
          </div>
          <div id={(partySize > 7) & (partySize < 9) ? "Plate-circle16" : ""}>
            {" "}
            {(partySize > 7) & (partySize < 9) ? (
              <img
                alt="Plate of food"
                src={foodPlate}
                style={{
                  width: "inherit",
                  height: "auto",
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
      <div id="Party-button">
        <h2>Party Size</h2>
        <h1>{partySize}</h1>
        <button
          id={partySize > 1 ? "removePerson" : "removePerson_OFF"}
          onClick={partySize > 1 ? removePerson : null}
        >
          -
        </button>
        <button
          id={partySize < 8 ? "addPerson" : "addPerson_OFF"}
          onClick={partySize < 8 ? addPerson : null}
        >
          +
        </button>
      </div>
      {partySize > 7 ? (
        <h2 id="PartyLimit">For parties over 8 people, please call us.</h2>
      ) : null}

      <div id="Date">
        <h3>Select a Date:</h3>
      </div>
      <div id="DatePickerbg">
        <div id="calendar-container">
          <h4>June</h4>
          <div className="DateDayContainer">
            <p>S</p>
          </div>
        </div>
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
