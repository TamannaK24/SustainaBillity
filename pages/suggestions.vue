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
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("reduce energy usage")) {
    return "You can reduce energy usage by turning off lights when not in use, installing LED bulbs, and optimizing your HVAC system.";
  } else if (lowerMessage.includes("recycle")) {
    return "Recycling is essential. Focus on separating paper, plastics, metals, and glass. Avoid contaminating recyclables with food waste.";
  } else if (lowerMessage.includes("save water")) {
    return "To save water, install low-flow fixtures, fix leaks, and use rainwater for irrigation or greywater recycling.";
  } else if (lowerMessage.includes("carbon footprint")) {
    return "You can reduce your carbon footprint by carpooling, using public transport, and switching to renewable energy sources like solar or wind.";
  } else if (lowerMessage.includes("solar panels")) {
    return "Solar panels are a great way to reduce energy costs and reliance on non-renewable energy. They can significantly lower your carbon footprint.";
  } else if (lowerMessage.includes("composting")) {
    return "Composting reduces food waste and creates nutrient-rich soil. Start by separating food scraps like fruit peels and vegetable waste from other trash.";
  } else if (lowerMessage.includes("waste management")) {
    return "Effective waste management involves reducing, reusing, and recycling materials. Conduct waste audits to identify areas for improvement.";
  } else if (lowerMessage.includes("electric vehicles")) {
    return "Electric vehicles reduce greenhouse gas emissions compared to traditional vehicles. Consider installing EV chargers for added convenience.";
  } else if (lowerMessage.includes("energy-efficient appliances")) {
    return "Energy-efficient appliances can significantly reduce electricity consumption. Look for appliances with ENERGY STAR ratings.";
  } else if (lowerMessage.includes("insulation")) {
    return "Proper insulation reduces the need for heating and cooling, saving energy. Ensure walls, roofs, and windows are well-insulated.";
  } else if (lowerMessage.includes("smart technology")) {
    return "Smart technologies like thermostats and motion-sensor lights help optimize energy usage and reduce waste.";
  } else if (lowerMessage.includes("renewable energy")) {
    return "Renewable energy options like wind, solar, and geothermal are great for reducing dependency on fossil fuels.";
  } else if (lowerMessage.includes("plant trees")) {
    return "Planting trees absorbs CO2, improves air quality, and provides shade that can reduce cooling costs.";
  } else if (lowerMessage.includes("sustainability goals")) {
    return "Start by setting realistic and measurable sustainability goals, like reducing energy consumption by 20% over the next year.";
  } else if (lowerMessage.includes("green buildings")) {
    return "Green buildings use eco-friendly materials and practices to reduce environmental impact. LEED certification is a great benchmark to aim for.";
  } else {
    return "That's a great question! Consider checking out online sustainability guides or asking something specific like 'How can I reduce my carbon footprint?' or 'What are the benefits of solar energy?'.";
  }
}

  },
};
</script>

<style>
.sidebar {
  width: 200px;
  background-color: #003F2D;
  color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-right: 20px; /* Spacing between sidebar and content area */
}

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
