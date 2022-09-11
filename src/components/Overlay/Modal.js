import React , {useContext} from "react";
import "./Modal.css";
import AppContext from "../../context/AppContext";
//{ setModelOpen }
function Modal() {
    const { openOverlay , setOpenOverlay } = useContext(AppContext);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button style={{fontSize:"20px"}} onClick={() => { setOpenOverlay(false); }} > X </button>
        </div>
        <div className="title">
          <p>Success</p>
        </div>
        <div className="body">
          <p>VM(s) Created with provided configurations successfully!</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;