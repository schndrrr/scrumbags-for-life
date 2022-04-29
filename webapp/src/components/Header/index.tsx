import React from "react";
import "./components.modules.css";
import CisumLogo from "../CisumLogo";

const Header = () => {
    return (
        <div className={"container"}>
            <CisumLogo height={60} fill={"#F4951B"}/>
            <div className="buttonContainer">
                <div className="button">
                    Anmelden
                </div>
                <div className="button">
                    Suchen
                </div>
            </div>
        </div>
    )
}

export default Header;