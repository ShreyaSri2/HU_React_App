import React from "react";
import DropDown from './DropDown';
import './Tab2.css'

const arr1 = ['1 Core', '2 Core', '4 Core', '6 Core', '8 Core'];
const arr2 = ['256MB', '512MB', '1GB', '4GB', '8GB'];

const Tab2 = () => {
    return (
        <div className="tab2-mainCls">
            <div className="mainCls-btns">
                <button className="mainCls-btn" style={{border:"1px solid #007EFF", color:"#007EFF"}}>General Purpose</button>
                <button className="mainCls-btn">CPU Optimised</button>
                <button className="mainCls-btn">Storage Optimised</button>
                <button className="mainCls-btn">Network Optimised</button>
            </div>

            <p className="tab2-p">Create Configuration</p>

            <div className="drop-downs">
                <DropDown title_dd="CPU Cores" arrData={arr1}/>
                <DropDown title_dd="Memory" arrData={arr2}/>
            </div>
        </div>
    )
}


export default Tab2;