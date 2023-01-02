import {useRoutes, Link} from 'react-router-dom';
import logoJmu from './assets/logoJmu.png';
// import { lists } from './helpers/Dados';
import {MyRoutes} from './routes/MyRoutes';
import Style  from './styles.module.css';
import React, { useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {  faHouse } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
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
              <Link to={'/'} className={Style.editarItens}><Dropdown.ItemText ><FontAwesomeIcon className={Style.iconMenuPainelCOntrole} icon={faHouse}  />Home</Dropdown.ItemText></Link>
                <Link to={'/plenario'} className={Style.editarItens}><Dropdown.ItemText ><FontAwesomeIcon className={Style.iconMenuPainelCOntrole} icon={faRightToBracket}  />Plenário</Dropdown.ItemText></Link>
                <Link to={'/adm'} className={Style.editarItens}><Dropdown.ItemText ><FontAwesomeIcon className={Style.iconMenuPainelCOntrole} icon={faRightToBracket}  />Administrativo</Dropdown.ItemText></Link>
                <Link to={'/almox'} className={Style.editarItens}><Dropdown.ItemText ><FontAwesomeIcon className={Style.iconMenuPainelCOntrole} icon={faRightToBracket}  />Almox</Dropdown.ItemText></Link>
                <Link to={'/video'} className={Style.editarItens}><Dropdown.ItemText ><FontAwesomeIcon className={Style.iconMenuPainelCOntrole} icon={faRightToBracket}  />Vídeo Conferência</Dropdown.ItemText></Link>
                <Link to={'/login'} className={Style.editarItens}><Dropdown.ItemText ><FontAwesomeIcon className={Style.iconMenuPainelCOntrole} icon={faPlus}  />Adicionar Item</Dropdown.ItemText></Link>
                <Link to={'/searchItem'} className={Style.editarItens}><Dropdown.ItemText ><FontAwesomeIcon className={Style.iconMenuPainelCOntrole} icon={faSearchPlus}  /> Pesquisar Itens</Dropdown.ItemText></Link>
            </DropdownButton>   

          {/*Icone do menu amburger, quando clica, chama a função que abri a nav, usando o useState  */}

            <FontAwesomeIcon className={Style.menuAmburger} onClick={Open} icon={faBars} />

            {/* <button className={Style.menuAmburger} onClick={Open}>Show Nav</button> */}
            {showNav && 
            <nav className={Style.Nav}>              
             <ul>
              
                <Link  className={Style.linkMenuAmburger} to={'/'}><li> <FontAwesomeIcon className={Style.iconMenuAmburguer} icon={faHouse}  /> Home</li> </Link>  
                <Link className={Style.linkMenuAmburger} to={'/plenario'}><li><FontAwesomeIcon className={Style.iconMenuAmburguer} icon={faRightToBracket}  /> Plenário</li> </Link>  
                <Link className={Style.linkMenuAmburger} to={'/adm'}><li><FontAwesomeIcon className={Style.iconMenuAmburguer} icon={faRightToBracket}  />Administrativo</li> </Link>  
                <Link  className={Style.linkMenuAmburger}  to={'/almox'}><li><FontAwesomeIcon className={Style.iconMenuAmburguer} icon={faRightToBracket}  />Almoxarifado</li> </Link>  
                <Link className={Style.linkMenuAmburger} to={'/video'}><li><FontAwesomeIcon className={Style.iconMenuAmburguer} icon={faRightToBracket}  />Vídeo Conferência</li> </Link>
                <Link  className={Style.linkMenuAmburger} to={'/login'}><li> <FontAwesomeIcon className={Style.iconMenuAmburguer} icon={faPlus}  /> Adiconar Item</li> </Link> 
                <Link  className={Style.linkMenuAmburger} to={'/SearchItem'}><li> <FontAwesomeIcon className={Style.iconMenuAmburguer} icon={faSearchPlus}  /> Pesquisar Item</li> </Link>  
 
  



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