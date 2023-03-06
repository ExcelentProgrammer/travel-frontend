import axios from "axios"
import {useEffect, useRef, useState} from "react"
import {Link, useNavigate, useParams} from "react-router-dom"
import "./payment.css"


export const Payment = () => {

    const elService = useRef("")
    const elUserCount = useRef("")
    const elPayment = useRef("")
    const elFirstName = useRef("")
    const elLastName = useRef("")
    const elAddress = useRef("")
    const elPhone = useRef("")
    const elEmail = useRef("")
    const elDate = useRef("")
    const elGender = useRef("")
    const elPaymeCheck = useRef("")

    const navigate = useNavigate()
    const {id} = useParams()
    const [data, setData] = useState({})
    const [isProgress, setProgress] = useState(false)

    const localData = window.localStorage.getItem("id")


    const hanldeForm = async (evt) => {
        evt.preventDefault()

        if (isProgress) {
            alert("Iltimos Kuting")
        } else if (elUserCount.current.value === "") {
            alert("Iltimos yo'lovchi sonini kiriting")
        } else if (elFirstName.current.value === "") {
            alert("Iltimos ismingizni kiriting")
        } else if (elLastName.current.value === "") {
            alert("Iltimos familyangizni kiriting")
        } else if (elAddress.current.value === "") {
            alert("Iltimos manzilingizni kiriting")
        } else if (elPhone.current.value < 11) {
            alert("Telefon raqam to'liq kiritilmadi")
        } else if (elDate.current.value === "") {
            alert("Iltimos tug'ilgan sanangizni kiriting")
        } else {

            setProgress(true)

            const formdata = new FormData()

            formdata.append("service", id)
            formdata.append("user_count", elUserCount.current.value)
            formdata.append("payment_type", elPayment.current.value)
            formdata.append("first_name", elFirstName.current.value)
            formdata.append("last_name", elLastName.current.value)
            formdata.append("addres", elAddress.current.value)
            formdata.append("phone", elPhone.current.value)
            formdata.append("gmail", elEmail.current.value)
            formdata.append("birth_day", elDate.current.value)
            formdata.append("gender", elGender.current.value)
            formdata.append("user_count", elUserCount.current.value)


            if (elPayment.current.value === "Payme") {
                const formData2 = new FormData()

                formData2.append("service", id)
                formData2.append("user_count", elUserCount.current.value)

                let data1 = await axios.post(
                    "https://travel.iprogrammer.uz/payme/create/", formData2, {
                        headers: {
                            "Authorization": "token " + window.localStorage.getItem("token",)
                        }
                    }
                )
                console.log(data1.data.pay_id)


                if (data1.data.pay_id !== undefined) {
                    window.localStorage.setItem("id", data1.data.pay_id)
                    formdata.append("pay_id", data1.data.pay_id)
                }


                if (data1.data.pay_url !== undefined) {
                    window.localStorage.setItem("payurl", data1.data.pay_url)
                }


            };

            // .then((data) => {

            await axios.post("https://travel.iprogrammer.uz/order/create/", formdata, {headers: {"Authorization": "token " + window.localStorage.getItem("token",)}})
            setProgress(false)
            // })
            // .catch((err) => console.log(err));
            if (elPayment.current.value === "Naqd") {
                window.location.replace("/cabinet")
            }
            if (elPayment.current.value === "Payme") {
                window.location.replace("/payme")
            }


        }

    }
    const userCountHandler = (e) => {
        let value = e.target.value
        if (value <= 0) {
            elUserCount.current.value = 1;
        }
    }
    return (
        <>
            <div className="container">
                <form onSubmit={hanldeForm} className="">
                    <div className="flex-list">
                        <div className="register-page">
                            <div className="container">
                                <div className="register">
                                    <div className="register__right bg-light mx-auto mt-5">
                                        <div className="p-5 ms-5 me-5">
                                            <h3 className="text-center pt-5">Buyurtma qilish</h3>
                                            <form className="register__form">
                                                <input className="payment-input" ref={elUserCount}
                                                       onInput={userCountHandler} defaultValue={"1"} required min={1}
                                                       type="number"
                                                       placeholder="Yo'lovchi soni"/>
                                                <select ref={elPayment} className="select-payment">
                                                    <option value="Naqd">Naqd To'lov</option>
                                                    <option value="Payme">Payme</option>
                                                </select>
                                                <input defaultValue={data.service} ref={elPaymeCheck} required
                                                       type="hidden" placeholder="Paymedan to'lash uchun narx"/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="register-page">
                            <div className="container">
                                <div className="register">
                                    <div className="register__right bg-light mx-auto mt-5">
                                        <div className="p-5 ms-5 me-5">
                                            <form className="register__form">
                                                <input className="payment-input" ref={elFirstName} required type="text"
                                                       placeholder="Ismingiz"/>
                                                <input className="payment-input" ref={elLastName} required type="text"
                                                       placeholder="Familyangiz"/>
                                                <input className="payment-input" ref={elAddress} required type="text"
                                                       placeholder="Address"/>
                                                <input className="payment-input" defaultValue={+998} ref={elPhone}
                                                       required type="number" placeholder="Phone"/>
                                                <input className="payment-input" ref={elEmail} type="email"
                                                       placeholder="Email"/>
                                                <input className="payment-input" ref={elDate} required type="date"
                                                       placeholder="Tu'gilgan sana"/>
                                                <select ref={elGender} className="select-payment">
                                                    <option value="Erkak">Erkak</option>
                                                    <option value="Ayol">Ayol</option>
                                                </select>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center pb-5 mt-4">
                        <button type="submit" className="start-btn">{isProgress ? "Loading..." : "Next step"}</button>
                    </div>
                </form>
            </div>
        </>
    )
}