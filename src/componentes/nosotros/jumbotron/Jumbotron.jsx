import React from 'react';

class Jumbotron extends React.Component {

  render() {

    return (

        <div className="jumbotron">
            <div className="container">
                <h1 className="display-3">Nosotros </h1>
                <p>
                    Somos una comunidad de estudiantes donde buscamos fomentar el conocimiento juntos.
                    <br/>
                    Solo de esta manera se formarán profesionales que cambien sus vidas y tengan un mejor futuro.
                </p>
                <p><a className="btn btn-primary btn-lg" href="https://www.mediafire.com/file/bfsn7ddpkvmtxiq/App_Movie.apk/file" rel="noopener noreferrer" target="_blank" role="button">Descargar App</a></p>
            </div>
        </div>

    )
    
  }

}

export default Jumbotron;