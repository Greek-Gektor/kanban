import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {BrowserRouter} from 'react-router-dom'

import data from "./mock.json"
import Main from "./Components/Main/main";





function App() {
const [tasks , setTasks]= useState(data)

    return (

        <div className={s.wrapper}>
            <BrowserRouter>
                {/*<Header/>*/}
                <Main tasks={tasks} setTasks={setTasks}/>
                {/*<Footer/>*/}

            {/*<Header/>*/}
            {/*<Main tasks={tasks} setTasks={setTasks}/>*/}
            {/*<Footer/>*/}
            </BrowserRouter>
        </div>
    );

}

export default App;
