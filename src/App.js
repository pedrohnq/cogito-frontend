import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import DonutChart from './components/DonutChart'
import ChartButtons from './components/ChartButtons'

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='container'>
        <Sidebar/>
        
        <div className='content'>
          <Switch>
            <Route path='/' exact >
              <DonutChart/>
              <ChartButtons/>
            </Route>
          </Switch>
          
        </div>
      </div>
      
    </Router>
  );
}

export default App;
