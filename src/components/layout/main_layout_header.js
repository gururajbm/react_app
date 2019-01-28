import React, { Component } from 'react';
import ProfileSettingDropDown from '../ui/dropdown/profile_setting_dropdown';

class MainLayoutHeader extends Component {
    render() {
        return (
            <header className="dt-header">
                <div className="dt-mobile-menu" />
                <div className="dt-logo-wrapper" />
                <div className="dt-profile-btn">
                    <ProfileSettingDropDown />
                </div>
            </header>
        );
    }
}

export default MainLayoutHeader;
