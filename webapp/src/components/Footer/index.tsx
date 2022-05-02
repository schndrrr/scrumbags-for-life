import React from "react";
import './footer.css';
import CisumLogo from "../CisumLogo";
import {Link} from "react-router-dom";

const Footer = () => {

    return (
        <div className={'footer-container flex'}>
            <div className={'flex flex-self-end footer-copy'}>
                <CisumLogo fill={'#F4951E'} width={'80px'}/>
                <div className={'flex flex-self-end'}>&copy; 2022 </div>
            </div>

            <div className={'flex-row footer-content-container'}>
                <div className={'text-center footer-content flex-column'} >
                    Musikplatz, 012345 Musikstadt <br/>
                    info@cisum.de <br/>
                    Über uns
                </div>
                <div className={'footer-content flex-column footer-content-right'} >
                    <Link to={`../imprint`}>Datenschutz</Link>
                    <Link to={`../imprint`}>Impressum</Link>
                    <Link to={`../imprint`}>Wiederrufsbelehrung</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;