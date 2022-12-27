import {useRoutes} from 'react-router-dom';
import logoJmu from './assets/logoJmu.png';
// import { lists } from './helpers/Dados';
import {MyRoutes} from './routes/MyRoutes';
import Style  from './styles.module.css';



  

const App = () =>{

  

  return (
    <div>
      <div className={Style.header}>
        <h1>Informações de Equipamentos de Informática</h1>< br />

      </div>
      <div className={Style.section}>
          <MyRoutes /> <br />
          
      </div>
      <div className={Style.footer}>
        <h3>JMU</h3>
        {/* <img src={logoJmu} className={Style.logoJmu} /> */}
      </div>
    </div>
  );
}


export default App;