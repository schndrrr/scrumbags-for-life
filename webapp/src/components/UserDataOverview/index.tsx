import * as React from "react";
import "./user_data_overview.css";
import {Divider} from "antd";

const UserDataOverview = () => {

    const storageData = localStorage.getItem('user') + '';
    const user = JSON.parse(storageData);

    return (
        <div className={'user-data-container flex-col'}>
            <Divider orientation={'left'} className={'data-field-label'}>Kunde</Divider>
            {user && <div className={'data-field'}>{user.firstname} {user.lastname}</div>}
            <Divider orientation={'left'} className={'data-field-label'}>Anschrift</Divider>
            {user && <div className={'data-field'}>{user.street} {user.streetNr}</div>}
            {user && <div className={'data-field'}>{user.postalCode} {user.city}</div>}

        </div>
    )

}

export default UserDataOverview;
