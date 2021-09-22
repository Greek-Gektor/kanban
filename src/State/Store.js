import React from 'react';
import s from "../Components/TypeOfTasks/TypeOfTasks.module.css";



let store =
    {
        backLog: {
            title: 'Backlog',
            tasks: [{
                id: 'task1',
                name: 'Sprint bugfix'
            }, {
                id: 'task2',
                name: 'YoYo'
            }
            ],
            inputStyle: {
                hiddenInput: s.inputRemove,
                showInput: s.input
            },
            buttonState: {}
        }
    }




export default store;