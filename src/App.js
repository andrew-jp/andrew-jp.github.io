
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import Samples from './components/Samples';

function App() {

  return (
    <div className='App'>
      < Header id='header' />
      < About id='abt' />   
      < Samples id='samples' />
      < Footer id='footer'/>
    </div>
  );
}

export default App;
