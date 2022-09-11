import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import './Tab4.css';

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
            setSuccess(true);
            alert("Name of the Security Group already exists...Try Again!");   
        }else{
            //get all the value required for last screen - port, type, remark, name (* get type from port value) 
            setSuccess(false);
            alert("New Rule Added Successfully.");
        }
    }

    const proceed_tab4a = () => {
        let arr = [];
        if(success){
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
            <p className="subTab-header">New Security Group</p>
            <input className="inputSecNme" type="text" placeholder="New Security Group Name" onChange={addName}></input>
            <p className="subTab-header">Add Rule</p>
            <div className="newSec-liDiv">
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p className="sub-part-liDiv">Type</p>
                    <select className="selectCls" onChange={handleSelectChange}>
                        <option value="Type">Type</option>
                        <option value="HTTPS">HTTPS</option>
                        <option value="SSH">SSH</option>
                        <option value="SMTP">SMTP</option>
                    </select>
                </div>
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p className="sub-part-liDiv">Protocol</p>
                    <input className="newSec-ipTxt" type="text" value="TCP" disabled="" readOnly />
                </div>
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p className="sub-part-liDiv">Port Range</p>
                    <input className="newSec-ipTxt" type="text" value={portRange} disabled="" readOnly />
                </div>
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p className="sub-part-liDiv">Source</p>
                    <input className="newSec-ipTxt" type="text" value="192.168.1.1" disabled="" readOnly />
                </div>
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p className="sub-part-liDiv">Description</p>
                    <input style={{pointerEvents:"auto", color:"#000"}} className="newSec-ipTxt" type="text" placeholder="Some Remarks" onChange={addRemarks}></input>
                </div>
            </div>

            <button className="btn-rule" onClick={addRule}>Add Rule</button>

            <button onClick={proceed_tab4a}>Proceed</button>
        </div>
    )
}


export default CreateSecurity;

//<input className="newSec-ipTxt" type="text" placeholder="Some Remarks" onChange={addRemarks} maxLength="100"/>