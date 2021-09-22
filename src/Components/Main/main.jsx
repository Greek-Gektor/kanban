import React from 'react';
import s from './main.module.css';
import TypeOfTasks from "../TypeOfTasks/TypeOfTasks";







function Main(props) {
    return (
        <div className={s.main}>
            <TypeOfTasks state={props.state}  addTusk={props.addTusk} />
{/*            <TypeOfTasks dataMock={props.dataMock} />
            <TypeOfTasks dataMock={props.dataMock} />
            <TypeOfTasks dataMock={props.dataMock} />*/}
        </div>
    );
}

export default Main;
