import { Link, Route, Routes } from "react-router-dom"
import { About } from "../About/About"
import { Cabinet } from "../Cabinet/Cabinet"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { Header2 } from "../Header2/Header2"
import { Login } from "../Login/Login"
import { HomePage } from "../Pages/HomePage"
import { Payme } from "../Payme/Payme"
import { Payment } from "../Payment/Payment"
import { SignUp } from "../SignUp/SignUp"
import { SingleTravel } from "../SingleTravel/SingleTravel"
import { Travel } from "../Travel/Travel"
export const PrivatePage = () => {

    return (


        <>
            <Header2 />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/travel/:id" element={<SingleTravel />} />
                <Route path="/travel/travel/:id" element={<SingleTravel />} />
                <Route path="/about" element={<About />} />
                <Route path="/travel" element={<Travel />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/order" element={<h1>Bu yerda sizning buyurtmalaringiz bo'ladi</h1>} />
                <Route path="/cabinet" element={<Cabinet/>} />
                <Route path="/travel/:id/travel/:id" element={<Payment/>} />
                <Route path="/travel/travel/:id/travel/:id" element={<Payment/>} />
                <Route path="/payme" element={<Payme/>} />
            </Routes>
            <Footer />
        </>
    )
}