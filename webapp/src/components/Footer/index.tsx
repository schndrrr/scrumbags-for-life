import React from "react";
import './footer.css';
import CisumLogo from "../CisumLogo";
import {Link} from "react-router-dom";

const Footer = () => {

    return (
        <div className={'footer-container flex-row'}>
            <CisumLogo fill={'#F4951E'}/>
            <div className={'footer-content flex-column'} >
                Musikplatz, 012345 Musikstadt <br/>
                info@cisum.de <br/>
                Über uns
            </div>
            <div className={'footer-content flex-column'} >
                <Link to={`../imprint`}>Datenschutz</Link>
                <Link to={`../imprint`}>Impressum</Link>
                <Link to={`../imprint`}>Wiederrufsbelehrung</Link>
            </div>
        </div>
    )
}

export default Footer;