import style from '../styles.module.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export const SearchItem = () => {
    return (
        <div className={style.table}>
            <Form className={style.fieldsetSearch}>
                    <Form.Control type='text' placeholder='Pesquise pelo Número do Patrimonio' />
                <FontAwesomeIcon  className={style.faSearchPlus} icon={faSearch}  />
            </Form>
                <Table responsive>
                    <thead>
                            <tr>
                            <th>Patrimonio</th>
                            <th>Monitor</th>
                            <th>Microcomputador</th>
                            <th>WebCam</th>
                            <th>Teclado</th>
                            <th>Mouse</th>
                            <th>S.O</th>
                            <th>Processador</th>
                            <th>Memória Ram</th>
                            <th>Hostname</th>
                            <th>IP</th>
                            <th>OBS</th>
                            <th colSpan={3} className={style.alignTextTable}>Gerenciamento</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> 1</td>
                                <td >Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>172.16.14.X</td>
                                <td>Otto</td>
                            <div className={style.alignButtonTable}>
                                <td  ><Link  to={'/escrivao'}  ><button className={"btn btn-success"} >Visualizar </button> </Link></td>
                                <td > <Link to={'/login'} ><button className={"btn btn-warning"} >Editar </button> </Link>  </td>
                                <td > <Link to={'/login'} ><button className={"btn btn-danger"} >Excluir </button> </Link>  </td>
                            </div>
                            </tr>
                            <tr>
                                <td> 1</td>
                                <td >Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>172.16.14.X</td>
                                <td>Otto</td>
                            <div className={style.alignButtonTable}>
                                <td  ><Link  to={'/escrivao'}  ><button className={"btn btn-success"} >Visualizar </button> </Link></td>
                                <td > <Link to={'/login'} ><button className={"btn btn-warning"} >Editar </button> </Link>  </td>
                                <td > <Link to={'/login'} ><button className={"btn btn-danger"} >Excluir </button> </Link>  </td>
                            </div>
                            </tr>
                            <tr>
                                <td> 1</td>
                                <td >Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>172.16.14.X</td>
                                <td>Otto</td>
                            <div className={style.alignButtonTable}>
                                <td  ><Link  to={'/escrivao'}  ><button className={"btn btn-success"} >Visualizar </button> </Link></td>
                                <td > <Link to={'/login'} ><button className={"btn btn-warning"} >Editar </button> </Link>  </td>
                                <td > <Link to={'/login'} ><button className={"btn btn-danger"} >Excluir </button> </Link>  </td>
                            </div>
                            </tr>
                            
                        </tbody>
                    </Table>
            
        </div>
    );
}