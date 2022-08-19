import { homeFunction } from "./home";
import { menuFunction } from "./menu";
import { aboutFunction } from "./about";
import gitHubLogo from "./gitHubLogo.png";
import homeImg from "./Thorkell.jpg";

const Header = () => {
  const header = document.createElement("header");

  header.appendChild(Button("Home"));
  header.appendChild(Button("Menu"));
  header.appendChild(Button("About"));

  return header;
};

const Button = (btnName) => {
  const button = document.createElement("button");
  button.setAttribute("id", btnName);
  button.textContent = btnName;
  button.onclick = () => {
    buttonAction(btnName);
  };

  return button;
};

const buttonAction = (btnName) => {
  switch (btnName) {
    case "Home":
      homeFunction();
      break;
    case "Menu":
      menuFunction();
      break;
    case "About":
      aboutFunction();
      break;
  }
};

const Footer = () => {
  const footer = document.createElement("footer");

  const creator = document.createTextNode("Created by: andrescn20");
  const gitLogo = new Image(30, 30);
  gitLogo.setAttribute("id", "gitLogo");
  const logoLink = document.createElement("a");
  logoLink.href = "https://github.com/andrescn20";
  gitLogo.src = gitHubLogo;

  footer.appendChild(fooTextContainer);
  fooTextContainer.appendChild(creator);
  fooTextContainer.appendChild(logoLink);
  logoLink.appendChild(gitLogo);

  return footer;
};

const modifiedHome = () => {
  const content = document.getElementById("content");
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

export { Header, Footer, modifiedHome };
