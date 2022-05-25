import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./imprint.css";
import CISUM_Team from "../../assets/Team.png"


const Imprint = () => {

    return (
        
            <section className={'content'}>
                <Header searchActive={false}/>
                <div className={'imprint-container flex-col'}>
                    <div className={'flex-col'}>
                        <h1>IMPRESSUM</h1>

                            <h3 className={"imprint-team-heading"}>Das Team</h3>

                            <div className={"imprint-team-block"}>
                                <div className={"imprint-team-container"}>
                                     <div className={"imprint-team-case"}>
                                         <p className={"imprint-team-name"}>Geschäftsführung: <br/> <b>Tillman Koch</b></p>
                                         <div className={"imprint-team-img-block"}>
                                            <img src={CISUM_Team} height={250} width={270}/>
                                         </div>
                                     </div>
                                     <div className={"imprint-team-case"}>
                                         <p className={"imprint-team-name"}> Designerin/Frontend: <br/> <b>Ilse Löhr</b></p>
                                         <div className={"imprint-team-img-block"}>
                                             <img src={CISUM_Team} height={250} width={270}/>
                                         </div>
                                     </div>
                                      <div className={"imprint-team-case"}>
                                         <p className={"imprint-team-name"}>Frontend: <br/> <b>Niklas Dreger</b></p>
                                          <div className={"imprint-team-img-block"}>
                                              <img src={CISUM_Team} height={250} width={270}/>
                                          </div>
                                      </div>
                                </div>
                                <div className={"imprint-team-container"}>
                                    <div className={"imprint-team-case"}>
                                         <p className={"imprint-team-name"}>Backend: <br/> <b>Johann Schneider</b></p>
                                        <div className={"imprint-team-img-block"}>
                                            <img src={CISUM_Team} height={250} width={270}/>
                                        </div>
                                    </div>
                                    <div className={"imprint-team-case"}>
                                        <p className={"imprint-team-name"}>Backend: <br/> <b>Johann Georg Nitzsche</b></p>
                                        <div className={"imprint-team-img-block"}>
                                            <img src={CISUM_Team} height={250} width={270}/>
                                        </div>
                                    </div>
                                    <div className={"imprint-team-case"}>
                                            <p className={"imprint-team-name"}>Backend: <br/> <b>Florian Hager</b></p>
                                        <div className={"imprint-team-img-block"}>
                                            <img src={CISUM_Team} height={250} width={270}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={"imprint-text-container"}>
                            <h5 className={"imprint-text"}>CISUM: "Where words leave off, music begins."</h5>
                        </div>
                        <div className={"imprint-text-container"}>
                            <h6 className={"imprint-text"}>Musikstadt, Musikplatz 33, 012345, Deutschland <br/>
                            Tel: 049 83754265<br/>
                                E-Mail: info@cisum.de <br/></h6>
                        </div>
                        <div className={"imprint-text-container"}>
                            <h6 className={"imprint-text"}> © CIMSUM Copyright, registriert in Deutschland (eingetragene Nummer: 08130873, eingetragener Firmensitz: MS,  Musikstadt, Musikplatz 33, 012345, Deutschland </h6>
                        </div>
                </div>

                <Footer />
            </section>
        
    )
}

export default Imprint;
