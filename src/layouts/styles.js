import styled from 'styled-components';

export const Container = styled.div`
    background: white;
    height: 100vh;
`;

export const Header = styled.nav`
    background: #0C9F00;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        color: white;
        font-size: 24px;
        padding: 0px 30px 0px 30px;

        button {
            background: none;
            cursor: pointer;
            border-style: none;
            color: white;
        }
    }
`;