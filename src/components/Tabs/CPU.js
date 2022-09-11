import React, {useState, useContext} from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import DropDown from './DropDown';
import AppContext from "../../context/AppContext";
import './ButtonCls.css';

const arr1 = ['1 Core', '2 Core', '8 Core', '16 Core'];
const arr2 = ['16GB', '32GB', '64GB'];

const CPU = () => {
    const outlet = useOutletContext(); //got header-name 
    const [coreValue, setCoreVal] = useState('CPU Cores'); //core value
    const [memoryValue, setMemoryVal] = useState('Memory'); //memory value
    const { openOverlay , setOpenOverlay, costList, setCostList, totPrice, setTotPrice } = useContext(AppContext);
    const navigate = useNavigate();

    const handleCoreVal = (core) => {
        setCoreVal(core);
    }

    const handleMemoryVal = (memory) => {
        setMemoryVal(memory);
    }

    const proceed_tab2b = () => {
        let arr = []
        if(coreValue !== 'CPU Cores' || memoryValue !== 'Memory'){
            arr.push(outlet);
            arr.push(coreValue);
            arr.push(memoryValue);
            localStorage.setItem("tab2",JSON.stringify(arr));

            let newObj = {...costList};
           
            let cost1 = (coreValue !== 'CPU Cores') ? 20 : 0;
            let cost2 = (memoryValue !== 'Memory') ? 40 : 0;
            newObj["tab2"] = [outlet , ((cost1+cost2)+"")]
            setCostList(newObj);
            setTotPrice(totPrice+parseFloat(cost1+cost2));

            navigate("/tab3");
        }
    }

    const back_tab2b = () => {
        navigate("/");
    }

    return(
        <>
        <div className="drop-downs">
            <DropDown title_dd="CPU Cores" arrData={arr1} onCoreClick={handleCoreVal}/>
            <DropDown title_dd="Memory" arrData={arr2} onMemoryClick={handleMemoryVal}/>
        </div>

        <div className="main-btnDiv">
            <button data-testid="cpu-tstId2" className="main-btnCls" style={{background:"#000"}} onClick={back_tab2b}>Back</button>
            <button data-testid="cpu-tstId1" className="main-btnCls" style={{background:"#007EFF"}} onClick={proceed_tab2b}>Proceed</button>
        </div>
        </>
    );
}

export default CPU;