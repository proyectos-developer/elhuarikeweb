import React from 'react'

import Carousel from './carousel.js'
import Lema from './lema.js'
import Tradicion from './tradicion.js'
import Especialidad from './especialidad.js'
import LaCarta from './lacarta.js'

class MainHome extends React.Component{
    render (){
        return (
            <div id='main-home'>
                <Carousel/>
                <Lema/>
                <Tradicion/>
                <Especialidad/>
                <LaCarta/>
            </div>
        )
    }
}

export default MainHome