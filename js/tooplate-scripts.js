const width_threshold = 480;

// // Erstellen Sie separate Arrays für jede Variable
// var timestamps = [];
// var ampers = [];
// var currents = [];
// var voltages = [];

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'output.csv', true);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     var text = xhr.responseText;
//     var lines = text.split('\n');
//     var headers = lines[0].split(',');

//     // Leeren Sie die Arrays
//     timestamps = [];
//     ampers = [];
//     currents = [];
//     voltages = [];

//     for (var i = 1; i < lines.length; i++) {
//       var currentline = lines[i].split(',');

//       // Fügen Sie die Werte in die entsprechenden Arrays ein
//       for (var j = 0; j < headers.length; j++) {
//         switch (headers[j].trim()) {
//           case 'timestamp':
//             timestamps.push(currentline[j]);
//             break;
//           case 'amper':
//             ampers.push(currentline[j]);
//             break;
//           case 'current':
//             currents.push(currentline[j]);
//             break;
//           case 'voltage':
//             voltages.push(currentline[j]);
//             break;
//         }
//       }
//     }

//     // Ausgabe der Arrays
//     console.log('Timestamps:', timestamps);
//     console.log('Ampers:', ampers);
//     console.log('Currents:', currents);
//     console.log('Voltages:', voltages);
//   }
// };
// xhr.send(null);
function drawLineChart(timestamps, voltages, currents, velocities, torques, temperatures, elec_powers, mec_powers, efficiencies) {
  if ($("#lineChart").length) {
    ctxLine = document.getElementById("lineChart").getContext("2d");
    optionsLine = {
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Hits"
            }
          }
        ]
      }
    };

    // Set aspect ratio based on window width
    optionsLine.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

    configLine = {
      type: "line",
      data: {
        labels: timestamps, // Verwenden Sie die timestamps als Labels
        datasets: [
          {
            label: "Voltages",
            data: voltages, // Verwenden Sie die voltages-Daten
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            lineTension: 0.1
          },
          {
            label: "Currents",
            data: currents,
            fill: false,
            borderColor: "rgba(255,99,132,1)",
            lineTension: 0.1
          },
          {
            label: "Velocities",
            data: velocities,
            fill: false,
            borderColor: "rgba(153, 102, 255, 1)",
            lineTension: 0.1
          },
          {
            label: "Torques",
            data: torques,
            fill: false,
            borderColor: "rgba(255, 159, 64, 1)",
            lineTension: 0.1
          },
          {
            label: "Temperatures",
            data: temperatures,
            fill: false,
            borderColor: "rgba(255, 205, 86, 1)",
            lineTension: 0.1
          },
          {
            label: "Elec Powers",
            data: elec_powers,
            fill: false,
            borderColor: "rgba(75, 192, 192, 1)",
            lineTension: 0.1
          },
          {
            label: "Mec Powers",
            data: mec_powers,
            fill: false,
            borderColor: "rgba(54, 162, 235, 1)",
            lineTension: 0.1
          },
          {
            label: "Efficiencies",
            data: efficiencies,
            fill: false,
            borderColor: "rgba(153, 102, 255, 1)",
            lineTension: 0.1
          }
        ]
      },
      options: optionsLine
    };

    lineChart = new Chart(ctxLine, configLine);
  }
}

function drawBarChart(timestamps, voltages, currents, velocities, torques, temperatures, elec_powers, mec_powers, efficiencies) {
  if ($("#barChart").length) {
    ctxBar = document.getElementById("barChart").getContext("2d");

    optionsBar = {
      responsive: true,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: "Values"
            }
          }
        ]
      }
    };

    optionsBar.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

    configBar = {
      type: "bar",
      data: {
        labels: timestamps,
        datasets: [
          {
            label: "Voltages",
            data: voltages,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1
          },
          {
            label: "Currents",
            data: currents,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1
          },
          {
            label: "Velocities",
            data: velocities,
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1
          },
          {
            label: "Torques",
            data: torques,
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            borderColor: "rgba(255, 159, 64, 1)",
            borderWidth: 1
          },
          {
            label: "Temperatures",
            data: temperatures,
            backgroundColor: "rgba(255, 205, 86, 0.2)",
            borderColor: "rgba(255, 205, 86, 1)",
            borderWidth: 1
          },
          {
            label: "Elec Powers",
            data: elec_powers,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1
          },
          {
            label: "Mec Powers",
            data: mec_powers,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1
          },
          {
            label: "Efficiencies",
            data: efficiencies,
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1
          }
        ]
      },
      options: optionsBar
    };

    barChart = new Chart(ctxBar, configBar);
  }
}

function drawPieChart() {
  if ($("#pieChart").length) {
    ctxPie = document.getElementById("pieChart").getContext("2d");
    optionsPie = {
      responsive: true,
      maintainAspectRatio: false
    };

    configPie = {
      type: "pie",
      data: {
        datasets: [
          {
            data: [4600, 5400],
            backgroundColor: [
              window.chartColors.purple,
              window.chartColors.green
            ],
            label: "Storage"
          }
        ],
        labels: ["Used: 4,600 MRAM", "Available: 5,400 MRAM"]
      },
      options: optionsPie
    };

    pieChart = new Chart(ctxPie, configPie);
  }
}

function updateChartOptions() {
  if ($(window).width() < width_threshold) {
    if (optionsLine) {
      optionsLine.maintainAspectRatio = false;
    }
    if (optionsBar) {
      optionsBar.maintainAspectRatio = false;
    }
  } else {
    if (optionsLine) {
      optionsLine.maintainAspectRatio = true;
    }
    if (optionsBar) {
      optionsBar.maintainAspectRatio = true;
    }
  }
}

function updateLineChart() {
  if (lineChart) {
    lineChart.options = optionsLine;
    lineChart.update();
  }
}

function updateBarChart() {
  if (barChart) {
    barChart.options = optionsBar;
    barChart.update();
  }
}

function reloadPage() {
  setTimeout(function() {
    window.location.reload();
  }); // Reload the page so that charts will display correctly
}

function drawCalendar() {
  if ($("#calendar").length) {
    $("#calendar").fullCalendar({
      height: 400,
      events: [
        {
          title: "Meeting",
          start: "2018-09-1",
          end: "2018-09-2"
        },
        {
          title: "Marketing trip",
          start: "2018-09-6",
          end: "2018-09-8"
        },
        {
          title: "Follow up",
          start: "2018-10-12"
        },
        {
          title: "Team",
          start: "2018-10-17"
        },
        {
          title: "Company Trip",
          start: "2018-10-25",
		  end: "2018-10-27"
        },
        {
          title: "Review",
          start: "2018-11-12"
        },
        {
          title: "Plan",
          start: "2018-11-18"
        }
      ],
      eventColor: "rgba(54, 162, 235, 0.4)"
    });
  }
}
