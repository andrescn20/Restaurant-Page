import { homeFunction } from "./home";
import gitHubLogo from "./gitHubLogo.png";

const Header = () => {
  const header = document.createElement("div");
  header.setAttribute("id", "header");

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
      alert("Menu");
      break;
    case "About":
      alert("About");
      break;
  }
};

const Footer = () => {
  const footer = document.createElement("footer");

  const creator = document.createTextNode("Created by: andrescn20");
  const gitLogo = new Image(30, 30);
  const logoLink = document.createElement("a");
  logoLink.href = "https://github.com/andrescn20";
  gitLogo.src = gitHubLogo;

  footer.appendChild(creator);
  footer.appendChild(logoLink);
  logoLink.appendChild(gitLogo);

  return footer;
};

const Clean = () => {
  const content = document.getElementById("content");
  content.innerHtml = "";
};

export { Header, Footer, Clean };
