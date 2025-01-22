document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const thisYear = today.getFullYear();

    const footer = document.createElement("footer");
    const copyright = document.createElement("p");
    copyright.innerHTML = `&copy; Abraham Flores ${thisYear}`;

    footer.appendChild(copyright);
    document.body.appendChild(footer);

    const footerElement = document.querySelector("footer");
    console.log(footerElement);


    const skills = ["JavaScript", "HTML", "CSS", "Python", "MySQL"];
    const skillsSection = document.querySelector("#Skills");
    const skillsList = skillsSection.querySelector("ul");

    skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
    });


    const messageForm = document.forms["leave_message"];


    messageForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const userName = event.target.usersName.value;
        const userEmail = event.target.usersEmail.value;
        const userMessage = event.target.usersMessage.value;

        console.log(`Name: ${userName}, Email: ${userEmail}, Message: ${userMessage}`);


        const messageSection = document.querySelector("#messages");
        const messageList = messageSection.querySelector("ul");


        const newMessage = document.createElement("li");
        newMessage.innerHTML = `
            <a href="mailto:${userEmail}">${userName}</a>: 
            <span>${userMessage}</span>
        `;


        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.type = "button";


        removeButton.addEventListener("click", function() {
            const entry = removeButton.parentNode;
            entry.remove();
        });


        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);

        messageForm.reset();
    });
});


function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
}
