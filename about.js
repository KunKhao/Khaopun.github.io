const input = document.getElementById("messageInput");
const display = document.getElementById("messageDisplay");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    let message = input.value.trim();

    if (message !== "") {

      let reply = "";

      // simple auto reply logic
      if (message.toLowerCase() === "hello" || "hi there") {
        reply = "hi";
      } else if (message.toLowerCase() === "what your name?") {
        reply = "Sunphatara meejun";
      } else if (message.toLowerCase() === "how old are you?") {
        reply = "20";
      } else if (message.toLowerCase() === "tell me about yourself?") {
        reply = "Name: Sunphatara meejun. From thailand. Age: 20";
      }
      else {
        reply = message; // default = repeat
      }

      const newMessage = document.createElement("p");
      newMessage.textContent = reply;

      display.appendChild(newMessage);
      input.value = "";
    }
  }
});