import React from "react";
//import DropDown from "./DropDown";
import './Tab4.css';

//const data = ["HTTPS","SSH","SMTP"];

const CreateSecurity = () => {
    return (
        <div className="newSec-Cls">
            <p className="subTab-header">New Security Group</p>
            <input className="inputSecNme" type="text" placeholder="New Security Group Name"></input>
            <p className="subTab-header">Add Rule</p>
            <div className="newSec-liDiv">
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p className="sub-part-liDiv">Type</p>
                    <select className="selectCls">
                        <option>Type</option>
                        <option>HTTPS</option>
                        <option>SSH</option>
                        <option>SMTP</option>
                    </select>
                </div>
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p className="sub-part-liDiv">Protocol</p>
                    <input className="newSec-ipTxt" type="text" value="TCP" disabled="" readOnly />
                </div>
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p className="sub-part-liDiv">Port Range</p>
                    <input className="newSec-ipTxt" type="text" value="443" disabled="" readOnly />
                </div>
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p className="sub-part-liDiv">Source</p>
                    <input className="newSec-ipTxt" type="text" value="192.168.1.1" disabled="" readOnly />
                </div>
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p className="sub-part-liDiv">Description</p>
                    <input className="newSec-ipTxt" type="text" value="Some remarks" readOnly/>
                </div>
            </div>

            <button className="btn-rule">Add Rule</button>
        </div>
    )
}


export default CreateSecurity;