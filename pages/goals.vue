<template>
  <div class="container mt-5">
    <h1>Goals Dashboard</h1>
    <p>Track your sustainability goals and progress. Add new goals or get suggestions!</p>

    <!-- Progress Tracker -->
    <div class="progress-tracker mt-4">
      <h3>Yearly Goals Progress</h3>
      <div v-for="goal in yearlyGoals" :key="goal.id" class="goal-item">
        <div>
          <strong>{{ goal.name }}</strong>
          <p>{{ goal.description }}</p>
        </div>
        <div>
          <label>Progress: {{ goal.progress }}%</label>
          <progress :value="goal.progress" max="100"></progress>
        </div>
      </div>
    </div>

    <!-- Add Goals Form -->
    <div class="add-goal-form mt-4">
      <h3>Add a New Goal</h3>
      <form @submit.prevent="addGoal">
        <label for="goalType">Goal Type:</label>
        <select v-model="newGoal.type" id="goalType" required>
          <option value="yearly">Yearly</option>
          <option value="monthly">Monthly</option>
        </select>

        <label for="goalName">Goal Name:</label>
        <input
          v-model="newGoal.name"
          id="goalName"
          type="text"
          placeholder="Enter goal name"
          required
        />

        <label for="goalDescription">Description:</label>
        <textarea
          v-model="newGoal.description"
          id="goalDescription"
          placeholder="Describe your goal"
          required
        ></textarea>

        <button type="submit">Add Goal</button>
      </form>
    </div>

    <!-- Goal Suggestions -->
    <div class="goal-suggestions mt-4">
      <h3>Goal Suggestions</h3>
      <ul>
        <li v-for="suggestion in goalSuggestions" :key="suggestion">
          {{ suggestion }}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "GoalsDashboard",
  data() {
    return {
      yearlyGoals: [
        {
          id: 1,
          name: "Reduce Energy Usage",
          description: "Cut down building energy consumption by 10% this year.",
          progress: 50,
        },
        {
          id: 2,
          name: "Increase Recycling",
          description: "Achieve 80% recycling rate across all departments.",
          progress: 70,
        },
      ],
      newGoal: {
        type: "yearly",
        name: "",
        description: "",
      },
      goalSuggestions: [
        "Switch to energy-efficient lighting.",
        "Reduce water usage by 15%.",
        "Introduce a company carpool program.",
        "Plant 50 trees in your community.",
        "Encourage remote work to reduce carbon footprint.",
      ],
    };
  },
  methods: {
    addGoal() {
      const newGoal = {
        id: this.yearlyGoals.length + 1,
        name: this.newGoal.name,
        description: this.newGoal.description,
        progress: 0,
      };

      if (this.newGoal.type === "yearly") {
        this.yearlyGoals.push(newGoal);
      } else {
        // Extend this logic for monthly goals if implemented
        alert("Monthly goal added! (Not currently displayed)");
      }

      this.newGoal.name = "";
      this.newGoal.description = "";
      this.newGoal.type = "yearly";
    },
  },
};
</script>

<style>
.container {
  font-family: Arial, sans-serif;
  color: #333;
}

/* Progress Tracker */
.progress-tracker {
  margin-top: 20px;
}

.goal-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.goal-item label {
  display: block;
  margin-bottom: 5px;
}

progress {
  width: 150px;
  height: 15px;
}

/* Add Goal Form */
.add-goal-form {
  margin-top: 20px;
}

.add-goal-form label {
  display: block;
  margin-bottom: 5px;
}

.add-goal-form input,
.add-goal-form textarea,
.add-goal-form select,
.add-goal-form button {
  display: block;
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.add-goal-form button {
  background-color: #03ff3e;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

.add-goal-form button:hover {
  background-color: #02d62f;
}

/* Goal Suggestions */
.goal-suggestions {
  margin-top: 20px;
}

.goal-suggestions ul {
  list-style: disc;
  padding-left: 20px;
}
</style>
