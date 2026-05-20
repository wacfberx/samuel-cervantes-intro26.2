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

const skills = [ "ai iutomation", "r", "python", "javascript", "data visualization", "survey analysis"];

const skillsSection = document.querySelector("#Skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {

  const skill = document.createElement("li");

  skill.innerText = skills[i];

  skillsList.appendChild(skill);
}