import "./App.css";
import RegButton from "./RegButton";
import SpecialItem from "./SpecialItem";
import specialItem1 from "./Images/greek salad.jpg";
import specialItem3 from "./Images/lemon dessert.jpg";

const specialItemList1 = "Greek Salad";
const specialItemPrice1 = 12.99;
const specialItemDesc1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const SpecialsWrapper = () => {
  return (
    <div className="nobgContainer">
      <p>This week's specials!</p>
      <RegButton buttonName="Online Menu" />
      <SpecialItem
        specialItem={specialItem1}
        specialItemName={specialItemList1}
        specialItemPrice={specialItemPrice1}
        SpecialDesc={specialItemDesc1}
        SpecialItemLink="./"
        SpecialItemLinkIMG=""
      />
      <SpecialItem
        specialItem={specialItem1}
        specialItemName={specialItemList1}
        specialItemPrice={specialItemPrice1}
        SpecialDesc={specialItemDesc1}
        SpecialItemLink="./"
        SpecialItemLinkIMG=""
      />
      <SpecialItem
        specialItem={specialItem3}
        specialItemName={specialItemList1}
        specialItemPrice={specialItemPrice1}
        SpecialDesc={specialItemDesc1}
        SpecialItemLink="./"
        SpecialItemLinkIMG=""
      />
    </div>
  );
};
export default SpecialsWrapper;
