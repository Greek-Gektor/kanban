import React from 'react';
import s from './TypeOfTasks.module.css';
import Task from "../Task/Task";
import {reRender} from "../../index";


class TypeOfTasks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let newTaskName = React.createRef();

        let addTusk = () => {
            if(newTaskName.current.value !=='') {
                let tuskName = newTaskName.current.value;
                this.props.addTusk(tuskName);
                newTaskName.current.value=''}

        }

        let tasksElements = this.props.state.backLog.tasks
            .map(task => <Task name={task.name}/> )

        return (
            <div className={s.typeOfTasks}>
                <span className={s.title}>{this.props.state.backLog.title}</span>
                {tasksElements}
                <input className={this.props.state.backLog.inputStyle.showInput}
                       ref={newTaskName}
                       type="text"/>
                <button className={s.button} onClick={addTusk}>Add card</button>
            </div>
        );
    }
}


export default TypeOfTasks;
