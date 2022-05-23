import React from "react";
import "./login.css";
import LoginForm from "../../components/LoginForm";
import CisumBannerLogo from "../../assets/CISUM_LOGO_800_450_px.png";


const Login = () => {

    return (
        <div className={"login-background-design"}>
            <div className={'banner-container-logo'}>
                <img src={CisumBannerLogo} height={450} width={800} className={'banner-container-logo-left'}/>
                <img src={CisumBannerLogo} height={450} width={800} className={'banner-container-logo-right'}/>
            </div>
        <LoginForm/>
        </div>
    )
}

export default Login;