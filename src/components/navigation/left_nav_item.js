import React, { Component } from 'react';

class LeftNavItem extends Component {
    constructor(props) {
        super(props);
        this.navItems = [
            { id: 1, name: 'Activity', count: '' },
            { id: 2, name: 'Job Resources', count: '' },
            { id: 3, name: 'Messages', count: '' },
            { id: 4, name: 'PO', count: '' },
            { id: 5, name: 'Back Charges', count: '' }
        ];
    }
    render() {
        return this.navItems.map((item) => {
            return (
                <li key={item.id} className="dt-nav-item">
                    <div className="dt-nav-item-wrapper">
                        <span className="dt-nav-icon" />
                        <span className="dt-nav-title">{item.name}</span>
                        <span className="dt-nav-value">{item.count}</span>
                    </div>
                </li>
            );
        });
    }
}

export default LeftNavItem;
