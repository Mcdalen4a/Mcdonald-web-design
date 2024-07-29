import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; 

import imagen from './images/promociones.png';
import imagen2 from './images/facebook.png.png';
import imagen3 from './images/twitter.png.png';
import imagen4 from './images/instagram.png.png';

function BodyContent() {
  const handleClick1 = () => {
    window.location.href = "https://www.pedidosya.com.ar/cadenas/mc-donalds";
  }

  const handleClick2 = () => {
    window.location.href = "https://www.facebook.com/McDonaldsArgentina/?locale=es_LA";
  }

  const handleClick3 = () => {
    window.location.href = "https://x.com/mcdonalds_ar?lang=es";
  }

  const handleClick4 = () => {
    window.location.href = "https://www.instagram.com/mcdonalds_ar/?hl=es-la";
  }

  return (
    <div className="body" >
      <div className="row">
        <div className="col-12 col-md-6">
          <p className="main-text">
            I'M LOVIN IT
          </p>
          <p className="lorem-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button onClick={handleClick1} className='my-button'>Hacer pedido</button>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img src={imagen} alt="promociones" className="img-fluid" /> 
        </div>
      </div>
      <p className='Parrafo'>Made by Magdalena Segretin</p>
      <div className="social-media text-center mt-3">
        
        <img src={imagen2} alt="redSocial1" className="red-social1 img-fluid" onClick={handleClick2} />
        <img src={imagen3} alt="redSocial2" className="red-social2 img-fluid" onClick={handleClick3} />
        <img src={imagen4} alt="redSocial3" className="red-social3 img-fluid" onClick={handleClick4} />
      </div>
      
    </div>
  );
}

export default BodyContent;
