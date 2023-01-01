import React, { useState } from 'react'
import css from '../styles/styles.css'
function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
        {
            menuOpen == false 
            ?
            <nav className='Nav-container'>

            <div className='first-nav'>
                <ul>
                    <li><a className='nav-icon' href=""><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-apple" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#ffffff" fill="#ffff" strokeLinecap="butt" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z" />
                    <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
                    </svg></a></li>
                    <li><a className='nav-icon' href="">Mac</a></li>
                    <li><a className='nav-icon' href="">iPad</a></li>
                    <li><a className='nav-icon' href="">iPhone</a></li>
                    <li><a className='nav-icon' href="">Watch</a></li>
                    <li><a className='nav-icon' href="">AirPods</a></li>
                    <li><a className='nav-icon' href="">TV y Casa</a></li>
                    <li><a className='nav-icon' href="">Sólo en Apple</a></li>
                    <li><a className='nav-icon' href="">Soporte</a></li>
                    <li><a className='nav-icon' href="">Dónde Comprar</a></li>
                    <a className='nav-icon__search' href=""><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="25" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                    </svg></a>
                </ul>
                
            </div>
            
            <div className='first-nav__mobile'>
                {   menuOpen == false 
                    ? <div className="menu-btn" onClick={()=>setMenuOpen(!menuOpen)}>
                        <div className="menu-btn__burger"></div>
                    </div>
                    : <div className="menu-btn open" onClick={()=>setMenuOpen(!menuOpen)}>
                        <div className="menu-btn__burger"></div>
                        </div>
                }

                <ul>
                        <li><a className='nav-icon' href=""><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-apple" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#ffffff" fill="#ffff" strokeLinecap="butt" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z" />
                        <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
                        </svg></a>
                        </li>
                </ul>
                
            </div>

            
            </nav >
            : 
            <nav className='Nav-container Nav-container-open'>

            <div className='first-nav'>
                <ul>
                    <li><a className='nav-icon' href=""><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-apple" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#ffffff" fill="#ffff" strokeLinecap="butt" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z" />
                    <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
                    </svg></a></li>
                    <li><a className='nav-icon' href="">Mac</a></li>
                    <li><a className='nav-icon' href="">iPad</a></li>
                    <li><a className='nav-icon' href="">iPhone</a></li>
                    <li><a className='nav-icon' href="">Watch</a></li>
                    <li><a className='nav-icon' href="">AirPods</a></li>
                    <li><a className='nav-icon' href="">TV y Casa</a></li>
                    <li><a className='nav-icon' href="">Sólo en Apple</a></li>
                    <li><a className='nav-icon' href="">Soporte</a></li>
                    <li><a className='nav-icon' href="">Dónde Comprar</a></li>
                    <a className='nav-icon__search' href=""><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="25" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="10" cy="10" r="7" />
                    <line x1="21" y1="21" x2="15" y2="15" />
                    </svg></a>
                </ul>
                
            </div>
            
            <div className='first-nav__mobile'>
                {   menuOpen == false 
                    ? <div className="menu-btn" onClick={()=>setMenuOpen(!menuOpen)}>
                        <div className="menu-btn__burger"></div>
                    </div>
                    : <div className="menu-btn open" onClick={()=>setMenuOpen(!menuOpen)}>
                        <div className="menu-btn__burger"></div>
                        </div>
                }

                <ul className='nav'>
                        <li><a className='nav-icon' href=""><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-apple" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="#ffffff" fill="#ffff" strokeLinecap="butt" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z" />
                        <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
                        </svg></a>
                        </li>
                </ul>
                
            </div>

            {   menuOpen == true 
                    ? <div className="dropMenu drop-open" >
                        <div className="dropMenu__list">
                        <ul>
                        <a className='nav-icon__search' href="#">
                        <input type="search" placeholder="Buscar en apple.com"/>

                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="25" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                        </a>
                    <li><a className='nav-item' href="#">Mac</a></li>
                    <li><a className='nav-item' href="#">iPad</a></li>
                    <li><a className='nav-item' href="#">iPhone</a></li>
                    <li><a className='nav-item' href="#">Watch</a></li>
                    <li><a className='nav-item' href="#">AirPods</a></li>
                    <li><a className='nav-item' href="#">TV y Casa</a></li>
                    <li><a className='nav-item' href="#">Sólo en Apple</a></li>
                    <li><a className='nav-item' href="#">Soporte</a></li>
                    <li><a className='nav-item' href="#">Dónde Comprar</a></li>
                    
                </ul>
                        </div>
                    </div>
                    : <div className="dropMenu" >
                    </div>
            }
            </nav >
        }
        </>
    )
}

export default Nav