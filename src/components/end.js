import React from 'react'
import {browserHistory} from 'react-router'

class FooterEnd extends React.Component{
    rederigir = (e) => {
        e.preventDefault ()
        browserHistory.push('/libro-reclamos')
    }

    rederigirinciio = (e) => {
        e.preventDefault ()
        browserHistory.push('/')
        window.scrollTo(0, 0)
    }

    render (){
        return(
            <div id='end' className='bg-blue-dark pt-3 pb-3'>
                <div className='container'>
                    <div className='d-flex justify-content-between paddinge-24'>
                        <div className='w-20 as-center cursor-pointer' onClick={this.rederigirinciio.bind(this)}>
                            <img src='https://www.elhuarike.com/images/logo406x51.PNG' className='align-self-center w-100'/>
                        </div>
                        <div className='w-55'>
                            <div className='d-flex justify-content-center'>
                                <a href='https://single-lake09.banahosting.com:2096/' target='_blank' className='text-decoration-none cursor-pointer'>
                                    <p className='fs-16 text-align-center cl-white mb-0'>reservas@elhuarike.com</p>
                                </a>
                            </div>
                            <div className='d-flex justify-content-center cursor-pointer' onClick={this.rederigir.bind (this)}>
                                <div className='d-flex'>
                                    <p className='fs-16 cl-white me-2 mb-0 as-center'>Libro de reclamaciones</p>
                                    <img src='https://www.elhuarike.com/images/footer/reclamos.png' alt="libro reclamos" className='w-48px h-48px'/>
                                </div>
                            </div>
                        </div>
                        <div className='w-25 pe-0 ps-3 d-flex justify-content-end as-center'>
                            <a className='nav-link cl-white fs-14' href={window.outerWidth < 992 ? 'https://api.whatsapp.com/send?phone=51985117488' : 'https://web.whatsapp.com/send?phone=51985117488'} target='_blank' rel='noopener noreferrer'>
                                <button className='btn bg-green-whatsapp rounded-pill d-flex ps-2 pe-2 pt-1 pb-1' style={{width: '112.24px', height: '35px'}}>
                                    <img src='https://www.elhuarike.com/images/header/whatsappv2.png' className='w-18px h-18px as-center'/>
                                    <p className='cl-white ms-2 as-center mb-0 fs-14'>WHATSAPP</p>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FooterEnd