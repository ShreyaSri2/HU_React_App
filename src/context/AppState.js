import React, { useState } from "react";
import AppContext from "./AppContext";

const AppState = (props) => {

    //const [t1, setT1] = useState([]);
    //const obj = {t1, setT1};

    const [openOverlay, setOpenOverlay] = useState(false);
    //const obj2 = {openOverlay, setOpenOverlay};

    return (
        <AppContext.Provider value={{openOverlay, setOpenOverlay}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;