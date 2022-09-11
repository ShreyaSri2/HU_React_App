import React, {useContext, useState} from "react";
import AppContext from "../../context/AppContext";
import './Tab1.css';
import './Tab5.css';
import './ButtonCls.css';
import Modal from "../Overlay/Modal";


const tt1 = JSON.parse(localStorage.getItem("tab1"));
const tt2 = JSON.parse(localStorage.getItem("tab2"));
const tt3 = JSON.parse(localStorage.getItem("tab3"));
const tt4 = JSON.parse(localStorage.getItem("tab4"));

const Tab5 = () => {
    const { openOverlay , setOpenOverlay } = useContext(AppContext);
    const [t1, setT1] = useState(tt1);
    const [t2, setT2] = useState(tt2);
    const [t3, setT3] = useState(tt3);
    const [t4, setT4] = useState(tt4);


    const Ttb1 = () => {
        return(
        <div style={{marginLeft:"22px"}} className="list-item" key={t1[0]}>
            <div className="li-left" />
            <div className="li-center">
                <p className="li-header">{t1[1]}</p>
                <p className="li-desc">{t1[2]}</p>
            </div>
            <div className="li-right">
                <div className="li-form">
                    <label className="form-input"><input className="form-radioBtn" type="radio" value={t1[4]} name={"capacity"+t1[0]} defaultChecked/> {t1[4]} </label>
                </div>
            </div>
        </div>
        );
    }

    const Ttb2 = () => {
        return (
            <div style={{marginLeft:"22px"}} className="tab5cls-main">
                <p style={{fontSize:"18px"}}>{t2[0]}</p>
                {t2[1] ? <p style={{fontSize:"14px"}}>{t2[1]}</p> : null}
                {t2[2] ? <p style={{fontSize:"14px"}}>{t2[2]}</p> : null}
            </div>
        );
    }

    const Ttb3 = () => {
        return(
            <div style={{display:"flex",flexDirection:"row",marginTop:"-18px"}}>
                <div className="mainDiv" style={{marginLeft:"22px"}}>
                    <div style={{margin:"2px 15px 2px 15px"}}>
                        <p className="sub-part-liDiv">Type</p>
                        <select className="selectCls"><option>{t3[0]}</option></select>
                    </div>
                    <div style={{margin:"2px 15px 2px 15px"}}>
                        <p className="sub-part-liDiv">Volume</p>
                        <p className="sub-p">{t3[1]}</p>
                    </div>
                    <div style={{margin:"2px 15px 2px 15px"}}>
                        <p style={{width:"85px"}} className="sub-part-liDiv">Capacity (GB)</p>
                        <input className="newSec-ipTxt" type="number" style={{pointerEvents:"none",color:"#000"}} value={t3[2]} readOnly />
                    </div>
                    <div style={{margin:"2px 15px 2px 15px"}}>
                        <p className="sub-part-liDiv">Encryption</p>
                        <input style={{marginLeft:"20px",pointerEvents:"none"}} className="colorInput" type="color" value="#007EFF" readOnly></input>
                    </div>
                    <div style={{margin:"2px 15px 2px 15px"}}>
                        <p className="sub-part-liDiv">IOPS</p>
                        <p className="sub-p">{t3[3]}</p>
                    </div>
                    <div style={{margin:"2px 15px 2px 15px"}}>
                        <p style={{width:"100px"}} className="sub-part-liDiv">Backup Required</p>
                        <input style={{marginLeft:"35px",pointerEvents:"none"}} className="colorInput" type="color" value="#007EFF" readOnly></input>
                    </div>
                    <div style={{margin:"2px 15px 2px 15px"}}>
                        <p className="sub-part-liDiv">Remarks</p>
                        <input style={{pointerEvents:"none",color:"#000"}} className="newSec-ipTxt" type="text" placeholder={t3[4] ? t3[4] : "Some Remarks"} readOnly/>
                    </div>
                </div>
            </div>
        );
    }

    const Ttb4 = () => {
        return (
            <div className="newSec-liDiv">
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p className="sub-part-liDiv">Type</p>
                    <select className="selectCls"><option value="Type">{t4[1]}</option></select>
                </div>
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p className="sub-part-liDiv">Protocol</p>
                    <input className="newSec-ipTxt" type="text" value={t4[2]} disabled="" readOnly />
                </div>
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p className="sub-part-liDiv">Port Range</p>
                    <input className="newSec-ipTxt" type="text" value={t4[3]} disabled="" readOnly />
                </div>
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p className="sub-part-liDiv">Source</p>
                    <input className="newSec-ipTxt" type="text" value={t4[4]} disabled="" readOnly />
                </div>
                <div style={{margin:"5px 25px 5px 25px"}}>
                    <p className="sub-part-liDiv">Description</p>
                    <input style={{pointerEvents:"none", color:"#000"}} className="newSec-ipTxt" type="text" placeholder={t4[5] ? t4[5] : "Some Remarks"} readOnly></input>
                </div>
            </div>
        );
    }

    
    return (
        <div>
            <h2 style={{marginLeft:"22px"}}>Image</h2>
            {t1 ? <Ttb1 /> : null}
            <h2 style={{marginLeft:"22px",marginTop:"60px"}}>Instance</h2>
            {t2 ? <Ttb2 /> : null}
            <h2 style={{marginLeft:"22px",marginTop:"60px"}}>Storage</h2>
            {t3 ? <Ttb3 /> : null}
            <h2 style={{marginLeft:"22px",marginTop:"60px"}}>Security Groups : ( {t4[0]} )</h2>
            {t4 ? <Ttb4 />: null}

            <h2 style={{marginLeft:"22px",marginTop:"60px"}}>Number of Instances</h2>
            <input style={{marginLeft:"22px",width:"300px",height:"25px",borderRadius:"4px",border:"1px solid #C4C4C4"}} className="" type="text" value="2" disabled="" readOnly />

            <div className="main-btnDiv">
                <button className="main-btnCls" style={{background:"#FB4E4E"}}>Cancel</button>
                <button className="main-btnCls" style={{background:"#000"}}>Back</button>
                <button className="main-btnCls" style={{background:"#2AC769"}} onClick={() => { setOpenOverlay(true); }}>Launch</button>
            </div>
        </div>
        
    )
}

//  { openOverlay && <Modal/> }


export default Tab5;

//var jl = JSON.parse(localStorage.getItem("tab1"));
//console.log(jl[4]);