import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 20px;
    margin: 20px;
`;

export const Cultivo = styled.div`
    min-width: 400px;
    height: 420px;
    background: white;
    box-shadow: 0px 0px 2px 0px #eee;
    border-radius: 4px;
    border-style: solid;
    border-width: 2px;
    border-color: #ddd;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 24px;
        color: #696969;
        padding: 10px;
    }

    div {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            display: inline;
            font-size: 14px;
        }

        input {
            width: 50px;
            height: 30px;
            border-style: solid;
            border-width: 1px;
            border-color: #ddd;
            border-radius: 4px;
            justify-content: center;
            text-align: center;
            margin-top: 5px;
            margin-bottom: 15px;
        }
    }
`;

export const AddIconStyled = styled(AddIcon)`
    &&{
        font-size: 70px;
        color: green;
    }
`;

export const AddButton = styled.button`
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: none;
    background: none;
`;

export const Divider = styled.hr`
    border-style: solid;
    border-width: 1px;
    width: 90%;
    color: #eee;
`;


export const ButtonStyled = styled(Button)`
    &&{
        background: #0C9F00;
        color: white;
        width: 150px;
        height: 50px;
        margin-top: 17px;

        :hover {
            background: #0C9F00;
            opacity: 0.9;
            box-shadow: 0px 0px 10px 5px #eee;
        }
    }
`;
