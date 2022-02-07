import React from 'react';
import s from './main.module.css';
import Board from "../Board/Board";


const Main = (props) => {
    return (
        <div className={s.main}>
            <Board {...props} />
            {/*<TaskDetail {...props} />*/}
        </div>
    );
}

export default Main;
