import {json, Link} from "react-router-dom"
import AOS from "aos";


export const TravelCard = ({item}) => {
    const btnId = item.id
    AOS.init();

    const handleBtn = () => {
        if (btnId === item.id) {
            let korzina;
            korzina = window.localStorage.setItem("korzina", JSON.stringify(item));
        }
    }

    return (
        <>
            <Link to={`travel/${item.id}`} data-aos={"fade-up"} class="col-xl-3 col-lg-3 col-md-6 col-sm-12 orders-all">
                <div  className="traveling-box">
                    <i><img src={item.img} alt="icon" className={"order-image"} width={100} height={100}/></i>
                    <h3>{item.name}</h3>
                    <p>Price: {item.price} so'm</p>
                    <div className="read-more">
                        <a onClick={handleBtn} className="btn-read" dataset-btn-id={btnId} href="#">Band qilib qo'yish</a>
                    </div>
                </div>
            </Link>

        </>
    )
}