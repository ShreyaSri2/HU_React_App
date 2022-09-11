import React , {useContext} from "react";
import "./Modal.css";


function Modal() {

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button style={{fontSize:"20px"}}  > X </button>
        </div>
        <div className="title">
          <p style={{color:"red"}}>Cancelled</p>
        </div>
        <div className="body">
          <p>All your current selected configuration is now set to null</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;