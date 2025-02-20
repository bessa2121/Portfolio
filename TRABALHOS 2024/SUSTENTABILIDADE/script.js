document.getElementById("calcular").addEventListener("click", function() {
    const energia = document.getElementById("energia").value;
    const agua = document.getElementById("agua").value;
    const alimentos = document.getElementById("alimentos").value;
  
    if (energia && agua && alimentos) {
      const impactoEnergia = energia * 0.5; // Aproximadamente 0.5 kg CO2 por kWh
      const impactoAgua = agua * 0.03; // Aproximadamente 0.03 kg CO2 por litro de água
      const impactoAlimentos = alimentos * 0.2; // Aproximadamente 0.2 kg CO2 por kg de alimento
  
      const impactoTotal = impactoEnergia + impactoAgua + impactoAlimentos;
  
      const ctx = document.getElementById('impactoChart').getContext('2d');
      const impactoChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Energia', 'Água', 'Alimentos', 'Total'],
          datasets: [{
            label: 'Impacto Ambiental (kg CO2)',
            data: [impactoEnergia, impactoAgua, impactoAlimentos, impactoTotal],
            backgroundColor: ['green', 'blue', 'yellow', 'red'],
            borderColor: ['#fff', '#fff', '#fff', '#fff'],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function(tooltipItem) {
                  return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2) + ' kg CO2';
                }
              }
            }
          }
        }
      });
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });const impactoChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Energia', 'Água', 'Alimentos', 'Total'],
      datasets: [{
        label: 'Impacto Ambiental (kg CO2)',
        data: [impactoEnergia, impactoAgua, impactoAlimentos, impactoTotal],
        backgroundColor: ['#4a7c59', '#365c42', '#7a9a7a', '#ff6f61'],
        borderColor: ['#fff', '#fff', '#fff', '#fff'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,  // Permite o ajuste da altura junto com a largura
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2) + ' kg CO2';
            }
          }
        }
      }
    }
  });