import React from 'react';
import {useState} from 'react'
import s from './List.module.css'
import {LIST_TYPES} from "../../config";
import Form from "../Form/Form";

const List = (props) => {

    const {type, title, tasks,addNewTask} = props

    const [isFormVisible, setFormVisible] = useState(false)

    const [isAddButtonVisible, setAddButtonVisible] = useState(true)

    const formSubmit = (title, description) => {
        addNewTask(title, description)
        setFormVisible(false)
    }

    return (
        <div className={s.list}>
            <h2 className={s.title}>{title}</h2>
            {tasks.length ?
                tasks.map(task =>
                    <div className={s.task}>{task.title}</div>
                ) :
                <p className={s.task}>No tasks added yet</p>}
            {type === LIST_TYPES.BACKLOG && isAddButtonVisible && <button className={s.addButton}>+ Add card</button>}
            {type === LIST_TYPES.BACKLOG && isFormVisible && (<Form formSubmit={formSubmit}/>)}

            {type === LIST_TYPES.READY && <button className={s.addButton}>+ Add card</button>}
            {type === LIST_TYPES.IN_PROGRESS && <button className={s.addButton}>+ Add card</button>}
            {type === LIST_TYPES.FINISHED && <button className={s.addButton}>+ Add card</button>}

        </div>
    );
}


export default List;