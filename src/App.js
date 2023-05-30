
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

function App() {

  return (
    <div className='App'>
      < Header id='header' />
      < About id='abt' />   
      < Footer id='footer'/>
    </div>
  );
}

export default App;
