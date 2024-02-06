import React from 'react'

class BarraInfo extends React.Component{
    render (){
        return(
            <div id='barrainfo' className='bg-blue-dark'>
                <div className='container'>
                    <div className='d-flex justify-content-end paddinge-24 pt-1 pb-1'>
                        <div className='d-flex'>
                            <img src='https://www.elhuarike.com/images/header/locationwhite.png' className='w-18px h-18px me-2 ms-2 as-center'/>
                            <p className='cl-white fs-14 fw-bold mb-0 as-center ms-2'>Av. San Borja Norte 401, Lima, Perú</p>
                        </div>
                        <div className='d-flex'>
                            <img src='https://www.elhuarike.com/images/header/phonewhite.png' className='w-18px h-18px me-2 ms-2 as-center'/>
                            <p className='cl-white fs-14 fw-bold mb-0 as-center ms-2'>(01) 225-1616</p>
                        </div>
                        <div className='d-flex'>
                            <img src='https://www.elhuarike.com/images/header/whatsappv2.png' className='w-18px h-18px me-2 ms-2 as-center'/>
                            <p className='cl-white fs-14 fw-bold mb-0 as-center ms-2'>+51 985 117488</p>
                        </div>
                        <div className='d-flex'>
                            <a href='https://www.facebook.com/elhuarike.restaurante' target='_blanck'>
                                <img src='https://www.elhuarike.com/images/header/facebook.png' className='w-18px h-18px me-2 ms-2 as-center'/>
                            </a>
                            <a href='https://www.instagram.com/el_huarike/' target='_blanck'>
                                <img src='https://www.elhuarike.com/images/header/instagram.png' className='w-18px h-18px as-center'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BarraInfo