import React, {useContext, useState} from "react";
import {AlertContext} from "../context/alert/AlertContext";
import {GithubContext} from "../context/github/githubContext";

export const Search = () => {
    const [value, setValue] = useState('')
    const aler = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return
        }
        github.clearUsers()
        if (value.trim()) {
            aler.hide()
            github.search(value.trim())
        } else {
            aler.show('Provide user login')
        }
    }
    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Type users nickname"
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
}