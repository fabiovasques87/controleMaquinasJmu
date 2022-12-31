import {useRoutes, Link} from 'react-router-dom';
import logoJmu from './assets/logoJmu.png';
// import { lists } from './helpers/Dados';
import {MyRoutes} from './routes/MyRoutes';
import Style  from './styles.module.css';
import React, { useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHouse } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

const App = () =>{

  const [open, setOpen] = useState(false);

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

             {/* Button Collspan para responsividade no smartphone */}
             <>
           
                <div
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  className={Style.menuAmburguer} 
                  >
                    <div className={Style.borderMenuAmburguer}> ---</div>
                    <div className={Style.borderMenuAmburguer}>---</div>
           
                </div>
           

            <div className={Style.areaMenuAmburguer}>
        <Collapse in={open} dimension="height">
          <div id="example-collapse-text" >
            <Card className={Style.heightMenuAmburguer} body style={{}}>
            <Link className={Style.linkMenuAmburguer} to={'/'}>Home</Link><br />
              <Link className={Style.linkMenuAmburguer} to={'/plenario'}>Plenário</Link><br />
              <Link className={Style.linkMenuAmburguer} to={'/adm'}>Adm</Link><br />
              <Link className={Style.linkMenuAmburguer} to={'/video'}>Vídeo Conferencia</Link><br />
              <Link className={Style.linkMenuAmburguer} to={'/Almoxarifado'}>Almoxarifado</Link>

            </Card>
          </div>
        </Collapse>
      </div>

                </>
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