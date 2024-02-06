import React from 'react'
import update from 'immutability-helper'

import axios from 'axios'

class Carousel extends React.Component{
    constructor (props){
        super (props)
        this.state = {
            nombres: '',
            telefono: 'Teléfono',
            correo: '',
            personas: '# personas',
            fecha: '',
            hora: '',
            error: {
                nombres: false,
                telefono: false,
                correo: false,
                fecha: false,
                hora: false,
                error: false
            },
            button: false,
            mensaje: ''
        }
    }

    handlechange = (e) => {
        this.setState (update (this.state, {
            [e.target.id]: {$set: e.target.value}
        }))
    }

    handleselect = (e) => {
        this.setState (update (this.state, {
            hora: {$set: e.target.value}
        }))
    }

    enviarreservacion = (e) => {
        e.preventDefault ()
        if (this.state.nombres === '' || this.state.telefono === 0 || this.state.correo === '' || this.state.personas === 0 || this.state.fecha === '' || this.state.hora === ''){
            this.setState (update (this.state, {
                error: {
                    nombres: {$set: this.state.nombres === '' ? true : false},
                    telefono: {$set: this.state.telefono === 0 ? true : false},
                    correo: {$set: this.state.correo === '' ? true : false},
                    personas: {$set: this.state.personas === 0 ? true : false},
                    fecha: {$set: this.state.fecha === '' ? true : false},
                    hora: {$set: this.state.nombres === '' ? true : false}
                }
            }))
        }else{
            let reservacion = {
                nombres: this.state.nombres,
                email: this.state.correo,
                telefono: this.state.telefono,
                personas: this.state.personas,
                fecha: this.state.fecha,
                hora: this.state.fecha
            }
            console.log (reservacion)
            this.setState (update (this.state, {
                button: {$set: true}
            }))

            axios.post ('/reserva', reservacion)
                .then ((res) => {
                    this.setState (update (this.state, {
                        button: {$set: false},
                        mensaje: {$set: '¡Se envió con exito su reserva!'},

                        nombres: {$set: ''},
                        correo: {$set: ''},
                        telefono: {$set: 0},
                        personas: {$set: 0},
                        fecha: {$set: ''},
                        hora: {$set: ''},
                        error: {
                            nombres: {$set: false},
                            correo: {$set: false},
                            telefono: {$set: false},
                            personas: {$set: false},
                            fecha: {$set: false},
                            hora: {$set: false},
                        }
                    }))
                }).catch ((err) => {
                    this.setState (update (this.state, {
                        button: {$set: false},
                        mensaje: {$set: 'No se pudo enviar su reserva, intentelo nuevamente'}
                    }))
                })
        }
    }

    render (){
        return(
            <div className='position-relative' id='carousel'>
                <div id='carouselprincipal' className='carousel slide' data-bs-ride='carousel'>
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselprincipal" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselprincipal" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselprincipal" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval='1500'
                            style={{backgroundImage: 'url(https://www.elhuarike.com/images/banner/FOTO_PORTADA_WEB_0B.jpg)', 
                                    backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '500px'}}>
                        </div>
                        <div className="carousel-item" data-interval='1500'
                            style={{backgroundImage: 'url(https://www.elhuarike.com/images/banner/FOTO_PORTADA_WEB_1B.jpg)', 
                                    backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '500px'}}>
                        </div>
                        <div className="carousel-item" data-interval='1500'
                            style={{backgroundImage: 'url(https://www.elhuarike.com/images/banner/FOTO_PORTADA_WEB_2B.jpg)', 
                                    backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '500px'}}>
                        </div>
                        <div className="carousel-item" data-interval='1500'
                            style={{backgroundImage: 'url(https://www.elhuarike.com/images/banner/FOTO_PORTADA_WEB_3B.jpg)', 
                                    backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '500px'}}>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselprincipal" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselprincipal" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div id='formulario' className='position-absolute top-72px bottom-72px start-20 w-30 bg-grey rounded-16 opacity-8' style={{height: window.outerWidth > 991 ? '75%' : '80%'}}>
                    <p className='bg-blue-dark text-align-center cl-white fw-blder fs-28 rounded-bottom rounded-16 mb-3'>Realiza tu reserva</p>
                    <input type='text'
                        className='form-control mb-2 cl-black'
                        placeholder='NOMBRE' 
                        id='nombres'
                        value={this.state.nombres}
                        onChange={this.handlechange.bind ()}
                    />
                    <p className='error cl-red fs-12' style={{display: this.state.error.nombres ? 'block' : 'none'}}>Debe ingresar sus nombres</p>
                    <input type='number'
                        className='form-control mb-2 cl-black'
                        placeholder='TELÉFONO' 
                        id='telefono'
                        value={this.state.telefono}
                        onChange={this.handlechange.bind ()}
                    />
                    <p className='error cl-red fs-12' style={{display: this.state.error.telefono ? 'block' : 'none'}}>Debe ingresar su teléfono</p>
                    <input type='email'
                        className='form-control mb-2 cl-black'
                        placeholder='E-MAIL' 
                        id='correo'
                        value={this.state.correo}
                        onChange={this.handlechange.bind ()}
                    />
                    <p className='error cl-red fs-12' style={{display: this.state.error.correo ? 'block' : 'none'}}>Debe ingresar su coreo electrónico</p>
                    <input type='number'
                        className='form-control mb-2 cl-black'
                        placeholder='PERSONAS' 
                        id='personas'
                        value={this.state.personas}
                        onChange={this.handlechange.bind ()}
                    />
                    <p className='error cl-red fs-12' style={{display: this.state.error.personas ? 'block' : 'none'}}>Debe ingresar # de personas</p>
                    <div className='row'>
                        <div className='col-sm-6 mb-2 position-relative'>
                            <input
                                type='date'
                                className='form-control cl-black'
                                placeholder='mm/aa/aaaa'
                                value={this.state.fecha}
                                id='fecha'
                                onChange={this.handlechange.bind(this)} />
                            {
                                window.outerWidth < 992 && this.state.fecha === '' ? (
                                    <p className='cl-black position-absolute' style={{top: '7px', left: '25px'}}>FECHA</p>
                                )   : null 
                            }
                        </div>
                        <div className='col-sm-6 mb-2'>
                            <select
                                className='form-control cl-black'
                                id='hora'
                                onChange={this.handleselect.bind(this)} >
                                <option value='0'>HORA:</option>
                                <option value='12:00'>12:00 m</option>
                                <option value='12:15'>12:15 m</option>
                                <option value='12:30'>12:30 m</option>
                                <option value='12:45'>12:45 m</option>
                                <option value='13:00'>13:00 pm</option>
                                <option value='13:15'>13:15 pm</option>
                                <option value='13:30'>13:30 pm</option>
                                <option value='13:45'>13:45 pm</option>
                                <option value='14:00'>14:00 pm</option>
                                <option value='14:15'>14:15 pm</option>
                                <option value='14:30'>14:30 pm</option>
                                <option value='14:45'>14:45 pm</option>
                                <option value='15:00'>15:00 pm</option>
                                <option value='15:15'>15:15 pm</option>
                                <option value='15:30'>15:30 pm</option>
                                <option value='15:45'>15:45 pm</option>
                                <option value='16:00'>16:00 pm</option>
                                <option value='16:15'>16:15 pm</option>
                                <option value='16:30'>16:30 pm</option>
                                <option value='16:45'>16:45 pm</option>
                                <option value='17:00'>17:00 pm</option>
                            </select>
                        </div>
                    </div>
                    <p className='error' style={{ display: this.state.error.fecha === '' ? 'none' : 'block' }}>{this.state.error.fecha}</p>
                    <div className='d-flex justify-content-center'>
                        <button disabled={this.state.button} className='btn bg-blue-dark rounded-pill cl-white fw-bolder' onClick={this.enviarreservacion.bind (this)}>ENVIAR</button>
                    </div>
                    {
                        this.state.mensaje !== '' ? (
                            <p className='fs-14 cl-red text-align-center'>{this.state.mensaje}</p>
                        ) : null
                    }
                </div>
            </div>
        )
    }
}

export default Carousel