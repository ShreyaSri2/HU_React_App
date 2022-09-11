import React, { useState } from "react";
import './Tab4.css';

const MainListItem = (props) => {
    const [type, setType] = useState('Storage');
    const [iops, setIOPS] = useState('');
    const [cap, setCap] = useState();
    const [rmk, setRmk] = useState('');

    const handleType = (event) => {
        setType(event.target.value);
    }

    const handleVal = (event) => {
        setRmk(event.target.value);
    }

    const addCapacity = (event) => {
        var capacity = event.target.value;
        setCap(capacity);
        if(type === 'SSD'){
            if(capacity >= 20 && capacity <= 512){
                if(capacity < 100)
                    setIOPS('100');
                else if(capacity >= 100 && capacity <= 500)
                    setIOPS('600');
                else
                    setIOPS('1000')
            }else{
                alert("Capacity should range between 20GB and 512GB");
            }
        }else if("Magnetic Disks"){
            if(capacity >= 40 && capacity <= 2000){
                if(capacity < 100)
                    setIOPS('100');
                else if(capacity >= 100 && capacity <= 500)
                    setIOPS('600');
                else
                    setIOPS('1000')
            }else{
                alert("Capacity should range between 40GB and 2000GB");
            }
        }
    }

    return(
        <div style={{display:"flex",flexDirection:"row"}} key={props.id}>
            <div className="mainDiv">
                <div style={{margin:"2px 15px 2px 15px"}}>
                    <p className="sub-part-liDiv">Type</p>
                    <select className="selectCls" onChange={handleType}>
                        <option value="Storage">Storage</option>
                        <option value="SSD">SSD</option>
                        <option value="Magnetic Disks">Magnetic Disks</option>
                    </select>
                </div>
                <div style={{margin:"2px 15px 2px 15px"}}>
                    <p className="sub-part-liDiv">Volume</p>
                    <p className="sub-p">{props.vol}</p>
                </div>
                <div style={{margin:"2px 15px 2px 15px"}}>
                    <p style={{width:"85px"}} className="sub-part-liDiv">Capacity (GB)</p>
                    <input className="newSec-ipTxt" type="number" style={{pointerEvents:"auto",color:"#000"}} onChange={addCapacity} />
                </div>
                <div style={{margin:"2px 15px 2px 15px"}}>
                    <p className="sub-part-liDiv">Encryption</p>
                    <input style={{marginLeft:"20px",pointerEvents:"none"}} className="colorInput" type="color" value="#007EFF" readOnly></input>
                </div>
                <div style={{margin:"2px 15px 2px 15px"}}>
                    <p className="sub-part-liDiv">IOPS</p>
                    <p className="sub-p">{iops}</p>
                </div>
                <div style={{margin:"2px 15px 2px 15px"}}>
                    <p style={{width:"100px"}} className="sub-part-liDiv">Backup Required</p>
                    <input style={{marginLeft:"35px",pointerEvents:"none"}} className="colorInput" type="color" value="#007EFF" readOnly></input>
                </div>
                <div style={{margin:"2px 15px 2px 15px"}}>
                    <p className="sub-part-liDiv">Remarks</p>
                    <input style={{pointerEvents:"auto",color:"#000"}} className="newSec-ipTxt" type="text" placeholder="Some Remarks" onChange={handleVal}/>
                </div>
            </div>
        </div>
    );

}

export default MainListItem;