import React from "react";
import './Tab4.css';

const ListItem = (props) => {

    return(
        <div style={{display:"flex",flexDirection:"row"}}>
    <div className="mainDiv">
    <div style={{margin:"2px 15px 2px 15px"}}>
        <p className="sub-part-liDiv">Type</p>
        <select className="selectCls"><option>SSD</option><option>Magnetic Disks</option><option>Storage</option></select>
    </div>
    <div style={{margin:"2px 15px 2px 15px"}}>
        <p className="sub-part-liDiv">Volume</p>
        <p className="sub-p">{props.vol}</p>
    </div>
    <div style={{margin:"2px 15px 2px 15px"}}>
        <p style={{width:"85px"}} className="sub-part-liDiv">Capacity (GB)</p>
        <input className="newSec-ipTxt" type="text" value={props.cap} disabled="" readOnly />
    </div>
    <div style={{margin:"2px 15px 2px 15px"}}>
        <p className="sub-part-liDiv">Encryption</p>
        <input style={{marginLeft:"20px"}} className="colorInput" type="color" value="#007EFF"></input>
    </div>
    <div style={{margin:"2px 15px 2px 15px"}}>
        <p className="sub-part-liDiv">IOPS</p>
        <p className="sub-p">{props.iops}</p>
    </div>
    <div style={{margin:"2px 15px 2px 15px"}}>
        <p style={{width:"100px"}} className="sub-part-liDiv">Backup Required</p>
        <input style={{marginLeft:"35px"}} className="colorInput" type="color" value="#007EFF"></input>
    </div>
    <div style={{margin:"2px 15px 2px 15px"}}>
        <p className="sub-part-liDiv">Remarks</p>
        <input className="newSec-ipTxt" type="text" value="Some Remarks" readOnly />
    </div>
</div>

{props.flag ? <span className="cross">x</span> : null}

</div>
    );

}

export default ListItem;