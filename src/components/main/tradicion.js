import React from 'react'

class Tradicion extends React.Component{
    render (){
        return (
            <div id='tradicion' className='bg-white pt-3 pb-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 as-center'>
                            <p className='fs-28 mb-1'>Tradición y peruanidad en cada receta</p>
                            <img src='https://www.elhuarike.com/images/tradiciones/LINEA_PEQUENA.png' style={{width: '47px', height: '20px'}}/>
                            <p className='fs-16 mb-0' style={{textAlign: 'justify-content'}}>EL HUARIKE es un concepto gastronómico que exhibe lo más clásico de la comida marina peruana, con lo mejor en pescados y mariscos, un servicio de primera y un ambiente que transporta al consumidor a un lugar remoto, en donde el placer es el protagonista.</p>
                            <br/>
                            <br/>
                            <p className='fs-16 mb-0' style={{textAlign: 'justify-content'}}>El nombre EL HUARIKE hace referencia a los tradicionales “huarikes” limeños, lugares famosos aunque de perfil bajo, en donde uno podía comer muy sabroso.</p>
                            <br/>
                            <br/>
                            <p className='fs-16 mb-0' style={{textAlign: 'justify-content'}}>Desde el año 2006 brindando lo mejor del mar a su mesa.</p>                            
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 as-center'>
                            <img src='https://www.elhuarike.com/images/tradiciones/CEBICHE.png' style={{width: '100%'}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tradicion