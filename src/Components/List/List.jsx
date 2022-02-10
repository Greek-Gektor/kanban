
import React from 'react';
import {useState} from 'react'
import s from './List.module.css'
import {LIST_TYPES} from "../../config";
import Form from "../Form/Form";

const List = (props) => {

    const {type, title, personalTasks, addNewTask, allTasks, setTasks} = props




    const [isFormVisible, setFormVisible] = useState(false)
    const [isAddButtonVisible, setAddButtonVisible] = useState(true)

    const [isReadyButtonVisible, setReadyButtonVisible] = useState(true)
    const [isReadyListVisible, setReadyListVisible] = useState(false)

    const readyHandleChange = (e) => {

        const updatedTasks = allTasks.map(task => {
            if (e.target.value === task.id) {
                return {...task, status: 'ready'}
            }
            return task
        })
        setTasks(updatedTasks)
        setReadyListVisible(false)
        setReadyButtonVisible(true)
    }

    const formSubmit = (title, description) => {
        addNewTask(title, description)
        setFormVisible(false)
        setAddButtonVisible(true)
    }

    const handleAddNewTask = () => {
        setFormVisible(!isFormVisible)
        setAddButtonVisible(false)
    }

    const handleReadyNewTask = () => {
        setReadyListVisible(!isReadyListVisible)
        setReadyButtonVisible(false)
    }

    return (
        <div className={s.list}>
            <h2 className={s.title}>{title}</h2>
            {personalTasks.length ?
                personalTasks.map(task =>
                    <div className={s.task}>{task.title}</div>
                ) :
                <p className={s.task}>No tasks added yet</p>}
            {type === LIST_TYPES.BACKLOG && isAddButtonVisible &&
            <button onClick={handleAddNewTask} className={s.addButton}>+ Add card</button>}
            {type === LIST_TYPES.BACKLOG && isFormVisible && (
                <Form setAddButtonVisible={setAddButtonVisible} formSubmit={formSubmit}/>)}

            {type === LIST_TYPES.READY && isReadyButtonVisible &&
            <button onClick={handleReadyNewTask} className={s.addButton}>+ Add card</button>}
            {type === LIST_TYPES.READY && isReadyListVisible &&
            <select className={s.select} onChange={readyHandleChange} >
                <option selected="selected"> </option>
                {allTasks.map(task => {
                    if (task.status === LIST_TYPES.BACKLOG) {
                        return <option value={task.id} id={task.id}>{task.title}</option>
                    }
                })}
            </select>}

            {type === LIST_TYPES.IN_PROGRESS && <button className={s.addButton}>+ Add card</button>}
            {type === LIST_TYPES.FINISHED && <button className={s.addButton}>+ Add card</button>}

        </div>
    );
}


export default List;