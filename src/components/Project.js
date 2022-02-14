import React from 'react';
import pic from '../imgs/pic.jpg'




export default function Project(){
    const projects = [
    {
        _id: 3,
        img: `S.png`,
        title: "Scrappi",
        desc: "Scrappi uses AI to analyze pictures or tables then produce predictions of data based on the file.",
        dep:'https://salty-everglades-38009.herokuapp.com/'
    },
    {
        _id: 1,
        img: `MF2.png`,
        title: "Movie Finder",
        desc: "Search though a database of movies to find what platform they will be displayed on.",
        dep:'https://israelmrios.github.io/Movie-Finder/'
    },
    {
        _id: 2,
        img: `WC.png`,
        title: "Weather Channel",
        desc: "Search a city to check the weather and UV ratings.",
        dep: "https://jahbeezy.github.io/Zephyr/"
    },
    

]
    return(
        <div className="container py-3">
        <div className='row d-flex justify-content-center'>

            {projects.map((project)=>(
                <div key={project._id} className='col-sm-12 col-md-5 col-lg-4 m-2 p-2 d-flex justify-content-center text-center block' >

                    <a href={project.dep} target='_blank' className='fonty'>
                        <img className='col-8 p-1 picture'  src={require(`../imgs/${project.img}`)}/>
                        <div>{project.title}</div>
                        <div>{project.desc}</div>
                    </a>
                </div>
            ))}
        </div>
        </div>
    )
}