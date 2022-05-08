import * as React from "react";
import "./user_data_overview.css";
import {Divider} from "antd";

const UserDataOverview = () => {

    return (
        <div className={'user-data-container flex-col'}>
            <Divider orientation={'left'} className={'data-field-label'}>Kunde</Divider>
            <div className={'data-field'}>"user.name"</div>
            <Divider orientation={'left'} className={'data-field-label'}>Anschrift</Divider>
            <div className={'data-field'}>"user.street"</div>
            <div className={'data-field'}>"user.postcode" "user.city"</div>

        </div>
    )

}

export default UserDataOverview;
