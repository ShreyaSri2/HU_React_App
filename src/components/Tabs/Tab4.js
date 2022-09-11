import React from "react";
import {Link, Outlet} from 'react-router-dom';
import './Tab4.css';

const arrD = ["Security SG1", "Security SG2", "Security SG3", "Security SX 27", "Security SL 12", "Group 29", "Security RT 7", "SGX 8", "Security RT 8", "Group 32", "SGX 89", "TSMU 58"];

const Tab4 = () => {
    return (  
      <>   
        <div className="radioBtns">
            <Link to='/tab4/t4a'><label><input style={{accentColor:"#007EFF"}} type="radio" value="Create a new security group" name="security"/>Create a new security group</label></Link>
            <Link to='/tab4/t4b'><label><input style={{accentColor:"#007EFF"}} type="radio" value="Select an existing security group" name="security"/>Select an existing security group</label></Link>
        </div>

        <Outlet context={arrD}/>
      </>
    )
}


export default Tab4;