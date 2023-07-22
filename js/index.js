const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
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
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skill.classList.add("skillsboxes");
  skillsList.appendChild(skill);
}

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

const githubRequest = new XMLHttpRequest();
const url = "https://api.github.com/users/aboclo/repos";

githubRequest.open("GET", url);
githubRequest.send();

githubRequest.addEventListener("load", (event) => {
  const repositories = JSON.parse(githubRequest.response);

  const projectSection = document.getElementById("projects");
  const projectList = projectSection.querySelector("ul");

  for (let i = 0; i < repositories.length; i++) {
    const project = document.createElement("li");
    const projectLinks = document.createElement("a");
    projectLinks.href = repositories[i].html_url;
    projectLinks.textContent = repositories[i].name;
    project.appendChild(projectLinks);
    projectList.appendChild(project);
  }
});
