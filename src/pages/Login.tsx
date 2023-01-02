import style from '../styles.module.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

export const Login = () => {
    return (
        <div className={style.containerForm}>
            <h3 className={style.tituloLogin}> Área Administrativa</h3>
            <Form.Group className="mb-3"></Form.Group>
                <Form.Label>Usuario</Form.Label>
                <Form.Control/ >

                <Form.Label>Senha</Form.Label>
                <Form.Control type='password' />

                <Button variant='success' type='submit'>Entrar</Button>
        </div>
    );
}