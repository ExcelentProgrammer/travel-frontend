import "./Header.css"
import rasm1 from "../../assets/images/1.png"
import rasm2 from "../../assets/images/2.png"
import rasm3 from "../../assets/images/3.png"
import {Link, NavLink} from "react-router-dom"
import {useEffect, useState} from "react"
import {Korzina} from "../korzina/Korzina"

export const Header = () => {

    const [travel, setTravel] = useState({})

    useEffect(() => {
            fetch("https://travel.iprogrammer.uz/services/all/",)
                .then(res => res.json())
                .then((data) => setTravel(data))
                .catch(err => console.log(err))

    }, [])

    return (
        <>
            <header>
                <div class="header">
                    <div class="header_white_section">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="header_information">
                                        <ul>
                                            <li><img src={rasm1} alt="#"/> Beshariq shahar markazi</li>
                                            <li><img src={rasm2} alt="#"/> +998 93 648 80 06</li>
                                            <li><img src={rasm3} alt="#"/> admin@uzbektravel.uz</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                <div class="full">
                                    <div class="center-desk">
                                        <div class="logo">
                                            <Link to="/">
                                                <h1 class="logo__heading">Uzbektravel</h1>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                <div class="menu-area">
                                    <div class="limit-box">
                                        <nav class="main-menu">
                                            <ul class="menu-area-main">
                                                <li><NavLink className={({isActive}) =>
                                                    isActive
                                                        ? "active d-inline-block"
                                                        : "text-decoration-none"
                                                } to="/" href="#">Bosh sahifa</NavLink></li>
                                                <li><NavLink className={({isActive}) =>
                                                    isActive
                                                        ? "active d-inline-block"
                                                        : "text-decoration-none"
                                                } to="/about" href="#about">Haqida</NavLink></li>
                                                <li><NavLink className={({isActive}) =>
                                                    isActive
                                                        ? "active d-inline-block"
                                                        : "text-decoration-none"
                                                } to="/travel" href="#travel">Sayohat</NavLink></li>
                                                <li><NavLink className={({isActive}) =>
                                                    isActive
                                                        ? "active d-inline-block"
                                                        : "text-decoration-none"
                                                } to="/sign-up" href="#contact">Mening hisobim</NavLink></li>
                                                <li>
                                                    <button type="button" class="btn btn-light" data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal">
                                                        Savatcha
                                                    </button>
                                                    {travel.length && travel.map(e => (
                                                        <>
                                                            <Korzina key={e.id} item={e}/>
                                                        </>
                                                    ))}
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}