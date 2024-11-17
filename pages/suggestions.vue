<template>
  <div class="dashboard-container">
    <!-- Main Content with Sidebar Inside -->
    <div class="main-content">
      <div class="content-wrapper">
        <!-- Sidebar -->
        <div class="sidebar">
          <h3>Menu</h3>
          <ul>
            <li><nuxt-link to="/notifications">Notifications</nuxt-link></li>
            <li><nuxt-link to="/time">Time</nuxt-link></li>
            <li><nuxt-link to="/cost">Cost</nuxt-link></li>
            <li><nuxt-link to="/suggestions">Suggestions</nuxt-link></li>
          </ul>
        </div>

        <!-- Main Chatbot Content -->
        <div class="content-area">
          <div class="container mt-5">
            <h1>Sustainability Chatbot</h1>
            <p>
              Ask me how to reduce the building's energy consumption! Type your questions below to receive suggestions.
            </p>
            <div class="chatbot mt-4">
              <div class="chatbox">
                <div class="messages">
                  <div
                    v-for="(message, index) in chatHistory"
                    :key="index"
                    :class="message.sender"
                  >
                    <p>{{ message.text }}</p>
                  </div>
                </div>
                <div class="input-area">
                  <input
                    type="text"
                    v-model="userMessage"
                    placeholder="Type your question..."
                    @keyup.enter="sendMessage"
                  />
                  <button @click="sendMessage">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "SustainabilityChatbot",
  data() {
    return {
      userMessage: "",
      chatHistory: [
        { sender: "bot", text: "Hi there! How can I help you be more sustainable today?" },
      ],
    };
  },
  methods: {
    sendMessage() {
      if (this.userMessage.trim() === "") return;

      // Add user message to chat history
      this.chatHistory.push({ sender: "user", text: this.userMessage });

      // Generate a response from the bot
      const response = this.getBotResponse(this.userMessage);

      // Add bot response to chat history
      this.chatHistory.push({ sender: "bot", text: response });

      // Clear input field
      this.userMessage = "";
    },
    getBotResponse(message) {
      // Example responses
      if (message.toLowerCase().includes("reduce energy usage")) {
        return "You can reduce energy usage by turning off lights when not in use and using energy-efficient appliances.";
      } else if (message.toLowerCase().includes("recycle")) {
        return "Recycling helps reduce waste. Make sure to separate your recyclables like paper, plastics, and glass.";
      } else if (message.toLowerCase().includes("save water")) {
        return "To save water, fix any leaks, turn off taps when not in use, and consider using water-efficient appliances.";
      } else {
        return "That's a great question! Consider checking out online sustainability guides or asking something specific like 'How can I reduce my carbon footprint?'.";
      }
    },
  },
};
</script>

<style>
/* General Styling */
.container {
  font-family: Arial, sans-serif;
  color: #333;
}

/* Chatbot Styling */
.chatbot {
  margin-top: 20px;
}

.chatbox {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 400px;
  max-width: 600px;
  margin: 0 auto;
}

.messages {
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px;
}

.messages .user {
  text-align: right;
}

.messages .user p {
  display: inline-block;
  background-color: #d1f7d6;
  color: #333;
  padding: 10px;
  border-radius: 10px;
  margin: 5px 0;
}

.messages .bot p {
  display: inline-block;
  background-color: #e9e9e9;
  color: #333;
  padding: 10px;
  border-radius: 10px;
  margin: 5px 0;
}

.input-area {
  display: flex;
  align-items: center;
}

.input-area input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
}

.input-area button {
  padding: 10px 20px;
  background-color: #03ff3e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.input-area button:hover {
  background-color: #02d62f;
}
</style>
