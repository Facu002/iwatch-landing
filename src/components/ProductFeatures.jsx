import React from 'react'
import wallet from '../media/discover_icon_wallet__bbrrkxpecgoi_medium.png'
import discover from '../media/discover_icon_find_my__cal6n435m69y_medium.png'
import sound from '../media/discover_icon_noise__bl7edofx08j6_medium.png'
import cycle from '../media/discover_icon_cycle_tracking__cd5wg0ahsvua_medium.png'
import home from '../media/discover_icon_home__bluqbodk8ifm_medium.png'
import camera from '../media/discover_icon_camera_remote__c2q3whblh7sm_medium.png'
import map from '../media/discover_icon_maps__d1bhjzj2rqmq_medium.png'

function ProductFeatures() {
    return (
        <div className="product-features-container">
            <h2 className='product-features-container__title'>Aún más por descubrir.</h2>
            <div className='features-container'>     
                <div className="features-container__item">
                    <img src={wallet} alt="" />
                    <p> <span>Wallet. </span> 
                        Guarda tus pases de abordar, tarjetas de recompensa o boletos de cine para tenerlos siempre a mano.
                    </p>
                </div>
                <div className="features-container__item">
                    <img src={discover} alt="" />
                    <p> <span>Encuentra dispositivos. Encuentra personas. Encuentra lo que sea. </span> 
                    Localiza tus dispositivos o recibe un alerta si olvidaste tu iPhone en algún lugar, ve la ubicación de tus seres queridos y rastrea un AirTag. Todo desde tu Apple Watch.
                    </p>
                </div>
                <div className="features-container__item">
                    <img src={sound} alt="" />
                    <p> <span>Ruido. </span> 
                    Esta app te avisa cuando hay niveles altos de ruido a tu alrededor que podrían afectar tu audición.
                    </p>
                </div>
                <div className="features-container__item">
                    <img src={cycle} alt="" />
                    <p> <span>Control de Ciclos. </span> 
                    Lleva un registro de tu periodo, ingresa síntomas como dolores menstruales y obtén predicciones para tu próximo periodo fértil.7
                    </p>
                </div>
                <div className="features-container__item">
                    <img src={home} alt="" />
                    <p> <span>Casa. </span> 
                    Controla las luces, el termostato y la puerta del garaje. O accede a las cámaras de seguridad para ver quién está en la puerta de tu casa.
                    </p>
                </div>
                <div className="features-container__item">
                    <img src={camera} alt="" />
                    <p> <span>Control Remoto de Cámara. </span> 
                    Usa el Apple Watch como visor de la cámara de tu iPhone para previsualizar la escena y configurar el temporizador o directamente tomar la foto.
                    </p>
                </div>
                <div className="features-container__item">
                    <img src={map} alt="" />
                    <p> <span>Mapas. </span> 
                    Sigue las indicaciones directamente desde tu muñeca mientras conduces. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductFeatures