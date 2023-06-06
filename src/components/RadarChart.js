import React, {useState, useRef, useEffect} from "react"
import { Radar } from "react-chartjs-2"
import { SkillData } from './Data';
import {Chart as ChartJS} from 'chart.js/auto'
import '../styles/RadarChart.css'

const RadarChart = (props) => {
  /* Handles the scroll animation for the graph */
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const { top } = targetRef.current.getBoundingClientRect();
      const isVisible = top <= window.innerHeight * 0.75; // Adjust the threshold as needed

      if (isVisible) {
        setIsVisible(true);
        window.removeEventListener('chartScroll', handleScroll); // Remove the scroll event listener
      }
    };

    window.addEventListener('chartScroll', handleScroll);
    return () => window.removeEventListener('chartScroll', handleScroll);
  }, []);

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
      ref={targetRef}
    >
      <Radar
      className={`radarGraph ${isVisible ? 'scale-in' : ''}`}
      data={skillData}
        options={{
          scales:{
            r: {
              animate: true,
              beginAtZero: true,
              max: 10,
              color: "white",
              pointLabels: {
                borderRadius: 2,
                backdropColor: "rgba(50,50,50,.1)",
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