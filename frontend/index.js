import io from "socket.io-client";

console.log("Hello from a bundle.");
const socket = io();

const messageContainer = document.querySelector("#chat-container");
socket.on("chat-message", ({ message, sender }) => {
  const display = document.createElement("div");
  const name = document.createElement("span");
  name.innerText = sender;

  const thing = document.createElement("div");
  thing.innerText = message.message;
  display.appendChild(name);
  display.appendChild(thing);

  messageContainer.appendChild(display);
});

document
  .querySelector("input[id=chatMessage]")
  .addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      const message = event.target.value;
      event.target.value = "";

      fetch("/chat/0", {
        method: "post",
        body: JSON.stringify({ message }),
        headers: { "Content-Type": "application/json" },
      });
    }
  });
