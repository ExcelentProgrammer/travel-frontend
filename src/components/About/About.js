import "./about.css"
import Plane from "../../assets/images/plane-img.png"

export const About = () => {
    return (
        <>
            <div id="about" class="about">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 ">
                            <div class="titlepage">
                                <h2>Sizning Ishonchli Sayohat Agentligingiz</h2>
                                <span>Turlar tugaguniga qadar onlayn xarid qiling</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div class="about-box">
                                    <p> <span>Shunday qilib, siz sayohatni eng past narxda bron qilasiz va vaqtni tejaysiz.
                                        Ekskursiyalar tezda tugaydi. Bizning
                                        saytimizdan yonayotgan turlarni sotib olishning o'rtacha tezligi 60 minut. Bu vaqt ichida siz
                                        sayyohlik agentligining
                                        ofisiga borishga vaqtingiz bo'lmaydi. Onlayn orzular sayohatini bron qiling-eng past narxni
                                        qo'lga kiritish uchun vaqt
                                        toping!</span></p>
                                    <div class="palne-img-area">
                                        <img src={Plane} alt="images" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#">Batafsil</a>
                </div>
            </div>
        </>
    )
}