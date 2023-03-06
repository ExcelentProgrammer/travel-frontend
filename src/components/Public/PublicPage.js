import { Link, Route, Routes ,Navigate} from "react-router-dom"
import { About } from "../About/About"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { Login } from "../Login/Login"
import { HomePage } from "../Pages/HomePage"
import { Payment } from "../Payment/Payment"
import { SignUp } from "../SignUp/SignUp"
import { SingleTravel } from "../SingleTravel/SingleTravel"
import { Travel } from "../Travel/Travel"

export const PublicPage = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/travel/:id" element={<SingleTravel />} />
                <Route path="/travel/travel/:id" element={<SingleTravel />} />
                <Route path="/about" element={<About />} />
                <Route path="/travel" element={<Travel />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cabinet" element={<Navigate to={"/sign-up"} />} />
                <Route path="/travel/:id/travel/:id" element={<Navigate to={"/sign-up"} />} />
                <Route path="/travel/travel/:id/travel/:id" element={<Navigate to={"/sign-up"} />} />
                <Route path="/:title" element={<Navigate to={"/sign-up"} />} />
            </Routes>
            <Footer />
        </>
    )
}