import React from 'react';
import { NavLink } from 'react-router-dom';
import wclogo from "./logo.json"
export const Dropdown = ({filter}) => {
        
    return (
        <>            
            <ul className='drop-down'>
                {
                filter.map((logo, index) => (
                    <li key={index}>
                        <NavLink className="nav-link" to={ filter === wclogo ? `/category/national/${logo.alt}` : `category/club/${logo.alt}` }><img src={logo.src} alt={logo.alt}/></NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
};

  