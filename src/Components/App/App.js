import React from 'react';
import s from './App.module.css';
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Main from "../Main/main";


function App(props) {
    return (
    <div className={s.wrapper}>
      <Header />
      <Main state={props.state}  addTusk={props.addTusk}/>
      <Footer />
    </div>
  );
}

export default App;
