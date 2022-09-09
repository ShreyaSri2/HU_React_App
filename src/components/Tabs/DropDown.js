import React, {useState} from "react";
import Vector from '../../icons/Vector.svg';
import '../MainDiv.css';

const DropDown = (props) => {
    const [showDropDownList, setShowDropDownList] = useState(false);

    const DropDownList = () => (
        <div className="drop-down"  style={{height:"180px"}}>
            {
                props.arrData.map((elem) => {
                    return(
                        <span className="spn" style={{height:"36px"}}>{elem}</span>
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