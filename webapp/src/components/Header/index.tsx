import React from "react";
import "./components.modules.css";
import logo from "../../assets/CISUM_LOGO_2.svg"

const Header = () => {
    return (
        <div className={"container"}>
            <img className={"logo"} src={logo}/>
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