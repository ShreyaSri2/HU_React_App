import React, {useState} from "react";
import './Tab4.css';
import ListItem from "./ListItem";
import MainListItem from "./MainListItem";
import { useNavigate } from "react-router-dom";

//var cc = 1;

const Tab3 = () => {
    const [counter, setCounter] = useState(0);
    const [list, setList] = useState([]);
    const navigate = useNavigate();

    function addVolume(){
        setList(list.concat(<ListItem key={counter+1} vol="Ext" flag={true} id={counter+1} onCrossClick={removeElement}/>));
        setCounter(list.length+1);
    };

    const removeElement = (boxId) => {
        //console.log(boxId);
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
        
        navigate("/tab4");
    }

    return (
        <div>
            <MainListItem id="0v" key="0v" vol="Root" />
              
            {list}

            <button className="btn-rule" onClick={addVolume}>Add Volume</button>

            <button onClick={proceed_tab3}>Procced</button>
        </div>
    );
}


export default Tab3;