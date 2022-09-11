import React, {useState, useContext} from "react";
import './Tab4.css';
import ListItem from "./ListItem";
import MainListItem from "./MainListItem";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import './ButtonCls.css';


const Tab3 = () => {
    const [counter, setCounter] = useState(0);
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    const { openOverlay , setOpenOverlay, costList, setCostList, totPrice, setTotPrice } = useContext(AppContext);

    function addVolume(){
        setList(list.concat(<ListItem key={counter+1} vol="Ext" flag={true} id={counter+1} onCrossClick={removeElement}/>));
        setCounter(list.length+1);
    };

    const removeElement = (boxId) => {
        let newList = list.filter((el,i) => i !== boxId);
        setList(newList);
    }

    const proceed_tab3 = () => {
        let arr = [];

        arr.push('SSD');
        arr.push('Root');
        arr.push('250');
        arr.push('600');
        arr.push('Testing');
        localStorage.setItem("tab3",JSON.stringify(arr));

        let newObj = {...costList};
        newObj["tab3"] = ["Storage" , (20+"")];
        setCostList(newObj);
        setTotPrice(totPrice+parseFloat(20));
        
        navigate("/tab4");
    }

    const back_tab3 = () => {
        navigate("/tab2");
    }

    return (
        <div>
            <MainListItem id="0v" key="0v" vol="Root" />
              
            {list}

            <button data-testid="tab3-Ids1" className="btn-rule" onClick={addVolume}>Add Volume</button>


            <div className="main-btnDiv">
                <button data-testid="tab3-Ids3" className="main-btnCls" style={{background:"#000"}} onClick={back_tab3}>Back</button>
                <button data-testid="tab3-Ids2" className="main-btnCls" style={{background:"#007EFF"}} onClick={proceed_tab3}>Proceed</button>
            </div>
        </div>
    );
}


export default Tab3;