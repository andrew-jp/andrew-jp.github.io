import React, {useState} from "react"
import { Radar } from "react-chartjs-2"
import { SkillData } from './Data';
import {Chart as ChartJS} from 'chart.js/auto'


const RadarChart = (props) => {
    /** State data for graphs */
    const [skillData, setSkillData] = useState({
      labels: SkillData.map((data) => data.label),
      datasets: [{
        label: 'Skills',
        data: SkillData.map((data) => data.value),
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "red",
          "pink",
          "orange",
          "purple",
          "tan",
          "grey",
          "skyblue"
        ],
        borderColor: "white",
        borderWidth: "10px",
      }]
    })
  return (
    <div>
      <Radar data={skillData}/>
    </div>
  );
}

export default RadarChart;