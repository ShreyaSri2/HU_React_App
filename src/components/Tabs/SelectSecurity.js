import React, {useState} from "react";
import './Tab4.css';
import Vector from '../../icons/Vector.svg';
import { useNavigate, useOutletContext } from "react-router-dom";


const SelectSecurity = (props) => {
    const [showDD, setShowDD] = useState(false);
    const [securityGrp, setSecurityGrp] = useState('Select Security');
    const listD = useOutletContext();
    const navigate = useNavigate();

    const proceed_tab4b = () => {
        let arr = []
        if(securityGrp !== 'Select Security'){
            arr.push(securityGrp);
            arr.push('HTTPS')
            arr.push('TCP');
            arr.push('443');
            arr.push('192.168.1.1');
            arr.push('');
            localStorage.setItem("tab4",JSON.stringify(arr));
            navigate("/tab5");
        }
    }

    const handleSecurityGroup = (event) => {
        setSecurityGrp(event.target.innerText);
        toggleDD();
        //got value of security group name if not created use this to store value for last screen 
        //[key should same for create and select security]
        //[HTTPS, TCP, 443, 192.168.1.1]
    }

    const DrpDwn = () => (
        <div className="drp-dwn">
            {
                listD.map((elem, i) => {
                    return(
                        <span key={i+1} className="drp-spn" onClick={handleSecurityGroup}>{elem}</span>
                    )
                })
            }
        </div>
    )

    function toggleDD(){
        if(showDD){
            setShowDD(false);
        }else{
            setShowDD(true);
        }
    }


    return (
        <div className="subTab-box">
            <p className="subTab-header">Select Security Group</p>
            {/*<DropDown title_dd="Select Security" arrData={arr}/>*/}

            <div className="drpDwn-bx">
                <div className="drpDwn-box-div">
                    <p className="drpDwn-box-text">{securityGrp}</p>
                    <img src={Vector} className="arrowDrpDn" alt="icon" onClick={toggleDD}/>
                </div>
                { showDD ? <DrpDwn /> : null }
            </div>

            <button onClick={proceed_tab4b}>Proceed</button>

        </div>
        
    )
}


export default SelectSecurity;