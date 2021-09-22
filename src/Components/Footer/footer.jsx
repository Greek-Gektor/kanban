import React from 'react';
import s from './footer.module.css';

function Footer() {
    return (
        <div className={s.footer} >
            <span>Active tasks: 0</span>
            <span>Finished tasks: 0</span>
            <span>Kanban board by Serj, 2021</span>
        </div>
    );
}

export default Footer;
