import {useRoutes, Link} from 'react-router-dom';
import logoJmu from './assets/logoJmu.png';
// import { lists } from './helpers/Dados';
import {MyRoutes} from './routes/MyRoutes';
import Style  from './styles.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHouse } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const App = () =>{

  

  return (
    <div>

      <div className={Style.header}>
      <Link to={'/'} className={Style.iconHouse}><FontAwesomeIcon icon={faHouse}  /> </Link>  
      <h1 className={Style.textHeader}>Equipamentos de Informática</h1>      
          <DropdownButton id="dropdown-item-button"   variant="success" title="ADM">
            <Link to={'/editarItens'} className={Style.editarItens}><Dropdown.ItemText >Gerenciar itens</Dropdown.ItemText></Link>
          </DropdownButton>
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