import axios from "axios"
import {useEffect, useRef, useState} from "react"
import {OrderAll} from "../orderAll/OrderAll"
import "./cabinet.css"

const localId = window.localStorage.getItem("localId")
export const Cabinet = ({data}) => {

    const [travel, setTravel] = useState({})
    const [me, setMe] = useState({})
    const [order, setOrder] = useState({})
    const [servis, setServis] = useState({})
    const [isProgress, setProgress] = useState(false)
    const [myInterval, setMyInterval] = useState({})


    const elPhone = useRef("")
    const elUsername = useRef("")
    const elLastname = useRef("")
    // const elConPassword = useRef("")
    const handleSecurity = (evt) => {
        evt.preventDefault()

        const formData = new FormData()

        formData.append("phone", elPhone.current.value)
        formData.append("lastname", elLastname.current.value)
        formData.append("username", elUsername.current.value)

        axios.put(`https://travel.iprogrammer.uz/accounts/users/me/`, formData, {
            headers: {
                "Authorization": "token " + window.localStorage.getItem("token",)
            }
        }).then(data => {
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`https://travel.iprogrammer.uz/accounts/users/me/`, {
            headers: {
                "Authorization": "token " + window.localStorage.getItem("token",)
            }
        }).then(data => setMe(data.data)).catch(err => console.log(err))
    }, [])


    useEffect(() => {
        fetch("https://travel.iprogrammer.uz/accounts/users/me/", {
            headers: {
                "Content-type": "application/json",
                "Authorization": "token " + window.localStorage.getItem("token",)
            },
        })
            .then(res => res.json())
            .then((data) => setMe(data))
            .catch(err => console.log(err))

    }, [])

    useEffect(() => {
        setProgress(true)
        fetch(`https://travel.iprogrammer.uz/order/all/`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "token " + window.localStorage.getItem("token",)
            },
        })
            .then(res => res.json())
            .then((data) => {
                setOrder(data.reverse());
                setProgress(false)


                setMyInterval(setInterval(() => {
                    if (data.length !== 0) {
                        data.map(e => {
                            if (e.is_pay != true && e.pay_id != null) {

                                axios.post(`https://travel.iprogrammer.uz/payme/check/${e.pay_id}/`)
                                    .then((data) => {
                                        if (data.data.res == true) {
                                            window.location.reload()
                                        }
                                    })
                                    .catch((err) => console.log(err))
                            }
                        });
                    }
                }, 5000));


            })
            .catch(err => setProgress(false))
        return () => {
            clearInterval(myInterval);
        }


    }, [])


    const logout = () => {
        window.localStorage.clear();
        window.location.replace("/sign-up")
    }
    return (
        <>
            <div id="travel" className="traveling">
                <div className="container">
                    <p>Salom <strong>{me.username}</strong> ishlar yaxshimi</p>
                    <div>
                        <div className={"d-flex justify-content-between"}>
                            <h2>Sozlamalar</h2>
                            <button onClick={logout} className={"btn btn-danger"}>Chiqish</button>
                        </div>
                        <form onSubmit={handleSecurity} className="register__form">
                            <ul className="form__list">
                                <li className="form__item">
                                    <input disabled className="form__input" ref={elUsername} type="text"
                                           defaultValue={me.username}/>
                                </li>
                                <li className="form__item">
                                    <input disabled className="form__input" ref={elPhone} type="text"
                                           defaultValue={me.phone}/>
                                </li>
                                <li className="form__item">
                                    <input disabled className="form__input" ref={elLastname} type="text"
                                           defaultValue={me.first_name}/>
                                </li>
                            </ul>
                            {/*<div className="text-center mt-3">*/}
                            {/*    <button className="start-btn">O'zgartirish</button>*/}
                            {/*</div>*/}
                        </form>
                    </div>
                    <h2>Buyurtmalaringiz</h2>
                    <div className="row row2 mt-4">
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3  border">
                            <p className="text-center  p-3">Nomi</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3  border">
                            <p className="text-center p-3">Narxi</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3  border">
                            <p className="text-center p-3">Sanasi</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3  border">
                            <p className="text-center p-3">To'lov</p>
                        </div>
                    </div>

                    {isProgress ? <h1 className={"text-center text-success"}>Kuting...</h1>
                        :
                        order.length && order.map(e => (
                            <>
                                <OrderAll key={e.id} item={e}/>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}