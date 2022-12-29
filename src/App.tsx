import {useRoutes, Link} from 'react-router-dom';
import logoJmu from './assets/logoJmu.png';
// import { lists } from './helpers/Dados';
import {MyRoutes} from './routes/MyRoutes';
import Style  from './styles.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHouse } from '@fortawesome/free-solid-svg-icons';


const App = () =>{

  

  return (
    <div>

      <div className={Style.header}>
      <Link to={'/'} className={Style.iconHouse}><FontAwesomeIcon icon={faHouse}  /> </Link>  
      <h1 className={Style.textHeader}>Equipamentos de Informática</h1>      
      </div>


    
      <div className={Style.section}>
          <MyRoutes /> <br />
          
      </div>
      
      {
        /*
      
      <div className={Style.footer}>        
        <h3>JMU</h3>
        <hr />
        /* <img src={logoJmu} className={Style.logoJmu} /> 
      </div>
      */
      }
      
    </div>
  );
}


export default App;