import React from 'react';
import './styles.css';
import { Cards } from '../cards/cards';

export const Layout = () => {
    return (
        <div className="layout">
            {/*<aside>*/}
            {/*    <Cards number={17} />*/}
            {/*</aside>*/}
            <main>
                <Cards number={7}/>
            </main>
        </div>
        );
};