import React, { useEffect, useState } from 'react';

import { Container, Cultivo, AddIconStyled, AddButton, ButtonStyled, Divider } from './styles';

import api from '../../services/api';

const Login = () => {
    const [cultivos, setCultivos] = useState([]);

    useEffect(() => {
        const loadCultivos = async () => {
            const { data } = await api.get('cultivos');
            setCultivos(data.rows);
        };

        loadCultivos();
    }, []);


    const handleAddCultivo = () => {
        setCultivos([...cultivos, {
            id: cultivos.length + 1,
            title: 'tes',
            temperatura_min: 10,
            temperatura_max: 20,
            umidade_solo_min: 30,
            umidade_solo_max: 40
        }])
    }

    return (
        <Container>
            {cultivos.map(cultivo => (
                <Cultivo key={cultivo.id}>
                    <h1>{cultivo.title}</h1>
                    <Divider />
                    <div>
                        <p>Temperatura mínima ideal</p>
                        <input value={cultivo.temperatura_min}></input>
                        <p>Temperatura máxima ideal</p>
                        <input value={cultivo.temperatura_max}></input>
                        <p>Umidade do solo mínima ideal</p>
                        <input value={cultivo.umidade_solo_min}></input>
                        <p>Umidade do solo máxima ideal</p>
                        <input value={cultivo.umidade_solo_max}></input>
                    </div>
                    <Divider />
                    <ButtonStyled>Update</ButtonStyled>
                </Cultivo>
            ))
            }


            <Cultivo>
                <AddButton onClick={() => handleAddCultivo()}>
                    <AddIconStyled />
                </AddButton>
            </Cultivo>
        </Container >
    )
}

export default Login;