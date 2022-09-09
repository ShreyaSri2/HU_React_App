import React from "react";
import {Routes, Route, Link, Outlet} from 'react-router-dom';
import './Tab4.css';
import CreateSecurity from './CreateSecurity';
import SelectSecurity from './SelectSecurity';


const Tab4 = () => {
    return (  
        <>   
        <div className="radioBtns">
            <Link to='/tab4/t4a'><label><input style={{accentColor:"#007EFF"}} type="radio" value="Create a new security group" name="security"/>Create a new security group</label></Link>
            <Link to='/tab4/t4b'><label><input style={{accentColor:"#007EFF"}} type="radio" value="Select an existing security group" name="security"/>Select an existing security group</label></Link>
        </div>

        {/*<Routes>
            <Route path='tab4/tab4A' element={<CreateSecurity />}></Route>
            <Route path='tab4/tab4B' element={<SelectSecurity />}></Route>
    </Routes>*/}

        <Outlet />
        </>
    )
}


export default Tab4;