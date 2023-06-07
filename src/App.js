
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
          myTitle='Software Developer'
      />
      < About id='abt' />
      < RadarChart />
      < Samples id='samples' />
      < Footer id='footer'/>
    </div>
  );
}

export default App;
