import React, { useState } from "react";
import AppContext from "./AppContext";

const AppState = (props) => {

    const [openOverlay, setOpenOverlay] = useState(false);

    return (
        <AppContext.Provider value={{openOverlay, setOpenOverlay}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;