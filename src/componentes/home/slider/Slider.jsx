import React from 'react';

class Slider extends React.Component {

  render() {

  	return (

  		<div id="slider" className="carousel slide" data-ride="carousel">
		    <ol className="carousel-indicators">
		        <li data-target="#slider" data-slide-to="0" className="active"></li>
		        <li data-target="#slider" data-slide-to="1"></li>
		        <li data-target="#slider" data-slide-to="2"></li>
		    </ol>
		    <div className="carousel-inner">
		        <div className="carousel-item active">
		            <img className="img-fluid" src="https://m.guiadelocio.com/var/guiadelocio.com/storage/images/a-fondo/las-peliculas-de-accion-mas-esperadas-de-2020/accion-2020/38994735-1-esl-ES/accion-2020.jpg" />
		            <div className="elementos">
		                <a className="btn btn-lg btn-primary" href="https://www.eltiempo.com/files/article_multimedia/uploads/2019/12/31/5e0b1c57bde35.jpeg" target="_blank" role="button">Acceder a la App</a>
		            </div>
		        </div>
		        <div className="carousel-item">
		            <img className="img-fluid" src="https://cines.com/files/2019/12/estrenos-enero-2020-1.jpg" />
		            <div className="elementos">
		                <a className="btn btn-lg btn-primary" href="https://i.blogs.es/ffcbb6/peliculas-infantiles-2020/450_1000.jpg" target="_blank" role="button">Leer más</a>
		            </div>
		        </div>
		        <div className="carousel-item">
		            <img className="img-fluid" src="https://www.playerone.vg/wp-content/uploads/2019/04/MCU.jpg" />
		            <div className="elementos">
		                <a className="btn btn-lg btn-primary" href="https://blog.nubecolectiva.com/como-crear-animaciones-en-android-trasladar-elemento-en-eje-x-y-java/" target="_blank" role="button">Leer más</a>
		            </div>
		        </div>
		    </div>
		    <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
		        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		        <span className="sr-only">Previous</span>
		    </a>
		    <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
		        <span className="carousel-control-next-icon" aria-hidden="true"></span>
		        <span className="sr-only">Next</span>
		    </a>
		</div>

  	)
    
  }

}

export default Slider;