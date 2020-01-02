import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Container = styled.div`
    background: #0C9F00;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background: black;
        width: 400px;
        height: 500px;
        border-radius: 10px;

        input {
            width: 250px;
            height: 44px;
            border: none;
            background: #464646;
            border-radius: 4px;
            margin-top: 20px;
            color: #d6d6d6;
            ::placeholder {
                color: #eee;
                opacity: 1;
            }
            text-align: center;
        }
    }
`;

export const ButtonStyled = styled(Button)`
    &&{
        background: #0C9F00;
        color: white;
        width: 290px;
        height: 50px;
        margin-top: 70px;

        :hover {
            background: #0C9F00;
            opacity: 0.9;
            box-shadow: 0px 0px 10px 5px #262626;
        }
    }
`;