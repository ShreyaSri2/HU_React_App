import './App.css';
import MainDiv from './components/MainDiv';
import {BrowserRouter as Router} from 'react-router-dom';
import AppState from './context/AppState';
import { useState, useContext } from 'react';
import Modal from './components/Overlay/Modal';
import AppContext from './context/AppContext';



function App(props) {
  const [modalOpen, setModelOpen] = useState(false);
  //const {openOverlay, setOpenOverlay} = useContext(AppContext);

  const [openOverlay, setOpenOverlay] = useState(false);
  //const val = useContext(AppContext);
//setModelOpen={setModelOpen}


  return (
  <AppContext.Provider value={{openOverlay, setOpenOverlay}}>
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
              
            </div>
          </div> 
        </div>
      </div>
    </Router>
  </AppContext.Provider>
  );
}
//<button onClick={() => { setModelOpen(true); }}>Open</button>

export default App;
