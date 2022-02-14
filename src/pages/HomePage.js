import React from 'react';
import kobe from '../imgs/pic.jpg'

export default function HomePage(){
    return(

    <div className="container p-3">
        <div className="row d-flex align-content-center">
            <img src={kobe} className="col-md-6 col-sm-12"/>
            <div className="col-md-6 col-sm-12 text-center ">
                Hello my name is Justin and I am a full stack developer. I can create responsive UI with either Handlebars or React. On the backend I can use Node, Express with a MysQl or MongoDB. My goal is to create useful applications for peoples every day life.  
            </div>
        </div>
    </div>
    
    )
}