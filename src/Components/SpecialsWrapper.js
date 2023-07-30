import "../App.css";
import RegButton from "./RegButton";
import SpecialItem from "./SpecialItem";
import specialItem1 from "../Images/greek salad.jpg";
import specialItem2 from "../Images/bruschetta-chopping-board.jpg";
import specialItem3 from "../Images/lemon dessert.jpg";

const specialMenuItems = [
  {
    id: "sp1",
    name: "Greek Salad",
    price: "12.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    pic: specialItem1,
  },
  {
    id: "sp2",
    name: "Bruchetta",
    price: "5.99",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    pic: specialItem2,
  },
  {
    id: "sp3",
    name: "Lemon Dessert",
    price: "5.00",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    pic: specialItem3,
  },
];

const SpecialsWrapper = () => {
  return (
    <div className="nobgContainer">
      <p>This week's specials!</p>
      <RegButton LinkRoute="" buttonName="Online Menu" />
      {specialMenuItems.map((item) => {
        return (
          <SpecialItem
            key={item.id}
            specialItem={item.pic}
            specialItemName={item.name}
            specialItemPrice={item.price}
            SpecialDesc={item.desc}
            SpecialItemLink="./"
          />
        );
      })}
    </div>
  );
};
export default SpecialsWrapper;
