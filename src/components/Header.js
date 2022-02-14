import React, {useState}from 'react';
import { Navi, NaviItem } from './Navi';
import { NavLink } from "react-router-dom";

function Header(){
   

    return(
        <div className='headi row px-2 d-flex justify-content-around'>
            <div className="col d-flex align-items-end">
            <h1 className=""> <a href="/"> Justin Barner </a></h1>
            </div>
            <div className="col ">
            <Navi >
                <NaviItem>
                    <div className="fader box ">
                        <div className='dropper'>
                            <NavLink  to='/'>Home Page</NavLink>
                        </div>
                        <div className='dropper' >
                            <NavLink to="/portfolio">Portfolio</NavLink>
                        </div>
                        <div className='dropper'>
                            <NavLink to='/resume'>Resume</NavLink>
                        </div>
                        <div className='dropper' >
                            <NavLink to="/contact">Contact</NavLink>
                        </div>
                    </div>
                </NaviItem>
            </Navi>
            </div>
        </div>
    )
}

export default Header;