import { Chart, registerables } from 'chart.js';

export default defineNuxtPlugin(() => {
  if (process.client) {
    Chart.register(...registerables);
  }
});
