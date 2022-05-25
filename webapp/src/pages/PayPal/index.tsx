import React from "react";
import PayPalForm from "../../components/PayPalForm";
import CisumBannerLogo from "../../assets/CISUM_LOGO_800_450_px.png";
import "./pay.css";


const PayPal = () => {

    return (
        <div className={'content flex-center flex-align-items-center'}>
            <div className={'pay-container-logo'}>
                <img src={CisumBannerLogo} height={450} width={800} className={'pay-container-logo-left'}/>
                <img src={CisumBannerLogo} height={450} width={800} className={'pay-container-logo-right'}/>
            </div>
            <PayPalForm/>
        </div>
    )
}

export default PayPal;