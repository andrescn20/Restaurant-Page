// import menuImg from "./DinningHall.jpg";

const menuFunction = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.removeAttribute("class", "grid");

  const plate1 = {
    name: "Thorfins Revenge",
    description:
      "Whole Tomahawk Steak cooked directly in contact with the charcoal",
    price: "$35",
  };
  const plate2 = {
    name: "Thorkell Roast",
    description:
      "Four-Bone Rib Roast with poached potatoes. Our biggest plate, fit for a giant berserker (or 4 regular warriors)",
    price: "$100",
  };
  const plate3 = {
    name: "The impostor",
    description:
      "Coming from another land: The Queen of beef. Delicious juicy picanha steaks",
    price: "$30",
  };
  const plate4 = {
    name: "Royal delight",
    description:
      "For those who eat with grace but yearn for battle. A perfect Ribeye basted in butter",
    price: " $45",
  };

  AppendPlates(plate1);
  AppendPlates(plate2);
  AppendPlates(plate3);
  AppendPlates(plate4);
};

const AppendPlates = (plate) => {
  const nameContainer = document.createElement("p");
  nameContainer.innerText = plate.name;
  nameContainer.setAttribute("class", "plateName");

  const descriptionContainer = document.createElement("p");
  descriptionContainer.innerText = plate.description;
  descriptionContainer.setAttribute("class", "description");

  const priceContainer = document.createElement("p");
  priceContainer.innerText = plate.price;
  priceContainer.setAttribute("class", "price");

  content.appendChild(nameContainer);
  content.appendChild(descriptionContainer);
  content.appendChild(priceContainer);
};

export { menuFunction };
