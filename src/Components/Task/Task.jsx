import React from 'react';
import s from './Task.module.css';


function Task(props) {
    return (
        <div className={s.task}>
            {props.name}
        </div>
    );
}


export default Task;
