import React, { useState } from 'react';

import api from '../../services/api';
import history from '../../services/history';

import { Container, ButtonStyled } from './styles';
import PersonIcon from '@material-ui/icons/Person';
import { toast } from 'react-toastify';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        await api.post('/sessions', { name: name, password: password })
            .then(res => {
                localStorage.setItem('user', res.data.user.name);
                history.push('/home');
            })
            .catch((err) => toast.error('Usuário inválido'));

    }

    return (
        <Container>
            <form>
                <PersonIcon style={{ color: 'green', fontSize: 70, marginBottom: 30 }} size={200} />
                <input type='search' placeholder="Usuario" onChange={(event) => setName(event.target.value)}></input>
                <input type='password' placeholder="Password" onChange={(event) => setPassword(event.target.value)}></input>
                <ButtonStyled onClick={(event) => { handleSubmit(event) }}>
                    Login
                </ButtonStyled>
            </form>
        </Container >
    )
}

export default Login;