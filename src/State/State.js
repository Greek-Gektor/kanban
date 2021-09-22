import React from 'react';
import s from "../Components/TypeOfTasks/TypeOfTasks.module.css";
import {reRender} from "../render";
import store from "./Store";


/*const state = {
    backLog: {
        title: 'Backlog',
        tasks: [{
            id: 'task1',
            name: 'Sprint bugfix'
        },{
            id: 'task2',
            name: 'MatherFucker'
        }
        ],
        inputStyle: {
            hiddenInput: s.inputRemove,
            showInput: s.input
        },
        buttonState: {}
    }
}*/


/*localStorage.setItem('store', JSON.stringify(store));
const state = JSON.parse(localStorage.getItem(`store`));*/

localStorage.setItem('store', JSON.stringify(store));
const state = JSON.parse(localStorage.getItem(`store`));



export let addTusk = (tuskName) => {
    let newTask = {
        id: `${'task'+ store.backLog.tasks.length }`,
        name: tuskName
    };
    store.backLog.tasks.push(newTask);
    reRender(state)
}





export default state;