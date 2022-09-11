import './App.css';
import MainDiv from './components/MainDiv';
import {BrowserRouter as Router} from 'react-router-dom';
import { useState, useContext } from 'react';
import Modal from './components/Overlay/Modal';
import AppContext from './context/AppContext';



function App(props) {
  const [openOverlay, setOpenOverlay] = useState(false);
  const [costList, setCostList] = useState({});
  const [totPrice, setTotPrice] = useState(0);


  return (
  <AppContext.Provider value={{openOverlay, setOpenOverlay, costList, setCostList,totPrice, setTotPrice}}>
    <Router>
      {openOverlay && <Modal />}
      <div className='main'>
        <header><p className='heading'>HVC</p></header>
        <div className='container'>
          <div className='bl'>
            <MainDiv></MainDiv>
          </div>
          <div className='br'>
            <div className='cost-box'>
              <h3 className='cost-box-heading'>Cost Estimates</h3>
              <div>
                {Object.keys(costList).map((key, index) => {
                  return (
                    <li key={key} className='cost-list'>
                      <p className='cost-item'>{costList[key][0]}</p>
                      <p className='cost-price'>$ {costList[key][1]}</p>
                    </li>
                  );
                })}
              </div>
              <div className='line'></div>
                <li className='totalCost'>$ {totPrice}</li>
            </div>
          </div> 
        </div>
      </div>
    </Router>
  </AppContext.Provider>
  );
}

export default App;
