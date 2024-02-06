import React from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'

import BarraInfo from './barrainfo.js'
import BarraMenu from './barramenu.js'
import Footer from './footer.js'
import FooterEnd from './end.js'

class WebApp extends React.Component {
    componentDidMount = () => {
        window.scrollTo (0, 0)
    }

    render (){
        let childs = this.props.children 
                     && React.cloneElement (this.props.children)

        return (
            <div id='webapp'>
                <div className='position-fixed top-0 start-0 end-0' style={{zIndex: '99999'}}>
                    <BarraInfo/>
                    <BarraMenu/>
                </div>
                {childs}
                <Footer/>
                <FooterEnd/>
                {
                    window.outerWidth < 992 ? (
                        <a href={window.outerWidth < 992 ? 'https://api.whatsapp.com/send?phone=51985117488' : 'https://web.whatsapp.com/send?phone=51985117488'} target='_blank' rel='noopener noreferrer'>
                            <img alt='whatsapp' className='position-fixed' src="https://img.icons8.com/fluent/72/000000/whatsapp.png" 
                                style={{bottom: '32px', right: '32px', width: '48px', height: '48px'}}/>
                        </a>
                    ) : null
                }
            </div>
        )
    }
}

WebApp.propTypes = {

}

const mapStateToProps = (state) => ({

})

const mapActionsToProps = {

}

export default connect(mapStateToProps, mapActionsToProps)(WebApp)