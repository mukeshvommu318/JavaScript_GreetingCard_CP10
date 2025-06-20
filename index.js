let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parseGreeting = JSON.parse(greeting)

let container = document.createElement("div")
container.classList.add("containerId")
document.body.appendChild(container)

let paraFrom = document.createElement("p")
paraFrom.classList.add("paraFormClass");
paraFrom.textContent="From : " + parseGreeting["from"]
container.appendChild(paraFrom)

let paraTo = document.createElement("p")
paraTo.classList.add("paraToClass");
paraTo.textContent="To : " + parseGreeting["to"]
container.appendChild(paraTo)

let subContainer = document.createElement("div")
subContainer.classList.add("subConId")
container.appendChild(subContainer)

let heading = document.createElement("h1")
heading.textContent="Happy New Year"
subContainer.appendChild(heading)

let paraGreet = document.createElement("p")
paraGreet.textContent=parseGreeting["greetText"]
subContainer.appendChild(paraGreet)

