import React from 'react';
import resume from '../imgs/resume.png'

export default function Resume(){
    return(
        <div className="d-flex justify-content-center">
            <img className="sizing p-3 m-3" src={resume}></img>
        </div>
    )
}