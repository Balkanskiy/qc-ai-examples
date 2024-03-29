import React from 'react';
import Cards from '../cards/cards';
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
                    <Cards />
                </main>
            </div>

            <footer className="footer">
                {/* Footer content goes here */}
            </footer>
        </div>
        );
};

export default Layout;