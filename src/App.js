import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'



import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import DonutChart from './components/DonutChart'


function App() {
  return (
    <Router>
      <Navbar/>
      <div className='container'>
        <Sidebar/>
        <div className='content'>
          <DonutChart/>
        </div>
      </div>
      
    </Router>
  );
}

export default App;
