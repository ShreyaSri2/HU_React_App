import './App.css';
import MainDiv from './components/MainDiv';
import {BrowserRouter as Router} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className='main'>
      
        <header><p className='heading'>HVC</p></header>

        <div className='container'>

          <div className='bl'>
            <MainDiv></MainDiv>
          </div>

          <div className='br'>
            <div className='cost-box'>
              <h3 className='cost-box-heading'>Cost Estimates</h3>
            </div>
          </div> 

        </div>

      </div>

      </Router>
  );
}

export default App;
