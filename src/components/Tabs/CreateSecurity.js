import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import './Tab4.css';
import './ButtonCls.css';

const CreateSecurity = (props) => {
    const [portRange, setPortRange] = useState('000');
    const [securityGroup, setSecurityGroup] = useState('');
    const [success, setSuccess] = useState(false);
    const listD = useOutletContext();
    const [type, setType] = useState('Type')
    const [remarks, setRemarks] = useState('');
    const navigate = useNavigate();
    
    const handleSelectChange = (event) => {
        let selectVal = event.target.value;
        setType(selectVal);
        if(selectVal === 'HTTPS')
            setPortRange('443');
        else if(selectVal === 'SSH')
            setPortRange('22');
        else if(selectVal === 'SMTP')
            setPortRange('25');
        else
            setPortRange('000');
    }

    const addName = (event) => {
        setSecurityGroup(event.target.value);
    }

    const addRemarks = (event) => {
        setRemarks(event.target.value);
    }

    const addRule = () => {
        if(listD.includes(securityGroup)){
            alert("Name of the Security Group already exists...Try Again!");   
        }else{
            alert("New Rule Added Successfully.");
        }
    }

    const back_tab4a = () => {
        navigate("/tab3");
    }

    const proceed_tab4a = () => {
        let arr = [];
        if(type !== "Type"){
            arr.push(securityGroup)
            arr.push(type);
            arr.push('TCP');
            arr.push(portRange);
            arr.push('192.168.1.1');
            arr.push(remarks);
            localStorage.setItem("tab4",JSON.stringify(arr));
            navigate("/tab5");
        }else{
            alert("New Rule is not added... Try Again");
        }
    }

    return (
        <div className="newSec-Cls">
            <p data-testid="createSec-id1" className="subTab-header">New Security Group</p>
            <input className="inputSecNme" type="text" placeholder="New Security Group Name" onChange={addName}></input>
            <p data-testid="createSec-id2" className="subTab-header">Add Rule</p>
            <div className="newSec-liDiv">
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p data-testid="createSec-id3" className="sub-part-liDiv">Type</p>
                    <select className="selectCls" onChange={handleSelectChange}>
                        <option value="Type">Type</option>
                        <option value="HTTPS">HTTPS</option>
                        <option value="SSH">SSH</option>
                        <option value="SMTP">SMTP</option>
                    </select>
                </div>
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p data-testid="createSec-id4" className="sub-part-liDiv">Protocol</p>
                    <input className="newSec-ipTxt" type="text" value="TCP" disabled="" readOnly />
                </div>
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p data-testid="createSec-id5" className="sub-part-liDiv">Port Range</p>
                    <input className="newSec-ipTxt" type="text" value={portRange} disabled="" readOnly />
                </div>
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p data-testid="createSec-id6" className="sub-part-liDiv">Source</p>
                    <input className="newSec-ipTxt" type="text" value="192.168.1.1" disabled="" readOnly />
                </div>
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p data-testid="createSec-id7" className="sub-part-liDiv">Description</p>
                    <input style={{pointerEvents:"auto", color:"#000"}} className="newSec-ipTxt" type="text" placeholder="Some Remarks" onChange={addRemarks}></input>
                </div>
            </div>

            <button data-testid="createSec-id8" className="btn-rule" onClick={addRule}>Add Rule</button>

            <div className="main-btnDiv">
                <button data-testid="createSec-id10"className="main-btnCls" style={{background:"#000"}} onClick={back_tab4a}>Back</button>
                <button data-testid="createSec-id9" className="main-btnCls" style={{background:"#007EFF"}} onClick={proceed_tab4a}>Proceed</button>
            </div>
        </div>
    )
}


export default CreateSecurity;

