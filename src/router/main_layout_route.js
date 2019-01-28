import React from 'react';
import { Route } from 'react-router-dom';

import MainLayout from './../components/layout/main_layout';

const MainLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(matchProps) => {
                return <MainLayout><Component {...matchProps} /></MainLayout>;
            }
            }
        />
    );
};

export default MainLayoutRoute;
