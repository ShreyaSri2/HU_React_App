import React, {useState} from "react";
import './Tab4.css';
import Vector from '../../icons/Vector.svg';

const arr = ["Security SG1", "Security SG2", "Security SG3", "Security SX 27", "Security SL 12", "Group 29", "Security RT 7", "SGX 8", "Security RT 8", "Group 32", "SGX 89", "TSMU 58"];

const SelectSecurity = () => {
    const [showDD, setShowDD] = useState(false);

    const DrpDwn = () => (
        <div className="drp-dwn">
            {
                arr.map((elem, i) => {
                    return(
                        <span key={i+1} className="drp-spn">{elem}</span>
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
                    <p className="drpDwn-box-text">Select Security</p>
                    <img src={Vector} className="arrowDrpDn" alt="icon" onClick={toggleDD}/>
                </div>
                { showDD ? <DrpDwn /> : null }
            </div>

        </div>
        
    )
}


export default SelectSecurity;