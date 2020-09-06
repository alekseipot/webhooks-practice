import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Profile} from "./pages/Profile";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";

function App() {
    return (
        <AlertState>
            <BrowserRouter>
                <Navbar/>
                <div className="container pt-4">
                    <Alert alert={{text: 'test alert'}}/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/profile/:name" component={Profile}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </AlertState>
    );
}

export default App;
