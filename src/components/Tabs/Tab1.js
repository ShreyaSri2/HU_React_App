import React, { useState, useContext } from "react";
import './Tab1.css';
import Data from '../Data/dataTab1';
import Data1 from '../Data/dataTab1-a';
import Data2 from '../Data/dataTab1-b';
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import './ButtonCls.css';


var dataArr = [];

const Tab1 = (props) => {
    const [tab1Data, setTab1Data] = useState([]);
    const navigate = useNavigate();
    const [radioBtnVal, setRadioBtnVal] = useState('64-bit (ARM)');
    const { openOverlay , setOpenOverlay, costList, setCostList, totPrice, setTotPrice } = useContext(AppContext);

    if(props.regionNm === "US-East-1"){
        dataArr = Data1;
    }else if(props.regionNm === "Asia Pacific-Mumbai"){
        dataArr = Data;
    }else{
        dataArr = Data2;
    }

    const proceed_tab1 = () => {
        if(tab1Data.length !== 0){
            localStorage.setItem("tab1",JSON.stringify(tab1Data));

            let newObj = {...costList};
            newObj["tab1"] = [tab1Data[1] , tab1Data[3]];
            setTotPrice(totPrice+parseFloat(tab1Data[3]));
            setCostList(newObj);

            navigate("/tab2");
        }
    }

    const selectImage = (event) => {
        let pp = event.target.value;
        let prp = pp.split('##');
        if(pp !== null && pp !== undefined && pp !== ""){
            prp.push(radioBtnVal);
            setTab1Data(prp);
        }else
            console.log("error");
    }

    return (
        <div className="tab-content">
            <ul>
                {
                    dataArr.map((item) => {
                        return(
                            <li className="list-item" key={item.id}>
                                <div className="li-left" />
                                <div className="li-center">
                                    <p className="li-header">{item.title}</p>
                                    <p className="li-desc">{item.description}</p>
                                </div>
                                <div className="li-right">
                                    <div className="li-form">
                                        <label className="form-input"><input onChange={e => setRadioBtnVal(e.target.value)} className="form-radioBtn" type="radio" value="64-bit (ARM)" name={"capacity"+item.id} defaultChecked/> 64-bit (ARM) </label>

                                        {item.title !== "Microsoft Windows Server 2019 Base" ? <label className="form-input"><input onChange={e => setRadioBtnVal(e.target.value)} className="form-radioBtn" type="radio" value="64-bit (x86)" name={"capacity"+item.id} /> 64-bit (x86) </label> : null}
                                        
                                        <button className="form-btn" value={item.id+"##"+item.title+"##"+item.description+"##"+item.price} onClick={selectImage}>Select</button>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="main-btnDiv">
                <button data-testid="tab1-IDs1" className="main-btnCls" style={{background:"#007EFF"}} onClick={proceed_tab1}>Proceed</button>
            </div>

        </div>
    )
}


export default Tab1;