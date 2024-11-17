<template>
    <div>
      <label :for="labelFor">{{ label }}</label>
      <flat-pickr
        :id="labelFor"
        v-model="selectedDate"
        :config="config"
        class="form-control"
      />
    </div>
  </template>
  
  <script>
  import FlatPickr from "vue-flatpickr-component";
  
  export default {
    name: "FlatpickrInput",
    components: {
      FlatPickr,
    },
    props: {
      label: {
        type: String,
        default: "Select Date",
      },
      labelFor: {
        type: String,
        default: "flatpickr-input",
      },
      value: {
        type: [String, Array],
        default: null,
      },
      config: {
        type: Object,
        default: () => ({
          dateFormat: "Y-m-d",
          mode: "single", // Can be "single", "multiple", or "range"
        }),
      },
    },
    data() {
      return {
        selectedDate: this.value,
      };
    },
    watch: {
      selectedDate(newValue) {
        this.$emit("input", newValue);
      },
    },
  };
  </script>
  
  <style scoped>
  label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }
  
  .form-control {
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid #ddd;
  }
  </style>
  