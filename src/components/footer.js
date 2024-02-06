import React from 'react' 
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ image }) => <img src='https://www.elhuarike.com/images/footer/location36x36.png' alt='ubicacion' />

class Footer extends React.Component{
    render (){
        return (
            <div id='footer' className='bg-white pb-5 pt-5'>
                <div className='container'>
                    <div className='row bg-grey-dark'>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 pt-2 pb-2'>
                            <p className='fs-28 text-align-center mb-2'>Contáctanos</p>
                            <div className='d-flex mb-2'>
                                <img src='https://www.elhuarike.com/images/footer/locationv2.png' alt='ubicacion' className='w-24px h-24px as-center'/>
                                <p className='ms-2 mb-0 as-center fs-14'>Avenida San Borja Norte 401, Lima, Perú</p>
                            </div>
                            <div className='d-flex mb-2'>
                                <img src='https://www.elhuarike.com/images/footer/whatsappblue.png' alt='ubicacion' className='w-24px h-24px as-center'/>
                                <p className='ms-2 mb-0 as-center fs-14'>(+51) 985 117488</p>
                            </div>
                            <div className='d-flex mb-2'>
                                <img src='https://www.elhuarike.com/images/footer/phonev2.png' alt='ubicacion' className='w-24px h-24px as-center'/>
                                <p className='ms-2 mb-0 as-center fs-14'>(01) 225-1616</p>
                            </div>
                            <div className='d-flex mb-2'>
                                <img src='https://www.elhuarike.com/images/footer/mailv2.png' alt='ubicacion' className='w-24px h-24px as-center'/>
                                <p className='ms-2 mb-0 as-center fs-14'>reservas@elhuarike.com</p>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 pt-2 pb-2'>
                            <p className='fs-28 text-align-center mb-2'>Horarios</p>
                            <p className='mb-1 as-center fs-16 fw-bold'>Desayunos</p>
                            <p className='as-center fs-14'>Martes a Domingo: 8 am a 12 m</p>
                            <p className='mb-1 as-center fs-16 fw-bold'>Almuerzos</p>
                            <p className='as-center fs-14'>Lunes a Domingo: 12 m a 5 pm</p>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 pt-2 pb-2 as-center'>
                            <div style={{height: '236px'}}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: 'AIzaSyB9zkliAA0QOZAtquVeS3y5vc-wl-bbEKk' }}
                                    defaultCenter={this.props.center}
                                    defaultZoom={this.props.zoom}>

                                    <AnyReactComponent
                                        lat={this.props.center.lat}
                                        lng={this.props.center.lng}
                                        image='https://www.elhuarike.com/images/footer/location36x36.png' />

                                </GoogleMapReact>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 pt-2 pb-2'>
                            <p className='fs-28 text-align-center mb-2'>Instagram</p>
                            <div className='row'>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6'>
                                    <img src='https://www.elhuarike.com/images/instagram/instagram-01.png' className='w-100 mb-2'/>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6'>
                                    <img src='https://www.elhuarike.com/images/instagram/instagram-02.png' className='w-100 mb-2'/>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6'>
                                    <img src='https://www.elhuarike.com/images/instagram/instagram-03.png' className='w-100'/>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6'>
                                    <img src='https://www.elhuarike.com/images/instagram/instagram-04.png' className='w-100'/>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

Footer.defaultProps = {
    center: {
        lat: -12.0973641,
        lng: -77.0103697
    },
    zoom: 14
}

export default Footer