import React from 'react'
import update from 'immutability-helper'
import {browserHistory} from 'react-router'

import axios from 'axios'

class LibroReclamos extends React.Component{
    constructor (props){
        super (props)
        this.state = {
            datos: {
                fecha: '',
                nombres: '',
                direccion: '',
                documento: '',
                telefono: '',
                email: '',
                menor: false,
                producto: false,
                servicio: false,
                monto: '',
                descripcion: '',
                reclamo: false,
                queja: false,
                detalle: '',
                pedido: ''
            },
            error: {
                nombres: '',
                direccion: '',
                documento: '',
                telefono: '',
                email: '',
                detalle: '',
                pedido: ''
            },
            message: ''
        }
    }

    componentDidMount() {
       window.scrollTo(0, 0)
    }

    handleinput = (e) => {
        e.preventDefault()

        let id = e.target.id
        let value = e.target.value

        this.setState (update (this.state, {
            datos:{
                [id]: {$set: value}
            }
        }))
    }

    handlechange = (e) => {
        e.preventDefault ()

        let id = e.target.id

        if (id === 'menor'){
            this.setState(update(this.state, {
                datos: {
                    menor: {$set: !this.state.datos.menor}
                }
            }))
        } else if (id === 'producto') {
            if (!this.state.datos.producto && !this.state.datos.servicio){
                this.setState(update(this.state, {
                    datos: {
                        producto: { $set: true }
                    }
                }))
            } else {
                this.setState(update(this.state, {
                    datos: {
                        producto: { $set: !this.state.datos.producto },
                        servicio: { $set: !this.state.datos.servicio }
                    }
                }))
            }
        } else if (id === 'servicio') {
            if (!this.state.datos.producto && !this.state.datos.servicio) {
                this.setState(update(this.state, {
                    datos: {
                        servicio: { $set: true }
                    }
                }))
            } else {
                this.setState(update(this.state, {
                    datos: {
                        producto: { $set: !this.state.datos.producto },
                        servicio: { $set: !this.state.datos.servicio }
                    }
                }))
            }
        } else if (id === 'reclamo') {
            if (!this.state.datos.reclamo && !this.state.datos.queja) {
                this.setState(update(this.state, {
                    datos: {
                        reclamo: { $set: true }
                    }
                }))
            } else {
                this.setState(update(this.state, {
                    datos: {
                        reclamo: { $set: !this.state.datos.reclamo },
                        queja: { $set: !this.state.datos.queja }
                    }
                }))
            }
        } else if (id === 'queja') {
            if (!this.state.datos.reclamo && !this.state.datos.queja) {
                this.setState(update(this.state, {
                    datos: {
                        queja: { $set: true }
                    }
                }))
            } else {
                this.setState(update(this.state, {
                    datos: {
                        reclamo: { $set: !this.state.datos.reclamo },
                        queja: { $set: !this.state.datos.queja }
                    }
                }))
            }
        }
    }

    enviarreclamoqueja = (e) => {
        e.preventDefault ()


        if (this.state.datos.nombres === '' ||
            this.state.datos.direccion === '' || this.state.datos.documento === '' || 
            this.state.datos.telefono === '' || this.state.datos.email === '' ||
            this.state.datos.detalle === '' || this.state.datos.pedido === ''){
                if (this.state.datos.nombres === ''){
                    this.setState(update (this.state, {
                        error:{
                            nombres: { $set: 'Debe completar este campo obligatorio' },
                            direccion: { $set: '' },
                            documento: { $set: '' },
                            telefono: { $set: '' },
                            email: { $set: '' },
                            detalle: { $set: '' },
                            pedido: { $set: '' }
                        }
                    }))
                } else if (this.state.datos.direccion === '') {
                    this.setState(update(this.state, {
                        error: {
                            direccion: { $set: 'Debe completar este campo obligatorio' },
                            nombres: { $set: '' },
                            documento: { $set: '' },
                            telefono: { $set: '' },
                            email: { $set: '' },
                            detalle: { $set: '' },
                            pedido: { $set: '' }
                        }
                    }))
                } else if (this.state.datos.documento === '') {
                    this.setState(update(this.state, {
                        error: {
                            documento: { $set: 'Debe completar este campo obligatorio' },
                            nombres: { $set: '' },
                            direccion: { $set: '' },
                            telefono: { $set: '' },
                            email: { $set: '' },
                            detalle: { $set: '' },
                            pedido: { $set: '' }
                        }
                    }))
                } else if (this.state.datos.telefono === '') {
                    this.setState(update(this.state, {
                        error: {
                            telefono: { $set: 'Debe completar este campo obligatorio' },
                            nombres: { $set: '' },
                            direccion: { $set: '' },
                            documento: { $set: '' },
                            email: { $set: '' },
                            detalle: { $set: '' },
                            pedido: { $set: '' }
                        }
                    }))
                } else if (this.state.datos.email === '') {
                    this.setState(update(this.state, {
                        error: {
                            email: { $set: 'Debe completar este campo obligatorio' },
                            nombres: { $set: '' },
                            direccion: { $set: '' },
                            documento: { $set: '' },
                            telefono: { $set: '' },
                            detalle: { $set: '' },
                            pedido: { $set: '' }
                        }
                    }))
                } else if (this.state.datos.detalle === '') {
                    this.setState(update(this.state, {
                        error: {
                            detalle: { $set: 'Debe completar este campo obligatorio' },
                            nombres: { $set: '' },
                            direccion: { $set: '' },
                            documento: { $set: '' },
                            telefono: { $set: '' },
                            email: { $set: '' },
                            pedido: { $set: '' }
                        }
                    }))
                } else if (this.state.datos.pedido === '') {
                    this.setState(update(this.state, {
                        error: {
                            pedido: { $set: 'Debe completar este campo obligatorio' },
                            nombres: { $set: '' },
                            direccion: { $set: '' },
                            documento: { $set: '' },
                            telefono: { $set: '' },
                            email: { $set: '' },
                            detalle: { $set: '' }
                        }
                    }))
                }
            window.scrollTo(0, 0)
        }else{
            axios.post('/reclamo', this.state.datos)
                .then((res) => {
                    this.setState(update(this.state, {
                        message: { $set: 'Se envío su reclamo!' },
                        datos: {
                            fecha: {$set: ''},
                            nombres: {$set: ''},
                            direccion: {$set: ''},
                            documento: {$set: ''},
                            telefono: {$set: ''},
                            email: {$set: ''},
                            menor: {$set: false},
                            producto: {$set: false},
                            servicio: {$set: false},
                            monto: {$set: ''},
                            descripcion: {$set: ''},
                            reclamo: {$set: false},
                            queja: {$set: false},
                            detalle: {$set: ''},
                            pedido: {$set: ''}
                        }
                    }))
                    browserHistory.push ('/')
                }).catch((err) => {
                    this.setState(update(this.state, {
                        error: { $set: 'No se pudo enviar su reclamo, intentelo nuevamente' }
                    }))
                })
            }
    }

    render (){
        return (
            <div id='reclamos' className='bg-white pb-5 pt-5'>
                <div className='container'>
                    <form style={{paddingTop: '89px'}}>
                        <p className='text-align-center fs-28 fw-bolder cl-blue-dark'>Hoja de Reclamación</p>
                        <div className='form-group mb-2'>
                            <label className='as-center me-2 fs-14 cl-blue-dark' htmlFor="fecha">FECHA:</label>
                            <input
                                type='date'
                                className='form-control'
                                value={this.state.datos.fecha}
                                id='fecha'
                                aria-describedby="dateHelp"
                                onChange={this.handleinput.bind(this)} />
                        </div>
                        <div className='mt-2'>
                            <p className='fw-bold fs-20 cl-blue-dark mb-2'>1. IDENTIFICACIÓN DEL CONSUMIDOR RECLAMANTE</p>
                            <div className='row'>
                                <div className='col-sm-12'>
                                    <div className='form-group mb-2'>
                                        <label className='as-center me-2 fw-bold fs-14 cl-blue-dark' htmlFor="nombres">NOMBRE COMPLETO *</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            value={this.state.datos.nombres}
                                            id='nombres'
                                            aria-describedby="textHelp"
                                            onChange={this.handleinput.bind(this)} />
                                        <p className='error' style={{ display: this.state.error.nombres === '' ? 'none': 'block'}}>{this.state.error.nombres}</p>
                                    </div>
                                </div>
                                <div className='col-sm-12'>
                                    <div className='form-group mb-2'>
                                        <label className='as-center me-2 fw-bold fs-14 cl-blue-dark' htmlFor="direccion">DIRECCION *</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            value={this.state.datos.direccion}
                                            id='direccion'
                                            aria-describedby="textHelp"
                                            onChange={this.handleinput.bind(this)} />
                                        <p className='error' style={{ display: this.state.error.direccion === '' ? 'none' : 'block' }}>{this.state.error.direccion}</p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-12 com-md-12 col-lg-4 col-xl-4'>
                                    <div className='form-group mb-2'>
                                        <label className='as-center me-2 fw-bold fs-14 cl-blue-dark' htmlFor="documento">DNI / C.E *</label>
                                        <input
                                            type='number'
                                            className='form-control'
                                            value={this.state.datos.documento}
                                            id='documento'
                                            aria-describedby="numberHelp"
                                            onChange={this.handleinput.bind(this)} />
                                        <p className='error' style={{ display: this.state.error.documento === '' ? 'none' : 'block' }}>{this.state.error.documento}</p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-12 com-md-12 col-lg-4 col-xl-4'>
                                    <div className='form-group mb-2'>
                                        <label className='as-center me-2 fw-bold fs-14 cl-blue-dark' htmlFor="telefono">TELÉFONO *</label>
                                        <input
                                            type='number'
                                            className='form-control'
                                            value={this.state.datos.telefono}
                                            id='telefono'
                                            aria-describedby="numberHelp"
                                            onChange={this.handleinput.bind(this)} />
                                        <p className='error' style={{ display: this.state.error.telefono === '' ? 'none' : 'block' }}>{this.state.error.telefono}</p>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-12 com-md-12 col-lg-4 col-xl-4'>
                                    <div className='form-group mb-2'>
                                        <label className='as-center me-2 fw-bold fs-14 cl-blue-dark' htmlFor="email">CORREO ELECTRÓNICO *</label>
                                        <input
                                            type='email'
                                            className='form-control'
                                            value={this.state.datos.email}
                                            id='email'
                                            aria-describedby="emailHelp"
                                            onChange={this.handleinput.bind(this)} />
                                        <p className='error' style={{ display: this.state.error.email === '' ? 'none' : 'block' }}>{this.state.error.email}</p>
                                    </div>
                                </div>
                                <div className='col-sm-12'>
                                    <div className='form-group mb-2'>
                                        <label className='as-center me-2 fw-bold fs-14 cl-blue-dark' htmlFor="menor">MENOR DE EDAD</label>
                                        <div className='d-flex'>
                                            <img id='menor' src={this.state.datos.menor ? 'https://www.elhuarike.com/images/reclamos/check_box.png' : 'https://www.elhuarike.com/images/reclamos/box.png'} alt='menor' 
                                                onClick={this.handlechange.bind(this)} className='w-24px h-24px me-2'/>
                                            <p className='fs-16 as-center'>Si</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='consumidor'>
                            <p className='fw-bold fs-20 cl-blue-dark mb-2'>2. IDENTITIFICACION DEL BIEN CONTRATADO</p>
                            <div className='row'>
                                <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 as-center'>
                                    <div className='form-group mb-2'>
                                        <div className='row'>
                                            <div className='col-sm-6 as-center'>
                                                <div className='d-flex'>
                                                    <img id='producto' src={this.state.datos.producto ? 'https://www.elhuarike.com/images/reclamos/radio_button.png' : 'https://www.elhuarike.com/images/reclamos/radio.png'} alt='menor'
                                                        onClick={this.handlechange.bind(this)} className='w-24px h-24px me-2' />
                                                    <p className='fs-16 as-center mb-0'>PRODUCTO</p>
                                                </div>
                                            </div>
                                            <div className='col-sm-6 as-center'>
                                                <div className='d-flex'>
                                                    <img id='servicio' src={this.state.datos.servicio ? 'https://www.elhuarike.com/images/reclamos/radio_button.png' : 'https://www.elhuarike.com/images/reclamos/radio.png'} alt='menor'
                                                        onClick={this.handlechange.bind(this)} className='w-24px h-24px me-2' />
                                                    <p className='fs-16 as-center mb-0'>SERVICIO</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4'>
                                    <div className='form-group mb-2'>
                                        <label className='as-center me-2 fw-bold fs-14 cl-blue-dark' htmlFor="monto">MONTO RECLAMADO:</label>
                                        <input
                                            type='number'
                                            className='form-control'
                                            value={this.state.datos.monto}
                                            id='monto'
                                            aria-describedby="numberHelp"
                                            onChange={this.handleinput.bind(this)} />
                                    </div>
                                </div>
                                <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4'>
                                    <div className='form-group mb-2'>
                                        <label className='as-center me-2 fw-bold fs-14 cl-blue-dark' htmlFor="descripcion">DESCRIPCIÓN:</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            value={this.state.datos.descripcion}
                                            id='descripcion'
                                            aria-describedby="textHelp"
                                            onChange={this.handleinput.bind(this)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='consumidor'>
                            <p className='fw-bold fs-20 cl-blue-dark mb-2'>3. DETALLE DE LA RECLAMACIÓN Y PEDIDO DEL CONSUMIDOR</p>
                            <div className='row'>
                                <div className='col-sm-6 mb-2'>
                                    <div className='d-flex'>
                                        <img id='reclamo' src={this.state.datos.reclamo ? 'https://www.elhuarike.com/images/reclamos/radio_button.png' : 'https://www.elhuarike.com/images/reclamos/radio.png'} alt='menor'
                                            onClick={this.handlechange.bind(this)} className='w-24px h-24px me-2'/>
                                        <p className='as-center fs-16 mb-0'>RECLAMO</p>
                                    </div>
                                </div>
                                <div className='col-sm-6 mb-2'>
                                    <div className='d-flex'>
                                        <img id='queja' src={this.state.datos.queja ? 'https://www.elhuarike.com/images/reclamos/radio_button.png' : 'https://www.elhuarike.com/images/reclamos/radio.png'} alt='menor'
                                            onClick={this.handlechange.bind(this)} className='w-24px h-24px me-2'/>
                                        <p className='as-center fs-16 mb-0'>QUEJA</p>
                                    </div>
                                </div>
                                <div className='col-sm-12'>
                                    <div className='form-group mb-2'>
                                        <label className='as-center me-2 fw-bold fs-14 cl-blue-dark' htmlFor="detalle">DETALLE *</label>
                                        <textarea
                                            type='text'
                                            className='form-control'
                                            value={this.state.datos.detalle}
                                            id='detalle'
                                            rows={6}
                                            aria-describedby="textHelp"
                                            onChange={this.handleinput.bind(this)} />
                                        <p className='error' style={{ display: this.state.error.detalle === '' ? 'none' : 'block' }}>{this.state.error.detalle}</p>
                                    </div>
                                </div>
                                <div className='col-sm-12'>
                                    <div className='form-group mb-2'>
                                        <label className='as-center me-2 fw-bold fs-14 cl-blue-dark' htmlFor="pedido">PEDIDO *</label>
                                        <textarea
                                            type='text'
                                            className='form-control'
                                            value={this.state.datos.pedido}
                                            id='pedido'
                                            rows={6}
                                            aria-describedby="textHelp"
                                            onChange={this.handleinput.bind(this)} />
                                        <p className='error' style={{ display: this.state.error.pedido === '' ? 'none' : 'block' }}>{this.state.error.pedido}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='datos-consumidor'>
                                <p className='fw-bold fs-20 cl-blue-dark mb-2'>4. OBSERVACIONES Y ACCEIONES ADOPTADAS POR EL PROVEEDOR</p>
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <div className='form-group mb-2'>
                                            <label className='as-center me-2 fw-bold fs-14 cl-blue-dark' htmlFor="comunicacion">FECHA DE COMUNICACIÓN DE LA RESPUESTA: (NO LLENAR)</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                value={this.state.datos.comunicacion}
                                                id='comunicacion'
                                                editable={false}
                                                aria-describedby="textHelp"
                                                onChange={this.handleinput.bind(this)} />
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='form-group mb-2'>
                                            <label className='as-center me-2 fw-bold fs-14 cl-blue-dark' htmlFor="respuesta">RESPUESTA DEL PROVEEDOR: (NO LLENAR)</label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                value={this.state.datos.respuesta}
                                                id='respuesta'
                                                editable={false}
                                                aria-describedby="textHelp"
                                                onChange={this.handleinput.bind(this)} />
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='form-group mb-2'>
                                            <p>RECLAMO: DISCONFORMIDAD RECLACIONADA A LOS PRODUCTOS O SERVICIOS</p>
                                        </div>
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='form-group mb-2'>
                                            <p>QUEJA: DISCONFORMIDAD NO RELACIONADA A LOS PRODUCTOS O SERVICIOS, O, MALESTAR O DESCONTENTO RESPECTO A LA ATENCIÓN AL PÚBLICO</p>
                                        </div>
                                    </div>
                                    <div className='col-sm-6'/>
                                    <div className='col-sm-6'>
                                        <div className='form-group button'>
                                            <button className='btn' type='button' onClick={this.enviarreclamoqueja.bind(this)}>ENVIAR RECLAMO/QUEJA</button>
                                        </div>
                                    </div>
                                    <div className='col-sm-12'>
                                        <div className='form-group nota'>
                                            <p>* La formulación del reclamo no impide acudir a otras vias de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI.</p>
                                            <p>* El proveedor deberá dar respuesta al reclamo en un plazo no mayor a (30) días calendario, pudiendo ampliar el plazo hasta por treinta (30) días más, previa comunicación al consumidor.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LibroReclamos