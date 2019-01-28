import React, { Component } from 'react';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class ProfileSettingDropDown extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <ButtonDropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
            >
                <DropdownToggle caret>
                    Welcome
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Option </DropdownItem>
                    <DropdownItem >Option</DropdownItem>
                    <DropdownItem> Option</DropdownItem>
                    <DropdownItem> Option</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}

export default ProfileSettingDropDown;
