import React, {useState} from "react";
import Vector from '../../icons/Vector.svg';
import '../MainDiv.css';

const DropDown = (props) => {
    const [showDropDownList, setShowDropDownList] = useState(false);

    const handleVal = (event) => {
        let val = event.target.innerText;
        if(props.title_dd === "CPU Cores"){
            props.onCoreClick(val);
        }else{
            props.onMemoryClick(val);
        }
    }

    const DropDownList = () => (
        <div className="drop-down"  style={{height:"180px",width:"145px"}}>
            {
                props.arrData.map((elem,i) => {
                    return(
                        <span key={i} className="spn" style={{height:"36px"}} onClick={handleVal}>{elem}</span>
                    )
                })
            }
        </div>
    )

    function toggleDropDownList(){
        if(showDropDownList){
            setShowDropDownList(false);
        }else{
            setShowDropDownList(true);
        }
    }

    return (
        <div className="drpDwn">
            <div className="region-box-div">
                <p className="region-box-text">{props.title_dd}</p>
                <img src={Vector} className="arrowDn" alt="icon" onClick={toggleDropDownList}/>
            </div>

            { showDropDownList ? <DropDownList /> : null }
        </div>
    )
}


export default DropDown;