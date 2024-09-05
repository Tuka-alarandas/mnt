const successRateCtx = document.getElementById('successRateChart').getContext('2d');
const genderDistributionCtx = document.getElementById('genderDistributionChart').getContext('2d');

const successRateChart = new Chart(successRateCtx, {
  type: 'bar',
  data: {
    labels: ['2020', '2021', '2022', '2023', '2024'],
    datasets: [{
      label: 'نسبة النجاح',
      data: [85, 88, 90, 92, 94],
      backgroundColor: 'rgb(82, 33, 96)',
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const genderDistributionChart = new Chart(genderDistributionCtx, {
  type: 'pie',
  data: {
    labels: ['ذكور', 'إناث'],
    datasets: [{
      label: 'نسبة الذكور والإناث',
      data: [65, 35],
      backgroundColor: ['#f2e000', 'rgb(82, 33, 96)'],
    }]
  },
  options: {
    responsive: true,
  }
});
