import React from 'react';

import MainLayoutHeader from './main_layout_header';
import LeftNav from '../navigation/left_nav';

const MainLayout = ({ children, ...rest }) => {
    return (
        <div className="dt-dashboard-wrapper">
            <MainLayoutHeader />
            <section className="dt-page-wrapper">
                <LeftNav />
                <div className="dt-page-container">
                    <div className="dt-content-wrapper">{children}</div>
                </div>
            </section>
        </div>
    );
};

export default MainLayout;

