import React, {useState} from "react";
import './Tab4.css';
import Vector from '../../icons/Vector.svg';
import { useNavigate, useOutletContext } from "react-router-dom";
import './ButtonCls.css';


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
       
    }

    const back_tab4b = () => {
        navigate("/tab3");
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
            <p data-testid="selectSec-id1" className="subTab-header">Select Security Group</p>
           

            <div className="drpDwn-bx">
                <div className="drpDwn-box-div">
                    <p className="drpDwn-box-text">{securityGrp}</p>
                    <img src={Vector} className="arrowDrpDn" alt="icon" onClick={toggleDD}/>
                </div>
                { showDD ? <DrpDwn /> : null }
            </div>

            

            <div className="main-btnDiv">
                <button data-testid="selectSec-id3" className="main-btnCls" style={{background:"#000"}} onClick={back_tab4b}>Back</button>
                <button data-testid="selectSec-id2" className="main-btnCls" style={{background:"#007EFF"}} onClick={proceed_tab4b}>Proceed</button>
            </div>

        </div>
        
    )
}


export default SelectSecurity;