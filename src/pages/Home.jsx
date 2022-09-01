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
import sleep from '../media/sleep__gdehfkynp722_medium_2x.jpg'
import call from '../media/bg1.mp4'
import apps from '../media/apps__enhifa2rkwia_medium_2x.jpg'
import music from '../media/music__bexc5op9pktu_medium_2x.jpg'
import size from '../media/display__fc3v2ldbroi2_medium_2x.jpg'
import wallpapers from '../media/face__c1ozrzp4a14y_medium_2x.jpg'
import finish from '../media/finishes__e0d0gjyxbnu6_medium_2x.jpg'
import vr from '../media/ar_tile_se__dvgrg7uqy1si_medium_2x.jpg'

import ProductFeatures from '../components/ProductFeatures'
import Enviroment from '../components/Enviroment'
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

            <div className="Home-container-row">
                <CartVertical identityclass={"sleep"} media={sleep}  secondaryColor={"#158D89"}
                bntStrokeColor={"#fffff"}
                cartTitle={["Está pendiente de ti.", <br />,"Día y " ,<span>noche</span>,"."]}
                overlayTitle={["Está pendiente de ti. Día y noche."]}
                overlayText={["La app Sueño trabaja con el iPhone para monitorear tu descanso y ayudarte a crear una rutina para ir a dormir. Así podrás descansar el tiempo que necesitas. Y además podrás revisar tus tendencias para ver si estás cumpliendo tus metas."]}
                />
                <CartVertical identityclass={"call"} video={call}  secondaryColor={"#158D89"}
                bntStrokeColor={"#fffff"}
                cartTitle={["La libertad te", <br />, "está ", <span>llamando</span>,"."]}
                overlayTitle={["Pleno equilibrio con Atención Plena."]}
                overlayText={["La app Atención Plena te ayuda a aliviar el estrés de todos los días, concentrarte mejor y prepararte mentalmente para enfrentar nuevos desafíos. Todo a través de una serie de ejercicios de respiración que invitan a relajarse y encontrar el equilibrio reflexionando sobre un tema simple e inspirador."]}
                />
                
            </div>
            
            <div className="Home-container-row">
                <CartVertical identityclass={"apps"} media={apps}  secondaryColor={"#0255fb"}
                bntStrokeColor={"#000"}
                cartTitle={["Miles de ", <span>apps </span> , "a un", <br />,"toque de distancia."]}
                overlayTitle={["Miles de apps a un toque de distancia."]}
                overlayText={["Descarga apps del App Store para hacer mucho más con el Apple Watch. Hay una app para prácticamente todo lo que necesites, desde mejorar tu saque en la práctica de tenis hasta seguir de cerca la previsión de olas para surfear, o simplemente tomar el metro.  Y muchas de tus apps favoritas en el iPhone también están disponibles para el Apple Watch, potenciando aún más lo que puedes hacer desde tu muñeca."]}
                />
                <CartVertical identityclass={"music"} media={music}  secondaryColor={"#fa2d48"}
                bntStrokeColor={"#000"}
                cartTitle={[<span>Música </span>,"y ",<span>podcasts </span>,<br />, "para mantener activos tus oídos."]}
                overlayTitle={["Pide ayuda cuando más la necesitas."]}
                overlayText={["El Apple Watch SE puede detectar si sufriste una caída fuerte y contactar a los servicios de emergencia en caso de que no puedas moverte.3 Y ahora Detección de Caídas funciona cuando estás usando la app Entrenamiento.4 También puedes recibir asistencia inmediata ante una emergencia, incluso en el extranjero, con sólo mantener presionado el botón lateral.5"]}
                />
            </div>

            <CartHorizontal
            identityclass={"size"} media={size} secondaryColor={"#fb6638"}
            bntStrokeColor={"#000"}
            cartTitle={["Pantalla más de un ",<br /> , <span>30%</span>,<br /> , "más grande que la del Series 3",
            <br />,<br /> ,"Hasta ",<br />, <span>x2</span>, <br />, "más rápido que el Series 3"  ]}
            overlayTitle={["Pantalla más de un 30% más grande que la del Series 3. Hasta 2 veces más rápido que el Series 3."]}
            overlayText={["El Apple Watch SE tiene una pantalla Retina más de un 30% más grande que la del Series 3, y el chip S5 SiP con procesador de doble núcleo de 64 bits es hasta 2 veces más rápido que el chip S3 del Apple Watch Series 3. Juntas, estas mejoras te ayudarán a hacer mucho más."]}
            />

            <div className="Home-container-row">
                <CartVertical identityclass={"wallpapers"} media={wallpapers}  secondaryColor={"#C67804"}
                bntStrokeColor={"#000"}
                cartTitle={[<span>Caratulas </span>,"tan", <br />, "increíbles que te ", <br />, "costará escoger una."]}
                overlayTitle={["Carátulas tan increíbles que te costará escoger una."]}
                overlayText={["Hay decenas de carátulas diseñadas por Apple para elegir, pero también puedes crear tu propia carátula con complicaciones personalizadas según tus intereses. Si eres surfista, por ejemplo, puedes seguir de cerca la previsión de olas, la temperatura del agua y la velocidad del viento con un vistazo. Incluso puedes compartir carátulas con tus seres queridos por correo electrónico o mensaje de texto."]}
                />
                <CartVertical identityclass={"straps"} media={call}  secondaryColor={"#D61739"}
                bntStrokeColor={"#000"}
                cartTitle={["Un desfile", <br />, "de ", <span>correas</span>,"."]}
                overlayTitle={["Un desfile de correas."]}
                overlayText={["Las correas del Apple Watch fueron diseñadas para que puedas intercambiarlas fácilmente. Con una gran variedad de estilos y colores a tu disposición, puedes cambiar tu look en cuestión de segundos."]}
                />
            </div>

            <CartHorizontal
            identityclass={"virtualReality"} media={vr} secondaryColor={"#AD1F1F"}
            bntStrokeColor={"#000"}
            cartTitle={[ <span>Mira el Apple Watch SE <br /> con realidad aumentada. </span>,<br /> , "Abre esta página con Safari",<br /> , "en tu iPhone o iPad."]}
            overlayTitle={["Dos tamaños. Tres acabados. Infinitas razones para quererlo."]}
            overlayText={["El Apple Watch SE viene con cajas de 44 mm o 40 mm. Escoge entre color plata, color oro o gris espacial. Todos en aluminio 100% reciclado. "]}
            />

            <ProductFeatures />

            <Enviroment />

        </div>
    )
}

export default Home