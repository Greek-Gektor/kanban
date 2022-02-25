import React from 'react';
import {useState} from 'react'
import {useRouteMatch, Link} from 'react-router-dom'
import s from './TaskDetails.module.css';


function TaskDetails(props) {

    const match = useRouteMatch()
    const {taskId} = match.params
    const {tasks, setTasks} = props
    const task = tasks.find(task => task.id === taskId)

    const [isEditButtonVisible, setEditButtonVisible] = useState(true)
    const [isSubmitButtonVisible, setSubmitButtonVisible] = useState(false)

    const [descriptionValue, setDescriptionValue] = useState(task.description)


    /*    const descriptionHandleChange = (e) => {

            const updatedTasks = allTasks.map(task => {
                if (taskId === task.id) {
                    return {...task, description: e.target.value}
                }
                return task
            })
            setTasks(updatedTasks)

        }*/

    const mzfk = () => {
        setEditButtonVisible(false)
        setSubmitButtonVisible(true)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const updatedTasks = tasks.map(task => {
            if (taskId === task.id) {
                return {...task, description: 'descriptionValue'}
            }
            return task
        })
        setTasks(updatedTasks)
        setSubmitButtonVisible(false)
        setEditButtonVisible(true)
    }

    const handleChange = e => {
        setDescriptionValue({...descriptionValue, descriptionValue: e.target.value})
    }

    return (
        <div className={s.tdWrapper}>
            <div className={s.tdTask}>

                <h2 className={s.tdTitle}>{task.title}</h2>
                {isEditButtonVisible &&
                <>
                    <p className={s.tdParagraf}>{descriptionValue || "This task has no description"}</p>
                    <button onClick={mzfk}>Edit description</button>
                </>
                }
                {isSubmitButtonVisible &&
                <form onSubmit={handleSubmit}>
                    <textarea name="tdd" id="tdd" onChange={handleChange}>{descriptionValue}</textarea>
                    <button type='submit'>Submit</button>
                </form>

                }


            </div>
            <div className={s.tdBack}>
                <Link className={s.tdLink} to='/'>&#10006;</Link>
            </div>
        </div>
    );
}


export default TaskDetails;
