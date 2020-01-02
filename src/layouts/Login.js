import React from 'react';

import { Container, Header } from './styles';

const Sidebar = (props) => {
    const { children } = props;

    return (
        <Container>
            {children}
        </Container >
    );
};

export default Sidebar;