makeChart();


async function makeChart() {
  const data = await getData();

  console.log(data);

  const table = document.getElementById('myChart').getContext('2d');
  

  const myChart = new Chart(table, {
      type: 'line',
      data: {
          labels: data.dateLabel,
          datasets: [{
              label: 'Covid-19 cases BG',
              data: data.totalCaseLabel,
              backgroundColor:'pink',
              borderColor:'black',
              borderWidth: 0.5,
              hoverBorder: 1,
              hoverBackgroundColor: 'green',
              fill: false
          },
          {
              label: 'Covid-19 New cases BG',
              data: data.newCasesLabel,
              backgroundColor:'red',
              borderColor:'black',
              borderWidth: 0.5,
              hoverBorder: 1,
              hoverBackgroundColor: 'blue',
              fill: false
          },
          {
              label: 'Covid-19 deaths BG',
              data: data.totalDeathsLabel,
              backgroundColor:'grey',
              borderColor:'black',
              borderWidth: 0.5,
              hoverBorder: 1,
              hoverBackgroundColor: 'black',
              fill: false
          },
          {
              label: `Covid-19 New deaths BG`,
              data: data.newDeathsLabel,
              backgroundColor:'orange',
              borderColor:'black',
              borderWidth: 0.5,
              hoverBorder: 1,
              hoverBackgroundColor: 'brown',
              fill: false
          }]

      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          },
          responsive: false
      }
  });
}




async function getData() {
  const response = await fetch("test.csv");
  const data = await response.text();


  let countryLabel = [];
  const dateLabel = [];
  const totalCaseLabel = [];
  const newCasesLabel = [];
  const totalDeathsLabel = [];
  const newDeathsLabel = [];
  

  const table = data.split("\n").slice(1);

  table.forEach((row) => {
    const element = row.split(",");
    let country = element[2];
    const day = element[3];
    
    let totalCases = parseInt(element[4]);
    let newCases = parseInt(element[5]);
    let totalDeaths = parseInt(element[7]); 
    let newDeaths = parseInt(element[8]);

    countryLabel.push(country);
    dateLabel.push(day);
    totalCaseLabel.push(totalCases);
    newCasesLabel.push(newCases);
    totalDeathsLabel.push(totalDeaths);
    newDeathsLabel.push(newDeaths);

    

  });

  return {
      countryLabel:countryLabel,
      dateLabel:dateLabel,
      totalCaseLabel:totalCaseLabel, 
      newCasesLabel:newCasesLabel, 
      totalDeathsLabel:totalDeathsLabel,
      newDeathsLabel:newDeathsLabel
    };
};
