import {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import "./order.css";
import AOS from "aos";

import "aos/dist/aos.css";


export const OrderAll = ({item}) => {
    const [order, setOrder] = useState({})
    const [isProgress, setProgress] = useState(false);
    useEffect(() => {
        AOS.init()
        setProgress(true)
        fetch(`https://travel.iprogrammer.uz/services/get/${item.service_id}`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "token " + window.localStorage.getItem("token",)
            },
        })
            .then(res => res.json())
            .then((data) => {
                setOrder(data);
                setProgress(false)
            })
            .catch(err => setProgress(false))

    }, [])
    return (
        <>

            <div data-aos={"fade-up"} className="row row2 mt-3">
                <div className="order col-sm-12 col-md-6 col-lg-4 col-xl-3  border">
                    <p className="text-center  p-3">{order.name}</p>
                </div>
                <div className="order col-sm-12 col-md-6 col-lg-4 col-xl-3  border">
                    <p className="text-center  p-3">{item.user_count * order.price} so'm</p>
                </div>
                <div className="order col-sm-12 col-md-6 col-lg-4 col-xl-3  border">
                    <p className="text-center  p-3">{item.birth_day}</p>
                </div>


                {item.is_pay === true ?
                    <div className="order col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-success border">
                        <p className="text-center text-white p-3">To'lov qilingan</p>
                    </div> :
                    <div className="order col-sm-12 col-md-6 col-lg-4 col-xl-3 bg-info border">
                        <p className="text-center text-white p-3">
                            {item.pay_id ?
                                <a target={"_blank"} className="btn btn-dark"
                                   href={`https://checkout.paycom.uz/${item.pay_id}`}>To'lov
                                    qilish</a> : "to'lov qilinmagan"}
                        </p>

                    </div>}
            </div>
        </>
    )
}