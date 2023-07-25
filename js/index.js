//Footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
const copyrightSymbol = "\u00A9";

copyright.innerHTML = "Ashley Bocanegra " + copyrightSymbol + " " + thisYear;
footer.appendChild(copyright);

//Skills
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
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skill.classList.add("skillsboxes");
  skillsList.appendChild(skill);
}

//Form element
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target.usersName;
  const email = event.target.usersEmail;
  const message = event.target.usersMessage;

  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.classList.add("listedmessages");

  newMessage.innerHTML = `<a href="mailto:${email.value}">${name.value}</a>
  <span>wrote: ${message.value} </span>`;

  const removeButton = document.createElement("button");
  removeButton.classList.add("buttonremove");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", (event) => {
    const entry = removeButton.parentNode;

    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});

//Project Links
fetch("https://api.github.com/users/aboclo/repos")
  .then(checkStatus)
  .then((response) => response.json())
  .then((repositories) => {
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement("li");
      const projectLinks = document.createElement("a");
      projectLinks.href = repositories[i].html_url;
      projectLinks.textContent = repositories[i].name;
      project.classList.add("projectStyle");
      project.appendChild(projectLinks);
      projectList.appendChild(project);
    }
  })
  .catch((error) => console.log("Error", error));

function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

//Scroll to top button
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Modal
var expData = {
  casaLimpia:
    "Casa Limpia: Manager from July 2020 - Present: Supervision and regulation of the company's calendar development and maintenance. Management of client relations, focused on fostering and enhancing customer relationships. Execution of bookkeeping tasks and meticulous data entry to ensure the accuracy and reliability of financial records. Accountability for cultivating and preserving client relationships, addressing inquiries through telephone and email correspondence in a professional and timely manner. Contribution to the advancement of the company's promotional campaigns and web development initiatives, thereby increasing brand visibility and engagement.",

  shiftFour:
    "Shift 4 Payments: Marketing Associate from October 2019 - April 2020: Conducted in-depth research to find potential clients and connected with them through professional phone conversations. Reviewed their current Point of Sale (POS) needs, and effectively presented relevant information about our company's solutions. The objective of this process was to strategically schedule appointments, laying the groundwork for potential future sales conversions.",

  prioritizeSuccess:
    "Prioritize Success LLC: Social Media Marketing Intern from October 2019 - January 2020: Engaged in a collaborative internship program, honing skills in strategic hashtag research, customer pain point identification, and comprehensive competitor analysis. Additionally, undertook content creation responsibilities, contributing to the company's content portfolio, with a portion of the developed material selected for publication.",
};

function openExp(expId) {
  var expContainer = document.getElementById("expContainer");
  var expText = document.getElementById("expText");

  var text = expData[expId];

  expText.textContent = text;
  expContainer.style.display = "block";
}
function closeExp() {
  var expContainer = document.getElementById("expContainer");
  expContainer.style.display = "none";
}

//Download Button
document
  .getElementById("download-button")
  .addEventListener("click", function () {
    var downloadLink = document.createElement("a");
    downloadLink.href = "resume/Resume_2023.pdf";
    downloadLink.download = "Resume_2023.pdf";
    downloadLink.dispatchEvent(new MouseEvent("click"));
  });
