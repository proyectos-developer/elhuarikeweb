import React from 'react'
import {browserHistory} from 'react-router'

class BarraMenu extends React.Component{
    rederigir = (e) => {
        e.preventDefault ()
        browserHistory.push ('/')
    }

    render (){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-blue-dark" id='barramenu'>
                <div className='container'>
                    {
                        window.outerWidth < 992 ? (
                            <div className='d-flex justify-content-between'>
                                <li className='nav-item cursor-pointer as-center w-60 list-style-none' onClick={this.rederigir.bind(this)}>
                                    <img src='https://www.elhuarike.com/images/logo406x51.PNG' className='align-self-center w-100'/>
                                </li>
                                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarhuarike' aria-controls='navbarhuarike' aria-expanded='false' aria-label='Toggle navigation'>
                                    <span className='navbar-toggler-icon'/>
                                </button>
                            </div>
                        ) : null
                    }
                    <div className='collapse navbar-collapse' id='navbarhuarike'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between w-100'>
                            {
                                window.outerWidth > 991 ? (
                                    <li className='nav-item cursor-pointer as-center w-20' onClick={this.rederigir.bind(this)}>
                                        <img src='https://www.elhuarike.com/images/logo406x51.PNG' className='align-self-center w-100'/>
                                    </li>
                                ) : null
                            }
                            <div className='d-flex justify-content-end w-80 as-center'>
                                <li className='nav-item cursor-pointer as-center w-20 pe-3 ps-3'>
                                    <a className='nav-link cl-white fs-14' aria-current='page' href='#lema'>NOSOTROS</a>
                                </li>
                                <li className='nav-item cursor-pointer as-center w-20 pe-3 ps-3'>
                                    <a className='nav-link cl-white fs-14' aria-current='page' href='#lacarta'>LA CARTA</a>
                                </li>
                                <li className='nav-item cursor-pointer as-center w-20 pe-3 ps-3'>
                                    <a className='nav-link cl-white fs-14' aria-current='page' href='#carousel'>RESERVAS</a>
                                </li>
                                <li className='nav-item cursor-pointer as-center w-20 pe-3 ps-3'>
                                    <a className='nav-link cl-white fs-14' aria-current='page' href='#footer'>UBICACION</a>
                                </li>
                                <li className='nav-item cursor-pointer as-center w-25 pe-3 ps-3'>
                                    <a className='nav-link cl-white fs-14' href={window.outerWidth < 992 ? 'https://api.whatsapp.com/send?phone=51985117488' : 'https://web.whatsapp.com/send?phone=51985117488'} target='_blank' rel='noopener noreferrer'>
                                        <button className='btn bg-green-whatsapp rounded-pill d-flex ps-2 pe-2'>
                                            <img src='https://www.elhuarike.com/images/header/whatsappv2.png' className='w-18 h-18 as-center'/>
                                            <p className='cl-white ms-2 as-center mb-0 fs-14'>WHATSAPP</p>
                                        </button>
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default BarraMenu