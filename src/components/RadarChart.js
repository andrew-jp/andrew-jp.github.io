import React, {useState} from "react"
import { Radar } from "react-chartjs-2"
import { SkillData } from './Data';
import {Chart as ChartJS} from 'chart.js/auto'
import '../styles/RadarChart.css'

const RadarChart = () => {
  /**
   * State data for graphs 
   * Basically just formatted for GraphJS
   * */
  const [skillData, setSkillData] = useState({
    labels: SkillData.map((data) => data.label),
    datasets: [{
      label: 'Skills',
      data: SkillData.map((data) => data.value),
      backgroundColor: [
        "rgba(75, 180, 200, .3)",
      ],
      borderColor: "rgba(75, 180, 200, .8)",
      borderWidth: 3,
    }]
  })

  return (
    <div 
      className="graphSection"
      id="skills"
    >
      <Radar
      className="radar-graph"
      data={skillData}
        options={{
          plugins: {
            legend: {
              labels: {
                font: {
                    size: 18
                }
              }
            }
          },
          scales:{
            r: {
              animate: true,
              beginAtZero: true,
              max: 10,
              color: "white",
              pointLabels: {
                borderRadius: 5,
                backdropColor: "rgba(50,50,50,.5)",
                color: [
                  "#1abc9c",
                  "#3498db",
                  "#27ae60",
                  "#8e44ad",
                  "#f1c40f",
                  "#e74c3c",
                  "#95a5a6",
                  "#d35400",
                ],
                font: {
                  size: 16
                }
              },
              ticks: {
                color: "white",
                backdropColor: "black",
                font: {
                  size: 14
                }
              },
              angleLines: {
                color: "white"
              },
              grid: {
                color: "white"
              }
          }}
        }}
      />
    </div>
  );
}

export default RadarChart;