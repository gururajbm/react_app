import React from 'react';

const DefaultLayout = ({ children, ...rest }) => {
    return (
        <div className="page page-default">
            <div className="main">{children}</div>
        </div>
    );
};

export default DefaultLayout;
