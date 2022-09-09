import React, {useState} from "react";
import './Tab4.css';
import ListItem from "./ListItem";

var cc = 1;

const Tab3 = () => {
    var [list, setList] = useState([]);

    function addVolume(event){
        setList(list.concat(<ListItem key={cc} vol="Ext" cap="8" iops="100" flag={true} />));
        cc++ ;
    };

    return (
        <div>
            <ListItem key="0v" vol="Ext" cap="8" iops="100" flag={false} />
            
            
            {list}

            <button className="btn-rule" onClick={addVolume}>Add Volume</button>
        </div>
    );
}


export default Tab3;