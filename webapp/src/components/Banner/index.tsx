import React from "react";
import './banner.css';
import CisumBannerLogo from './../../assets/CISUM_LOGO_800_450_px.png';

const Banner = () => {

    return (
        <div className={'banner-container flex'}>
            <div className={'banner-container-logo'}>
                <img src={CisumBannerLogo} height={450} width={800} className={'banner-container-logo-left'}/>
                <img src={CisumBannerLogo} height={450} width={800} className={'banner-container-logo-right'}/>
            </div>
            <div className={'banner-text'}>
            
                <div className={'banner-text-top'}>
                    WHERE WORDS
                </div>
                <div className={'banner-text-middle'}>
                    LEAVE OFF,
                </div>
                <div className={'banner-text-bottom'}>
                    MUSIC BEGINS.
                </div>

            </div>
        </div>
    )
}

export default Banner;