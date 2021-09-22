import React from 'react';
import s from './header.module.css';

function Header() {
    return (
        <div className={s.header}>
            <h1 className={s.title}>Awesome Kanban Board</h1>
            <div> <button>Кнопка</button></div>
        </div>
    );
}

export default Header;
