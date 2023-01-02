import {useRoutes, Link} from 'react-router-dom';
import logoJmu from './assets/logoJmu.png';
// import { lists } from './helpers/Dados';
import {MyRoutes} from './routes/MyRoutes';
import Style  from './styles.module.css';
import React, { useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {  faHouse } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

const App = () =>{

  const [showNav, setShowNav] = useState(false);

  const Open = () => {
    setShowNav(!showNav);
  }

  return (
    <div>

    
      <div className={Style.header}>
            <Link to={'/'} className={Style.iconHouse}><FontAwesomeIcon icon={faHouse}  /> </Link>  
            <h1 className={Style.textHeader}>Equipamentos de Informática</h1>   
            <DropdownButton className={Style.dropdownPainelControle} id="dropdown-item-button"   variant="success" title="Painel de Controle">
                <Link to={'/editarItens'} className={Style.editarItens}><Dropdown.ItemText >Gerenciar itens</Dropdown.ItemText></Link>
                <Link to={'/plenario'} className={Style.editarItens}><Dropdown.ItemText >Plenário</Dropdown.ItemText></Link>
                <Link to={'/adm'} className={Style.editarItens}><Dropdown.ItemText >Administrativo</Dropdown.ItemText></Link>
                <Link to={'/video'} className={Style.editarItens}><Dropdown.ItemText >Vídeo Conferência</Dropdown.ItemText></Link>
            </DropdownButton>   

          {/*Icone do menu amburger, quando clica, chama a função que abri a nav, usando o useState  */}

            <FontAwesomeIcon className={Style.menuAmburger} onClick={Open} icon={faBars} />

            {/* <button className={Style.menuAmburger} onClick={Open}>Show Nav</button> */}
            {showNav && 
            <nav className={Style.Nav}>              
             <ul>
              
                <Link  className={Style.linkMenuAmburger} to={'/'}><li>Home</li> </Link>  
                <Link className={Style.linkMenuAmburger} to={'/editarItens'}><li>Gerenciar itens</li> </Link>  
                <Link className={Style.linkMenuAmburger} to={'/plenario'}><li>Plenário</li> </Link>  
                <Link className={Style.linkMenuAmburger} to={'/adm'}><li>Administrativo</li> </Link>  
                <Link  className={Style.linkMenuAmburger}  to={'/almox'}><li>Almoxarifado</li> </Link>  
                <Link className={Style.linkMenuAmburger} to={'/video'}><li>Vídeo Conferência</li> </Link>  



            </ul> 
            </nav>} 

        
        
      </div> {/*Fechamento header  */}


    
      <div className={Style.section}>
          <MyRoutes /> <br /> {/* chama o arquivo de rotas */}
          
      </div>
      
      
      
    </div>
  );
}


export default App;