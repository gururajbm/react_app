import React, { Component } from 'react';

import LeftNavItem from './left_nav_item';

class LeftNav extends Component {
    render() {
        return (
            <div className="dt-left-navbar">
                <ul>
                    <LeftNavItem />
                </ul>
            </div>
        );
    }
}

export default LeftNav;
