import React from 'react';

class Mapa extends React.Component {

  render() {

    return (

        <div className="embed-responsive embed-responsive-4by3">
            <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.713417262685!2d-69.66484998560324!3d18.451316676105396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf7ff3f1653e37%3A0xc80c36909a523777!2sInstituto%20Tecnol%C3%B3gico%20de%20Las%20Am%C3%A9ricas%20(ITLA)!5e0!3m2!1ses-419!2sdo!4v1584674447717!5m2!1ses-419!2sdo"></iframe>
        </div>

    )
    
  }

}

export default Mapa;