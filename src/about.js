import aboutImg from "./Askeladd.jpg";

const aboutFunction = () => {
  const content = document.getElementById("content");
  const title = document.createElement("h2");
  content.innerHTML = "";
  content.setAttribute("class", "grid");
  const askeladd = new Image();
  askeladd.src = aboutImg;
  content.appendChild(title);
  content.appendChild(askeladd);
  askeladd.setAttribute("class", "image");

  About();
};

const About = () => {
  const aboutContainer = document.createElement("div");
  aboutContainer.setAttribute("class", "pContainer");
  const about = document.createElement("p");
  about.innerText =
    " We know that face. The irrational desire of eating a juicy chunk of beef. Dont't worry, thats why we are here. Valhalla's meats is a place thought specially for those with a genuine viking apetite, those who wage war against their hunger. Enjoy yourself with the best cuts of meat cooked to perfection.";
  about.setAttribute("class", "para");
  aboutContainer.appendChild(about);
  content.appendChild(aboutContainer);
};

export { aboutFunction };
