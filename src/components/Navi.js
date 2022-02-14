import React, { useState } from 'react'

function Navi(props){
    return (
        <nav className='navi'>
            <div className='d-flex justify-content-end'> { props.children } </div>

        </nav>
    )
    
}

function NaviItem(props) {
    const [open, setOpen] = useState(false);

    return(
    <div className='item'>

        <button className="btn" onClick={()=> setOpen(!open)}>
            <p >Menu</p>
        </button>
        
        {open && props.children}

    </div>
    )
}


export { Navi, NaviItem };