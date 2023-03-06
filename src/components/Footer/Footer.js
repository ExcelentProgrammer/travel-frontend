import "./footer.css"
import faceBook from "../../assets/icon/facebook.png"
import Twitter from "../../assets/icon/Twitter.png"
import linkedin from "../../assets/icon/linkedin.png"
import instagram from "../../assets/icon/instagram.png"

export const Footer = () => {
    return (
        <>
            <footer>
                <div id="contact" class="footer">
                    <div class="container">
                        <div class="row pdn-top-30">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <ul class="location_icon">
                                    <li> <a href="#"><img src={faceBook}/></a></li>
                                    <li> <a href="#"><img src={Twitter}/></a></li>
                                    <li> <a href="#"><img src={linkedin}/></a></li>
                                    <li> <a href="#"><img src={instagram}/></a></li>
                                </ul>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="Follow">
                                    <h3>Bog'lanish</h3>
                                    <span>Farg'ona viloyati<br/>Beshariq tumani,<br/>
<br/>
                                        +998 93 648 80 06</span>
                                    </div>
                                    </div>
                                        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                            <div class="Follow">
                                    <h1>USHBU SAHIFA "BESHSHAHARTRANS" MCHJ GA TEGISHLI</h1>
                                            </div>
                                        </div>
                                </div>
                                <div class="copyright mt-5">
                                    <div class="container">
                                <p>Copyright 2023 Sayt yaratuvchisi <a href="https://t.me/Tbtuzofficial">TBT group</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
        </>
    )
}