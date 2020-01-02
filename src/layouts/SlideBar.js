import React from 'react';

import { Container, Header } from './styles';
import Settings from '@material-ui/icons/Settings';

import history from '../services/history';

const Sidebar = (props) => {
    const { children } = props;

    const handleSettings = () => {
        history.push('/raspberry');
    }

    return (
        <Container>
            <Header>
                <div>MasterGrow</div>
                <div></div>
                <div>
                    <button onClick={() => { handleSettings() }}>
                        <Settings />
                    </button>
                </div>
            </Header>
            {children}
        </Container >
    );
};

export default Sidebar;