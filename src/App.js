
import './styles/App.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Samples from './components/Samples';
import RadarChart from './components/RadarChart';


function App() {

  return (
    <div className='App'>
      < Header
          myName='Andrew Pritchett' 
          myTitle='Software Engineer'
      />
      < About />
      < RadarChart />
      < Samples />
      < Footer />
    </div>
  );
}

export default App;
