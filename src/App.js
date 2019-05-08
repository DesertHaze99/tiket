import React, {Component} from 'react';
import './App.css';
import {Link} from "react-router-dom";
import Main from './components/page/Main';
import MyAppBar from './components/MyAppBar'


class App extends Component {

    render() {
        return (
            <div>
                
                <MyAppBar/>
                <Main/>
            </div>
        )
    }
}

export default App;
