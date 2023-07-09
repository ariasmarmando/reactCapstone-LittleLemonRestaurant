import "../App.css";

const SpecialItem = (props) => {
  return (
    <div className="S-itemWrapper">
      <img src={props.specialItem} alt="Special Menu Item" />
      <p id="spItemName">{props.specialItemName}</p>
      <p id="spItemPrice">{props.specialItemPrice}</p>
      <p id="spItemDescription">{props.SpecialDesc}</p>
      <a href={props.SpecialItemLink}>
        Order for delivery{props.SpecialItemLinkIMG}
      </a>
    </div>
  );
};
export default SpecialItem;
