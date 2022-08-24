import React from 'react'
import Banner from '../components/Banner'
import CartHorizontal from '../components/CartHorizontal'
import css from '../styles/styles.css'
import water from '../media/water__cnq38qvnj9jm_medium_2x.jpg'
import CartVertical from '../components/CartVertical'
import Test from '../components/test'
function Home() {
    return (
        <div className='Home-container'>
            <Banner/>
            <h1 className='Home-container__title'>Te ayuda a hacer más. <br/>Por menos de lo que crees.</h1>
            <p className='Home-container__subtitle'>Poderosas funcionalidades para ayudarte a llevar una vida activa, saludable y mantenerte a salvo y en contacto con todo lo que te importa. Sensores avanzados para registrar todos tus movimientos y medir tus entrenamientos favoritos. Y gracias a la conexión celular, puedes salir sin tu teléfono.1 Apple Watch SE es mucho más que un reloj y está más a tu alcance.</p>
            <CartHorizontal/>
            
            <CartVertical media={water} secondaryColor={"#0095D0"}/> 
            {
            /* <Test 
            text={["No pierdas",<br />,"de vista la",<br />, <span style={{color:"#b7283b"}}>salud de tu <br />corazón</span>, "."]}
            video={undefined}
            backgroundColor={"#FFF4F4"}
            overlayColor={"#b7283b"}
            backgroundImage={finishes}

            ></Test>
            <Test 
            text={["Dos",<span style={{color:"#b7283b"}}>tamaños</span>,".",<br />,"Tres ", <span style={{color:"#b7283b"}} >acabados</span>, ".", <br />, "Infinitas razones para quererlo."]}
            video={undefined}
            backgroundColor={"#FFF7F7"}
            overlayColor={"#ad1f1f"}
            backgroundImage={finishes}
            ></Test> */
            }
        </div>
    )
}

export default Home