import React from 'react'
import { RViewer, RViewerTrigger } from 'react-viewerjs'

class Especialidad extends React.Component{
    render (){
        let imagen1 = [
            "https://www.elhuarike.com/images/especialidades/01CEBICHE.jpg"
        ]
        let imagen2 = [
            "https://www.elhuarike.com/images/especialidades/02ARROZ_CON_MARISCOS.jpg"
        ]
        let imagen3 = [
            "https://www.elhuarike.com/images/especialidades/03CAUSA_CROCANTE.jpg"
        ]
        let imagen4 = [
            "https://www.elhuarike.com/images/especialidades/04EL_MARINERO.jpg"
        ]
        let imagen5 = [
            "https://www.elhuarike.com/images/especialidades/05TACU_TACU.jpg"
        ]

        return (
            <div id='especialidad' className='bg-white pt-3 pb-3'>
                <div className='container'>
                    <p className='cl-black fs-28 text-align-center mb-1'>Nuestras especialidades</p>
                    <div className='d-flex justify-content-center'>
                        <img src='https://www.elhuarike.com/images/especialidades/LINEA_DOBLE_AZUL.png' style={{width: '86px', height: '20px'}}/>
                    </div>
                    <p className='cl-black fs-16 text-align-center mb-0'>Ven y prueba los mejores platos marinos de nuestra carta con una sazón que sólo en El Huarike podrás encontrar.</p>
                    <br/>
                    <p className='cl-black fs-16 text-align-center mb-2'>Te invitamos a descubrir nuestras especialidades</p>
                    {
                        window.outerWidth >= 992 ? (
                            <div className="carousel-inner">
                                <div className="carousel-item active" interval="1500">
                                    <div className='row'>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen1}>
                                                    {
                                                        imagen1.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Cebiche' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px', paddingTop: "20px"}}>Cebiche</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Delicioso y fresco pescado preparado de la forma tradicional con el toque de El Huarike</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen2}>
                                                    {
                                                        imagen2.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Arroz con mariscos' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px', paddingTop: window.outerWidth >= "1360px" ? "0px" : "20px"}}>Arroz con mariscos</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Tradicional plato marino bañado en nuestra salsa secreta.</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen3}>
                                                    {
                                                        imagen3.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Causa croante' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px', paddingTop: window.outerWidth >= "1360px" ? "0px" : "20px"}}>Causa crocante</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Rellena con una deliciosa pulpa de cangrejo, palta y mermelada de ají; acompañada de una salsa de maracuyá.</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen4}>
                                                    {
                                                        imagen4.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='El marinero' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  paddingTop: "20px" }}>El marinero</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Piqueo de cebiche mixto, causa Huarike, tiradito de pescado en aji amarillo y pulpo al olivo.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" interval="1500">
                                    <div className='row'>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen2}>
                                                    {
                                                        imagen2.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Arroz con mariscos' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px', paddingTop: window.outerWidth >= "1360px" ? "0px" : "20px"}}>Arroz con mariscos</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Tradicional plato marino bañado en nuestra salsa secreta.</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen3}>
                                                    {
                                                        imagen3.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Causa croante' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px', paddingTop: window.outerWidth >= "1360px" ? "0px" : "20px"}}>Causa crocante</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Rellena con una deliciosa pulpa de cangrejo, palta y mermelada de ají; acompañada de una salsa de maracuyá.</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen4}>
                                                    {
                                                        imagen4.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='El marinero' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  paddingTop: "20px" }}>El marinero</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Piqueo de cebiche mixto, causa Huarike, tiradito de pescado en aji amarillo y pulpo al olivo.</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen5}>
                                                    {
                                                        imagen5.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Tacu tacu' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  paddingTop: "20px" }}>Tacu tacu</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Filete de pescado con tacu tacu y una salsa  especial al estilo El Huarike.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" interval="1500">
                                    <div className='row'>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen3}>
                                                    {
                                                        imagen3.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Causa croante' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px', paddingTop: window.outerWidth >= "1360px" ? "0px" : "20px"}}>Causa crocante</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Rellena con una deliciosa pulpa de cangrejo, palta y mermelada de ají; acompañada de una salsa de maracuyá.</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen4}>
                                                    {
                                                        imagen4.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='El marinero' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  paddingTop: "20px" }}>El marinero</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Piqueo de cebiche mixto, causa Huarike, tiradito de pescado en aji amarillo y pulpo al olivo.</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen5}>
                                                    {
                                                        imagen5.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Tacu tacu' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  paddingTop: "20px" }}>Tacu tacu</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Filete de pescado con tacu tacu y una salsa  especial al estilo El Huarike.</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen1}>
                                                    {
                                                        imagen1.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Cebiche' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  paddingTop: "20px" }}>Cebiche</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Delicioso y fresco pescado preparado de la forma tradicional con el toque de El Huarike</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" interval="1500">
                                    <div className='row'>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen4}>
                                                    {
                                                        imagen4.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='El marinero' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  paddingTop: "20px" }}>El marinero</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Piqueo de cebiche mixto, causa Huarike, tiradito de pescado en aji amarillo y pulpo al olivo.</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen5}>
                                                    {
                                                        imagen5.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Tacu tacu' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  paddingTop: "20px" }}>Tacu tacu</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Filete de pescado con tacu tacu y una salsa  especial al estilo El Huarike.</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen1}>
                                                    {
                                                        imagen1.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Cebiche' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  paddingTop: "20px" }}>Cebiche</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Delicioso y fresco pescado preparado de la forma tradicional con el toque de El Huarike</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen2}>
                                                    {
                                                        imagen2.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Arroz con mariscos' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px', paddingTop: window.outerWidth >= "1360px" ? "0px" : "20px"}}>Arroz con mariscos</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Tradicional plato marino bañado en nuestra salsa secreta.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" interval="1500">
                                    <div className='row'>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen5}>
                                                    {
                                                        imagen5.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Tacu tacu' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  paddingTop: "20px" }}>Tacu tacu</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Filete de pescado con tacu tacu y una salsa  especial al estilo El Huarike.</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen1}>
                                                    {
                                                        imagen1.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Cebiche' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  paddingTop: "20px" }}>Cebiche</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Delicioso y fresco pescado preparado de la forma tradicional con el toque de El Huarike</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen2}>
                                                    {
                                                        imagen2.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Arroz con mariscos' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p>className='fs-28 text-align-center' Arroz co height: '104px', n mariscos</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Tradicional plato marino bañado en nuestra salsa secreta.</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-3'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen3}>
                                                    {
                                                        imagen3.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Causa croante' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p>className='fs-28 text-align-center' Causa cr height: '104px', ocante</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Rellena con una deliciosa pulpa de cangrejo, palta y mermelada de ají; acompañada de una salsa de maracuyá.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : window.outerWidth >= 576 ? (
                            <div className="carousel-inner">
                                <div className="carousel-item active" interval="1500">
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen1}>
                                                    {
                                                        imagen1.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Cebiche' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px', height: "30px"}}>Cebiche</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Delicioso y fresco pescado preparado de la forma tradicional con el toque de El Huarike</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen2}>
                                                    {
                                                        imagen2.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Arroz con mariscos' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  height: "30px" }}>Arroz con mariscos</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Tradicional plato marino bañado en nuestra salsa secreta.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" interval="1500">
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen2}>
                                                    {
                                                        imagen2.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Arroz con mariscos' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  height: "30px" }}>Arroz con mariscos</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Tradicional plato marino bañado en nuestra salsa secreta.</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen3}>
                                                    {
                                                        imagen3.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Causa crocante' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  height: "30px" }}>Causa crocante</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Rellena con una deliciosa pulpa de cangrejo, palta y mermelada de ají; acompañada de una salsa de maracuyá.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" interval="1500">
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen3}>
                                                    {
                                                        imagen3.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Causa crocante' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  height: "30px" }}>Causa crocante</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Rellena con una deliciosa pulpa de cangrejo, palta y mermelada de ají; acompañada de una salsa de maracuyá.</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen4}>
                                                    {
                                                        imagen4.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='El marinero' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  height: "30px" }}>El marinero</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Piqueo de cebiche mixto, causa Huarike, tiradito de pescado en aji amarillo y pulpo al olivo.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" interval="1500">
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen4}>
                                                    {
                                                        imagen4.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='El marinero' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  height: "30px" }}>El marinero</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Piqueo de cebiche mixto, causa Huarike, tiradito de pescado en aji amarillo y pulpo al olivo.</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen5}>
                                                    {
                                                        imagen5.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Tacu tacu' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  height: "30px" }}>Tacu tacu</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Filete de pescado con tacu tacu y una salsa  especial al estilo El Huarike.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" interval="1500">
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen5}>
                                                    {
                                                        imagen5.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Tacu tacu' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  height: "30px" }}>Tacu tacu</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Filete de pescado con tacu tacu y una salsa  especial al estilo El Huarike.</p>
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen1}>
                                                    {
                                                        imagen1.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Cebiche' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  height: "30px" }}>Cebiche</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Delicioso y fresco pescado preparado de la forma tradicional con el toque de El Huarike</p>
                                            </div>                                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="carousel-inner">
                                <div className="carousel-item active" interval="1500">
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen1}>
                                                    {
                                                        imagen1.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Cebiche' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  height: "30px" }}>Cebiche</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Delicioso y fresco pescado preparado de la forma tradicional con el toque de El Huarike</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" interval="1500">
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen2}>
                                                    {
                                                        imagen2.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Arroz con mariscos' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  height: "30px" }}>Arroz con mariscos</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Tradicional plato marino bañado en nuestra salsa secreta.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" interval="1500">
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen3}>
                                                    {
                                                        imagen3.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Causa crocante' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  height: "30px" }}>Causa crocante</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Rellena con una deliciosa pulpa de cangrejo, palta y mermelada de ají; acompañada de una salsa de maracuyá.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" interval="1500">
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen4}>
                                                    {
                                                        imagen4.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='El marinero' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  height: "30px" }}>El marinero</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Piqueo de cebiche mixto, causa Huarike, tiradito de pescado en aji amarillo y pulpo al olivo.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" interval="1500">
                                    <div className='row'>
                                        <div className='col-sm-6'>
                                            <div className='h-100 bg-grey-dark p-2'>
                                                <RViewer imageUrls={imagen5}>
                                                    {
                                                        imagen5.map((imagen, index) => {
                                                            return (
                                                                <RViewerTrigger index={index}>
                                                                    <img src={imagen} className='w-100 rounded-4' alt='Tacu tacu' />
                                                                </RViewerTrigger>
                                                            )
                                                        })
                                                    }
                                                </RViewer>
                                                <p className='fs-28 text-align-center' style={{ height: '104px',  height: "30px" }}>Tacu tacu</p>
                                                <p className='fs-16' style={{textAlign: 'justify'}}>Filete de pescado con tacu tacu y una salsa  especial al estilo El Huarike.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }        
                </div>
            </div>
        )
    }
}

export default Especialidad