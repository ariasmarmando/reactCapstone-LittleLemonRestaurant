import "../ReserveATable_CSS.css";
import { useState } from "react";
import foodPlate from "../Images/foodPlate.svg";
import FormInput from "./FormInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SubButton from "./SubButton";

const ReserveATable = () => {
  const [partySize, setPartySize] = useState(1);
  const styleDeside = [{ display: "none" }, { display: "inline" }];
  const [startDate, setStartDate] = useState(null);
  const [timeDeside, setTimeDeside] = useState(null);
  const [overlayHere, setOverlayHere] = useState(false);
  const [savedInfo, SetSavedInfo] = useState({
    size: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  var timeDesicion = Math.round(timeDeside * 100);

  var tomorrow = Date.now() + 3600 * 1000 * 24;

  const availableTimes = [
    {
      id: 1,
      time: "5:00PM",
      label:
        startDate == null
          ? styleDeside[0]
          : Math.round(timeDesicion * Math.random()) % 2 === 0
          ? styleDeside[1]
          : styleDeside[0],
      required:
        Math.round(timeDesicion * Math.random()) % 2 === 0 ? true : false,
    },
    {
      id: 2,
      time: "6:00PM",
      label:
        startDate == null
          ? styleDeside[0]
          : Math.round(timeDesicion * Math.random()) % 2 === 0
          ? styleDeside[1]
          : styleDeside[0],
      required:
        Math.round(timeDesicion * Math.random()) % 2 === 0 ? true : false,
    },
    {
      id: 3,
      time: "7:00PM",
      label:
        startDate == null
          ? styleDeside[0]
          : Math.round(timeDesicion * Math.random()) % 2 === 0
          ? styleDeside[1]
          : styleDeside[0],
      required:
        Math.round(timeDesicion * Math.random()) % 2 === 0 ? true : false,
    },
    {
      id: 4,
      time: "8:00PM",
      label:
        startDate == null
          ? styleDeside[0]
          : Math.round(timeDesicion * Math.random()) % 2 === 0
          ? styleDeside[1]
          : styleDeside[0],
      required:
        Math.round(timeDesicion * Math.random()) % 2 === 0 ? true : false,
    },
    {
      id: 5,
      time: "9:00PM",
      label:
        startDate == null
          ? styleDeside[0]
          : Math.round(timeDesicion * Math.random()) % 2 === 0
          ? styleDeside[1]
          : styleDeside[0],
      required:
        Math.round(timeDesicion * Math.random()) % 2 === 0 ? true : false,
    },
    {
      id: 6,
      time: "10:00PM",
      label:
        startDate == null
          ? styleDeside[0]
          : Math.round(timeDesicion * Math.random()) % 2 === 0
          ? styleDeside[1]
          : styleDeside[0],
      required:
        Math.round(timeDesicion * Math.random()) % 2 === 0 ? true : false,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
    const reservSize = data.getAll("party");
    const reservDate = data.getAll("date");
    const reservTime = data.getAll("Time");
    const reservName = data.getAll("fullname");
    const reservEmail = data.getAll("email");
    const reservPhone = data.getAll("phone");
    const reservNotes = data.getAll("notes");
    var formCleaner = document.getElementsByName("reservation-form")[0];
    formCleaner.reset();
    setStartDate(null);
    setPartySize(1);
    setOverlayHere(true);
    SetSavedInfo({
      ...savedInfo,
      size: reservSize,
      date: reservDate,
      time: reservTime,
      name: reservName,
      email: reservEmail,
      phone: reservPhone,
      notes: reservNotes,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setOverlayHere(false);
    }, "5000");
  };

  const onChange = (e) => {
    setStartDate(e);
    setTimeDeside(Math.random);
  };

  const addPerson = () => {
    if (partySize < 20) {
      setPartySize((count) => count + 1);
    }
  };
  const removePerson = () => {
    if (partySize === 1) {
    } else setPartySize((count) => count - 1);
  };

  const overlayClick = () => {
    setOverlayHere(false);
  };

  function Popup() {
    return (
      <div
        className="form_overlay"
        style={overlayHere === false ? { display: "none" } : { display: "" }}
      >
        <button className="overlay_button" onClick={overlayClick}>
          x
        </button>
        <h3>Your reservation has been made, {savedInfo.name}.</h3>
      </div>
    );
  }
  return (
    <div className="ReserveATable">
      <Popup />
      <div id="RAT-Title">
        <h1>Reserve a table</h1>
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
      <div className="ReservationForm">
        <form onSubmit={handleSubmit} name="reservation-form">
          <label htmlFor="Party-Size-Selected">How many people?</label>
          <input
            id="Party-Size-Selected"
            className="singleInput"
            readOnly
            name="party"
            value={partySize}
          />
          {partySize > 7 ? (
            <label id="PartyLimit">
              For parties over 8 people, please call us.
            </label>
          ) : null}
          <label className="singleLabel" htmlFor="Date-Selection">
            Select a date:
          </label>
          <DatePicker
            id="Date-Selection"
            name="date"
            value={startDate}
            selected={startDate}
            placeholderText="Please select a date"
            onChange={onChange}
            monthsShown={2}
            required
            closeOnScroll={true}
            minDate={tomorrow}
            withPortal
          />
          <label className="singleLabel" htmlFor="Time-Selection">
            Select a time:
          </label>
          <fieldset>
            {availableTimes.map((time) => {
              return (
                <div
                  className="Time-Selection"
                  key={time.id}
                  style={time.label}
                >
                  <label
                    className="timeselect-label"
                    key={time.id}
                    htmlFor={time.id}
                    style={time.label}
                  >
                    {time.time}
                    <input
                      key={time.id}
                      type="radio"
                      name="Time"
                      id={time.id}
                      value={time.time}
                      required={time.required}
                    />
                  </label>
                </div>
              );
            })}
            <h3
              style={
                startDate == null ? { color: "#EE9972" } : { display: "none" }
              }
            >
              Please select a date first
            </h3>
          </fieldset>
          <FormInput
            id="fullname"
            name="fullname"
            type="text"
            placeholder="Full Name"
            errorMessage="Something is wrong with the name you entered"
            label="Full Name"
            pattern="^[a-zA-Z]+(?:\s+[a-zA-Z]+)*$"
            required
          />
          <FormInput
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            errorMessage="Something is wrong with your email address"
            label="Email"
            required
          />
          <FormInput
            id="phone"
            name="phone"
            type="text"
            placeholder="Phone Number"
            errorMessage="Something is wrong with your phone number"
            label="Phone Number"
            pattern="^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
            required
          />
          <FormInput
            id="notes"
            name="notes"
            type="text"
            placeholder="Any special accomodations needed?"
            label="Notes"
            maxLength="35"
          />
          <div className="centeredButton">
            <SubButton buttonName="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default ReserveATable;
