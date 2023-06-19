let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
const copyrightSymbol = "\u00A9";

copyright.innerHTML = "Ashley Bocanegra " + copyrightSymbol + " " + thisYear;
footer.appendChild(copyright);

const skills = [
  "Client Relations",
  "Research",
  "Problem-solving",
  "Project Management",
  "Bookkeeping/Data Entry",
  "Data Analysis",
];

const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  var skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
