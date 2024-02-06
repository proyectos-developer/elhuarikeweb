import React from 'react'
import { RViewer, RViewerTrigger } from 'react-viewerjs'

class LaCarta extends React.Component{
    render (){
        let imagen1 = [
            "https://www.elhuarike.com/images/lacarta/carta01.jpg"
        ]

        return (
            <div id='lacarta' className='bg-blue-dark pb-5 pt-5'>
                <div className='container'>
                    <p className='fs-28 text-align-center mb-0 cl-white'>La Carta</p>
                    <br/>
                    <p className='fs-16 text-align-center cl-white'>Consulta nuestra gran variedad de platos que tenemos para ti.</p>
                    <div className='d-flex justify-content-center'>
                        <div className='d-flex justify-content-center bg-white pt-4 pb-4 rounded-8 w-50'>
                            <div className='d-flex' id='botones'>
                                <button className='w-50 bg-blue-dark position-relative border-0 rounded-pill me-2 pt-2 pb-2 ps-4 pe-4'>
                                    <p className='cl-white position-absolute transalte-middle ms-1'>VER CARTA</p>
                                    <RViewer imageUrls={imagen1}>
                                        {
                                            imagen1.map((imagen, index) => {
                                                return (
                                                    <RViewerTrigger index={index}>
                                                        <img src={imagen} alt='LaCarta' style={{width: '86px', height: '20px', opacity: 0}} />
                                                    </RViewerTrigger>
                                                )
                                            })
                                        }
                                    </RViewer>
                                </button>
                                <button className='w-50 bg-blue-dark position-relative border-0 rounded-pill ms-2 pt-2 pb-2 ps-4 pe-4'>
                                    <a href='http://elhuarike.com/images/lacarta/lacarta.pdf' className='text-decoration-none' target='_blank'>
                                        <p className='cl-white as-center mb-0'>DESCARGAR</p>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LaCarta