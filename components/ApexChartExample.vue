<template>
    <div>
      <h2>ApexCharts Example</h2>
      <apexchart 
        type="line" 
        :options="chartOptions" 
        :series="chartSeries" 
      />
    </div>
  </template>
  
  <script setup>
  const chartOptions = {
    chart: {
      id: 'apexchart-example',
      toolbar: {
        show: true,
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    },
    yaxis: {
      title: {
        text: 'Values',
      },
    },
  };
  
  const chartSeries = [
    {
      name: 'Series 1',
      data: [10, 41, 35, 51, 49, 62],
    },
  ];
  </script>
  
  <style scoped>
  /* Add optional styling for the component here */
  </style>
  