import React, {useState} from "react";

const Tab3 = () => {
    //var [storageNtwk, setStorageNtwk] = useState(1);
    var [list, setList] = useState([]);

    function addVolume(event){
        setList(list.concat(<li key={list.length}>0</li>));
    };

    return (
        <div>
            <li>testing</li>
            {list}

            <button onClick={addVolume}>Add Volume</button>
        </div>
    );
}


export default Tab3;