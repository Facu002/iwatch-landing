import React, { useState } from 'react'

function ProductNav() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
        <div className='second-nav'>
            <h1>Apple Watch SE</h1>
            <div>
                <a href="/">Descripción</a>
                <a href="/">Por qué Apple Watch</a>
                {/* <button c>Descripción</button>
                <button c>Por qué buttonpple Watch</button> */}
                <button className='second-nav_btn'>Comprar</button>
            </div>
        </div>
        <div className='second-nav second-nav__mobile'>
            
            {
                menuOpen === true
                ? <>
                    <div className="nav__mobile-top">
                        <h1>Apple Watch SE</h1>
                        <div>
                        <div className={`second-nav_menuBtn ${menuOpen}`} onClick={()=>{setMenuOpen(!menuOpen)}}></div>
                            <button className='second-nav_btn'>Comprar</button>
                        </div>
                    </div>
                    <div className={`nav__mobile-bottom nav__mobile-bottom-${menuOpen}`}>
                        <ul>
                            <li><a href="#">Descripción</a></li>
                            <li><a href="#">Por qué Apple Watch</a></li>
                        </ul>
                    </div>
                </>
                : 
                <>
                    <div className="nav__mobile-top">
                        <h1>Apple Watch SE</h1>
                        <div>
                            <div className={`second-nav_menuBtn ${menuOpen}`} onClick={()=>{setMenuOpen(!menuOpen)}}></div>
                            <button className='second-nav_btn'>Comprar</button>
                        </div>
                    </div>
                    <div className={`nav__mobile-bottom nav__mobile-bottom-${menuOpen}`}>
                        
                    </div>
                </>
            }
        </div>
        </>
    )
}

export default ProductNav