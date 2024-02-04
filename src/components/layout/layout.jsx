import React, {useEffect, useState} from 'react';
import './styles.css';

const Layout = () => {
 
    
    return (
        <div className="layout">
            <header className="header">
                {/* Header content goes here */}
            </header>

            <div className="main">
                <aside className="sidebar">
                    {/* Sidebar content goes here */}
                </aside>

                <main className="content">
                    {/* Main content goes here */}
                    
                </main>
            </div>

            <footer className="footer">
                {/* Footer content goes here */}
            </footer>
        </div>
        );
};

export default Layout;