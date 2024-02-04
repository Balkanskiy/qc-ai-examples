import React from 'react';
import './styles.css';
import { Cards } from '../cards/cards';
import { Sidebar } from  '../sidebar/sidebar';

const Layout = () => {
    return (
        <div className="layout">
            <aside>
                <Sidebar />
            </aside>
            <main>
                <Cards number={7}/>
            </main>
        </div>
        );
};

export default Layout;