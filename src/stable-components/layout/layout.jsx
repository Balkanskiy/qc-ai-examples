import React from 'react';
import './styles.css';
import { Cards } from '../cards/cards';
import { Sidebar } from  '../sidebar/sidebar';

const Layout = () => {
    
    return (
        <div className="layout">

            <div className="main">
                <aside className="sidebar">
                    <Sidebar />
                </aside>

                <main className="content">
                    <Cards />
                </main>
            </div>

        </div>
        );
};

export default Layout;