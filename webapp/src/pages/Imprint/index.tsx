import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./imprint.css";


const Imprint = () => {

    return (
        
            <section className={'content'}>
                <Header searchActive={false}/>
                <div className={'imprint-container.flex'}> 
                    <div className={'imprint-main'}> 
                        <div className={'imprint-text'}>
                            IMPRESSUM <br/><br/><br/><br/><br/>
                            CISUM Limited <br/>
                            Ort, Straße, Land <br/>
                            Tel: <br/>
                            E-Mail: support@bestmusiceuw.com <br/>
                            © Gymshark Limited, registriert in England (eingetragene Nummer: 08130873, eingetragener Firmensitz: GSHQ, Blythe Valley Park, 3 Central Boulevard, Solihull, B90 8AB, England
                        </div>
                    </div>
                </div>

                <Footer />
            </section>
        
    )
}

export default Imprint;
