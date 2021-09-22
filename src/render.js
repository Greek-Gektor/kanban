import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import {addTusk} from "./State/State";




export let reRender = (state) => {
    ReactDOM.render(<App
        state={state}
        addTusk={addTusk} />,document.getElementById('root')
    );
};

