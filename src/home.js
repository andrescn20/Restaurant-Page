import homeImg from "./Thorkell.jpg";

const homeFunction = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
  const thorkell = new Image(356, 200);
  thorkell.src = homeImg;
  content.appendChild(thorkell);
  Greeting();
};

const Greeting = () => {
  const greeting = document.createTextNode(
    "Greetings Warrior. Welcome to Valhalla Dinning Hall. Here, your apetite would face his most delicious challenge. Are you ready?"
  );
  content.appendChild(greeting);
};

export { homeFunction };
