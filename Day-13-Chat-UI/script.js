const input = document.getElementById("messageInput");
const chatMessages = document.getElementById("chatMessages");

function sendMessage() {

  const messageText = input.value.trim();

  if (messageText === "") return;

  addMessage(messageText, "user");

  input.value = "";

  scrollToBottom();

  setTimeout(() => {

    const botReply = generateReply(messageText);

    addMessage(botReply, "bot");

    scrollToBottom();

  }, 700);
}

function addMessage(text, type) {

  const message = document.createElement("div");

  message.classList.add("message", type);

  message.innerHTML = `<p>${text}</p>`;

  chatMessages.appendChild(message);
}

/* Bot reply logic */

function generateReply(userText) {

  const text = userText.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return "Hello there 👋 How can I assist you?";
  }

  if (text.includes("price")) {
    return "Our pricing depends on the product. Which one are you interested in?";
  }

  if (text.includes("help")) {
    return "Sure tell me what you need help with.";
  }

  if (text.includes("bye")) {
    return "Goodbye! Have a great day!";
  }

  if (text.includes("thank")) {
    return "You're welcome 😊";
  }

  const randomReplies = [
    "That sounds interesting!",
    "Can you tell me more?",
    "I'm here to help ",
    "Got it ",
    "Let me think about that..."
  ];

  return randomReplies[Math.floor(Math.random() * randomReplies.length)];
}



input.addEventListener("keypress", function(e){

  if(e.key === "Enter"){
    sendMessage();
  }

});

function scrollToBottom(){

  chatMessages.scrollTop = chatMessages.scrollHeight;

}