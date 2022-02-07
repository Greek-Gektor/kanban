import React, {useEffect, useState} from 'react';
import s from './App.module.css';


import data from "./mock.json"
import Main from "./Components/Main/main";





function App() {
const [tasks , setTasks]= useState(data)

    return (
        <div className={s.wrapper}>
            {/*<Header/>*/}
            <Main tasks={tasks} setTasks={setTasks}/>
            {/*<Footer/>*/}
        </div>
    );

}

export default App;
