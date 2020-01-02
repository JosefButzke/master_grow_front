import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    layout: Layout,
    ...rest
}) {
    const signed = localStorage.getItem('user');
    if (!signed && isPrivate) {
        return <Redirect to="/" />;
    }

    if (signed && !isPrivate) {
        return <Redirect to="/home" />
    }

    return (
        <Route
            {...rest}
            render={matchProps => (
                <Layout>
                    <Component {...matchProps} />
                </Layout>
            )}
        />
    )
}

RouteWrapper.propTypes = {
    component: PropTypes.any.isRequired,
    isPrivate: PropTypes.bool,
    layout: PropTypes.any.isRequired,
}

RouteWrapper.defaultProps = {
    isPrivate: false
}