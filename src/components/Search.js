import React, {useContext} from "react";
import {AlertContext} from "../context/alert/AlertContext";

export const Search = () => {
    const {show} = useContext(AlertContext)

    const onSubmit = event => {
        if(event.key === 'Enter') {
            show('This is Alert')
        }
    }
    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Type users nickname"
                onKeyPress={onSubmit}
            />
        </div>
    )
}