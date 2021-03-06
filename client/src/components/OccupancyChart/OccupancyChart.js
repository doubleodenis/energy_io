import React from 'react';
import { Bar } from 'react-chartjs-2';

const OccupancyChart = (props) => {

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: '2',
    tooltips: {
      mode: 'label'
    },
    elements: {
      line: {
        fill: false,
        tension: 0,
        stepped: false,
        borderDash: []
      }
    },
    scales: {
      xAxes: [
        {
          type: 'time',
          distribution: 'linear',
          time: {
            unit: 'minute',
            stepSize: 5,
            displayFormats: {
              minute: 'h:mm a'
            }
          }
        }
      ],
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          ticks: {
            min: 0,
            max: 1,
            stepSize: 1
          }
        }
      ]
    }
  };

  let dataset = [];
  if (props.data) {

    //mapping the dataset
    dataset = props.data.map(data => {
      return { y: data.occupancy, t: new Date(data.date) };
    });

  }

  const data = {
    datasets: [{
      type: 'line',
      label: 'Occupancy',
      data: dataset,
      backgroundColor: '#f0c64a',
      borderColor: '#f0c64a',
      hoverBackgroundColor: '#f0c64a',
      hoverBorderColor: '#f0c64a',
      yAxisID: 'y-axis-1'
    }]
  };

  return (
    <div style={{ height: 500, width: 900 }}>
      <Bar
        data={data}
        options={options} />

    </div>

  )
}

export default OccupancyChart;
