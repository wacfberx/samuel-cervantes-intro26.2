/* 
   Dynamically add copyright
*/


const body = document.querySelector("body");

const footer = document.createElement("footer");

body.appendChild(footer);

const today = new Date();

const thisYear = today.getFullYear();

const copyright = document.createElement("p");

copyright.innerHTML = `Sammy Cervantes © ${thisYear}`;

footer.appendChild(copyright);


/* 
   Dynamially add skills
*/

const skills = [ "ai automation", "r", "python", "javascript", "data visualization", "survey analysis"];

const skillsSection = document.querySelector("#Skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {

  const skill = document.createElement("li");

  skill.innerText = skills[i];

  skillsList.appendChild(skill);
}

/* 
   Handle Message Form
*/

const messageForm = document.forms["leave_message"];


messageForm.addEventListener("submit", function(event) {


  event.preventDefault();


  const name = event.target.usersName.value;
  const email = event.target.usersEmail.value;
  const message = event.target.usersMessage.value;

  console.log(name, email, message);

  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
    <a href="mailto:${email}">
      ${name}
    </a>
    <span>
      ${message}
    </span>
  `;


  const removeButton = document.createElement("button");

  removeButton.innerText = "remove";

  removeButton.type = "button";

  removeButton.addEventListener("click", function() {
    const entry = removeButton.parentNode;
    entry.remove();

  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();

});
