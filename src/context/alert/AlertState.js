import React from "react";
import {AlertContext} from "./AlertContext";

export const AlertState = ({children}) => {

    return (
        <AlertContext.Provider>
            {children}
        </AlertContext.Provider>
    )
}