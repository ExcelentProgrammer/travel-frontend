import "./hero.css"
import Banner from "../../assets/images/banner.jpg"
import "../../assets/css/responsive.css"

export const Hero = () => {
    return (
        <>
            <section>
                <div class="banner-main">
                    <img src={Banner} alt="#" />
                    <div class="container">
                        <div class="text-bg">
                            <h1>O'zbekiston<br/><strong class="white">bo'ylab sayohat</strong></h1>
                            <div class="button_section"> <a class="main_bt" href="#">Batafsil</a> </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}