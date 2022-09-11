import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import DropDown from './DropDown';

const arr1 = ['1 Core', '2 Core', '4 Core'];
const arr2 = ['256MB', '512MB', '1GB', '2GB', '4GB'];

const General = () => {
    const outlet = useOutletContext(); //got header-name
    const [coreValue, setCoreVal] = useState('CPU Cores'); //core value (add $40)
    const [memoryValue, setMemoryVal] = useState('Memory'); //memory value (add $20)
    const navigate = useNavigate();

    const handleCoreVal = (core) => {
        setCoreVal(core);
    }

    const handleMemoryVal = (memory) => {
        setMemoryVal(memory);
    }

    const proceed_tab2a = () => {
        let arr = []
        if(coreValue !== 'CPU Cores' || memoryValue !== 'Memory'){
            arr.push(outlet);
            arr.push(coreValue);
            arr.push(memoryValue);
            localStorage.setItem("tab2",JSON.stringify(arr));
            navigate("/tab3");
        }
        //}
    }

    /*console.clear();
    console.log(outlet);
    console.log(coreValue);
    console.log(memoryValue);*/

    return(
        <>
        <div className="drop-downs">
            <DropDown title_dd="CPU Cores" arrData={arr1} onCoreClick={handleCoreVal}/>
            <DropDown title_dd="Memory" arrData={arr2} onMemoryClick={handleMemoryVal}/>
        </div>

        <button onClick={proceed_tab2a}>Proceed</button>
        </>
    );
}

export default General;