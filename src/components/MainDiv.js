import React, { useState } from "react";
import { Link, Routes, Route } from 'react-router-dom';

import './MainDiv.css';
import Vector from '../icons/Vector.svg';

import Tab1 from '../components/Tabs/Tab1';
import Tab2 from '../components/Tabs/Tab2';
import Tab3 from '../components/Tabs/Tab3';
import Tab4 from '../components/Tabs/Tab4';
import Tab5 from '../components/Tabs/Tab5';
import CreateSecurity from "./Tabs/CreateSecurity";
import SelectSecurity from "./Tabs/SelectSecurity";

//var glblHeader = 'Choose Image';

const MainDiv = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [headerVal, setHeaderVal] = useState('Choose Image')

    const headerBtnClicked = (event) => {
        let str = event.target.innerText;
        let ss = str.split('.');
        //glblHeader = ss[1];
        setHeaderVal(ss[1]);
        console.log(ss[1]);
    }

    const DropDown = () => (
        <div className="drop-down">
                    <span className="spn">US-East-1</span>
                    <span className="spn">Asia Pacific - Mumbai</span>
                    <span className="spn">US-West-1</span>
                </div>
    )

    function toggleDropDown(){
        if(showDropDown){
            setShowDropDown(false);
        }else{
            setShowDropDown(true);
        }
    }

    return(
        <>
        <div className="main-div">

            <div className="sub-div">

                <p className="headerCls">{headerVal}</p>

                
                <div className="nav-bar">
                    <Link to='/'><button onClick={headerBtnClicked} style={{width:"112px"}} className="btn">1.Choose Image</button></Link>
                    <Link to='/tab2'><button onClick={headerBtnClicked} style={{width:"150px"}} className="btn">2.Choose Instance Type</button></Link>
                    <Link to='/tab3'><button onClick={headerBtnClicked} className="btn">3.Choose Storage and Network</button></Link>
                    <Link to='/tab4'><button onClick={headerBtnClicked} className="btn">4.Configure Security</button></Link>
                    <Link to='/tab5'><button onClick={headerBtnClicked} className="btn">5.Review {'&'} Launch</button></Link>
                </div>
                
               

            </div>

            <div className="region-box">
                <div className="region-box-div">
                    <p className="region-box-text">Region</p>
                    <img src={Vector} className="arrowDn" alt="icon" onClick={toggleDropDown}/>
                </div>

                { showDropDown ? <DropDown /> : null }

            </div>

        </div>


        <Routes>
                <Route path='/' element={<Tab1 />}></Route>
                <Route path='tab2' element={<Tab2 />}></Route>
                <Route path='tab3' element={<Tab3 />}></Route>
                <Route path='tab4' element={<Tab4 />}>
                    <Route path='t4a' element={<CreateSecurity />}></Route>
                    <Route path='t4b' element={<SelectSecurity />}></Route>
                </Route>
                <Route path='tab5' element={<Tab5 />}></Route>
        </Routes>

        </>
        
    );
}

export default MainDiv;