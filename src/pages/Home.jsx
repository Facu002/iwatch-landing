import React from 'react'
import Banner from '../components/Banner'
import CartHorizontal from '../components/CartHorizontal'
import css from '../styles/styles.css'
import water from '../media/water__cnq38qvnj9jm_medium_2x.jpg'
import fitness from '../media/fitness_plus__f4hqazav9quu_medium_2x.jpg'
import activity from '../media/activity_watch_hw__f42hdrx2vnqm_large.jpg'
import health from '../media/heart_health__cjye3zyhh42u_medium_2x.jpg'
import video from '../media/medium_2x.mp4'
import attention from '../media/medium_2x.2.mp4'
import emergency from '../media/sos_emergency__dk1t72ehohg2_medium_2x.jpg';
import CartVertical from '../components/CartVertical'
function Home() {
    return (
        <div className='Home-container'>
            <Banner/>
            <>
            <h1 className='Home-container__title'>Te ayuda a hacer más. <br/>Por menos de lo que crees.</h1>
            <p className='Home-container__subtitle'>Poderosas funcionalidades para ayudarte a llevar una vida activa, saludable y mantenerte a salvo y en contacto con todo lo que te importa. Sensores avanzados para registrar todos tus movimientos y medir tus entrenamientos favoritos. Y gracias a la conexión celular, puedes salir sin tu teléfono.1 Apple Watch SE es mucho más que un reloj y está más a tu alcance.</p>
            </>
            
            <CartHorizontal
            identityclass={"activity"} video={video} media={video} secondaryColor={"#359048"}
            bntStrokeColor={"#000"}
            cartTitle={["Tu compañero de", <br />, <span>entrenamiento</span>, <br />, "perfecto."]}
            overlayTitle={["Tu compañero de entrenamiento perfecto."]}
            overlayText={["Los círculos de Actividad te muestran todos tus movimientos del día con tres simples mediciones: Moverse, Ejercicio y Pararse. Además, la app Entrenamiento te permite registrar tus ejercicios de Pilates, Bicicleta, Baile o el que más te guste."]}
            />

            <div className='Home-container-row'>
                <CartVertical identityclass={"water"} media={water} secondaryColor={"#0095D0"}
                bntStrokeColor={"#000"}
                cartTitle={["Al ", <span>agua</span>, <br />,"como si nada."]}
                overlayTitle={["Al agua, como si nada."]}
                overlayText={["El Apple Watch es resistente al agua hasta 50 metros.2 Sumérgete para llevar un registro de tus entrenamientos en la piscina o incluso trazar un mapa de tu ruta en aguas abiertas."]}
                /> 
                <CartVertical
                identityclass={"fitness"} media={fitness} secondaryColor={"#44B200"}
                bntStrokeColor={"#000"}
                cartTitle={[<span>Entrénate</span>, " para",<br />,"desafiar tus límites."]}
                overlayTitle={["Entrénate para desafiar tus límites"]}
                overlayText={["Encuentra decenas de entrenamientos, como carrera, caminata, yoga, bicicleta, intervalos de alta intensidad y pilates. Además, puedes enlazar el Apple Watch SE con equipos de gimnasio compatibles. Te da más posibilidades para que puedas entrenar aún más."]}
                /> 
            </div>

            <CartHorizontal
            identityclass={"health"} media={health} secondaryColor={"#b7283b"}
            bntStrokeColor={"#ffff"}
            cartTitle={["No pierdas ", <br />,"de vista la ", <br /> , <span>salud de tu <br /> corazón</span>,"."]}
            overlayTitle={["No pierdas de vista la salud de tu corazón."]}
            overlayText={["Monitorea tu frecuencia cardiaca en cualquier momento con la app Frecuencia Cardiaca y recibe notificaciones cuando esté inusualmente alta o baja."]}
            />

            <div className="Home-container-row">
                <CartVertical identityclass={"attention"} video={attention}  secondaryColor={"#158D89"}
                bntStrokeColor={"#fffff"}
                cartTitle={["Pleno equilibrio", <br />, "con ", <span>Atención <br /> Plena</span>,"."]}
                overlayTitle={["Pleno equilibrio con Atención Plena."]}
                overlayText={["La app Atención Plena te ayuda a aliviar el estrés de todos los días, concentrarte mejor y prepararte mentalmente para enfrentar nuevos desafíos. Todo a través de una serie de ejercicios de respiración que invitan a relajarse y encontrar el equilibrio reflexionando sobre un tema simple e inspirador."]}
                />
                <CartVertical identityclass={"emergency"} media={emergency}  secondaryColor={"#e45d50"}
                bntStrokeColor={"#000"}
                cartTitle={["Pide ", <span>ayuda</span>, <br />,"cuando más", <br />, "la necesitas."]}
                overlayTitle={["Pide ayuda cuando más la necesitas."]}
                overlayText={["El Apple Watch SE puede detectar si sufriste una caída fuerte y contactar a los servicios de emergencia en caso de que no puedas moverte.3 Y ahora Detección de Caídas funciona cuando estás usando la app Entrenamiento.4 También puedes recibir asistencia inmediata ante una emergencia, incluso en el extranjero, con sólo mantener presionado el botón lateral.5"]}
                />
            </div>
            

        </div>
    )
}

export default Home