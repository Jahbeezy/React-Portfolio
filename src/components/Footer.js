import React from 'react';
import { Link } from 'react-router-dom'


export default function Footer(){
    return(
        <div className="d-flex justify-content-center">
            <a href= "https://github.com/Jahbeezy" className='link p-2' target="_blank" > 
            GitHub
            </a>
            <a href= "https://github.com/Jahbeezy" className='link p-2' target="_blank" > 
            LinkedIn
            </a>
        </div>
    )
}