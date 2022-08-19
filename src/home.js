import homeImg from "./Thorkell.jpg";

const homeFunction = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.setAttribute("class", "grid");
  const title = document.createElement("h1");
  const thorkell = new Image();
  thorkell.src = homeImg;
  title.innerHTML = "Valhalla Meats";
  content.appendChild(title);
  content.appendChild(thorkell);
  thorkell.setAttribute("class", "image");
  Greeting();
};

const Greeting = () => {
  const greetingContainer = document.createElement("div");
  greetingContainer.setAttribute("class", "pContainer");
  const greeting = document.createElement("p");
  greeting.innerText =
    "Greetings Warrior. Welcome to Valhalla Dinning Hall. Here, your apetite would face its most delicious challenge. Are you ready?";
  greeting.setAttribute("class", "para");
  greetingContainer.appendChild(greeting);
  content.appendChild(greetingContainer);
};

export { homeFunction };
