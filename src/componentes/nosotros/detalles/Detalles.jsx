import React from 'react';

class Detalles extends React.Component {

  render() {

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h2>Objetivo</h2>
                    <p>Facilitarles una aplicacion que permita reproducir  el contenido visual mas reciente y garantizar una interaccion facil, entendible y amigable con todos los usuarios de la app.  </p>
                    <p><a className="btn btn-secondary" href="#" rel="noopener noreferrer" role="button">Leer más &raquo;</a></p>
                </div>
                <div className="col-md-4">
                    <h2>Misión</h2>
                    <p>Proveer contenido reciente y de calidad a la comunidad de usuarios, asegurando la entera satisfaccion de estos.  </p>
                    <p><a className="btn btn-secondary" href="#" rel="noopener noreferrer" role="button">Leer más &raquo;</a></p>
                </div>
                <div className="col-md-4">
                    <h2>Visión</h2>
                    <p>Conectar a las personas a traves de contenido de calidad, buscando asi proveer un momento de entretenimiento con el contenido a ofrecer.</p>
                    <p><a className="btn btn-secondary" href="#" rel="noopener noreferrer" role="button">Leer más &raquo;</a></p>
                </div>
            </div>

            <hr/>

        </div>

    )
    
  }

}

export default Detalles;