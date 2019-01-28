import React from 'react';
import { Route } from 'react-router-dom';

import DefaultLayout from './../components/layout/default_layout';

const DefaultLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(matchProps) => {
                return <DefaultLayout><Component {...matchProps} /></DefaultLayout>;
            }
            }
        />
    );
};

export default DefaultLayoutRoute;
