import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './Tab2.css'


const Tab2 = () => {
    const [tab2HeaderVal, setTab2HeaderVal] = useState('');

    function getHeaderData(event){
        setTab2HeaderVal(event.target.innerText);
    }

    return (
        <div className="tab2-mainCls">
            <div className="mainCls-btns">
                <Link to="/tab2/t2a"><button onClick={getHeaderData} className="mainCls-btn" data-testid="xyz1">General Purpose</button></Link>
                <Link to="/tab2/t2b"><button onClick={getHeaderData} className="mainCls-btn" data-testid="xyz2">CPU Optimised</button></Link>
                <Link to="/tab2/t2c"><button onClick={getHeaderData} className="mainCls-btn" data-testid="xyz3">Storage Optimised</button></Link>
                <Link to="/tab2/t2d"><button onClick={getHeaderData} className="mainCls-btn" data-testid="xyz4">Network Optimised</button></Link>
            </div>

            <p className="tab2-p">{tab2HeaderVal}</p>

            <Outlet context={tab2HeaderVal}/>

        </div>
    )
}


export default Tab2;