import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './Tab2.css'


const Tab2 = () => {
    const [tab2HeaderVal, setTab2HeaderVal] = useState('');

    function getHeaderData(event){
        setTab2HeaderVal(event.target.innerText);
        //console.log(tab2HeaderVal);
    }

    return (
        <div className="tab2-mainCls">
            <div className="mainCls-btns">
                <Link to="/tab2/t2a"><button onClick={getHeaderData} className="mainCls-btn" data-testid="xyz">General Purpose</button></Link>
                <Link to="/tab2/t2b"><button onClick={getHeaderData} className="mainCls-btn">CPU Optimised</button></Link>
                <Link to="/tab2/t2c"><button onClick={getHeaderData} className="mainCls-btn">Storage Optimised</button></Link>
                <Link to="/tab2/t2d"><button onClick={getHeaderData} className="mainCls-btn">Network Optimised</button></Link>
            </div>

            {/*<p className="tab2-p">Create Configuration</p>*/}
            <p className="tab2-p">{tab2HeaderVal}</p>

            <Outlet context={tab2HeaderVal}/>

        </div>
    )
}


export default Tab2;