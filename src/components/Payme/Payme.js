import { Link } from "react-router-dom"

const localData = window.localStorage.getItem("payurl")

export const Payme = () => {
    return (
        <>
            <div className="text-center">
                <Link target={"_blank"} to={`${localData}`}>
                    <img src="https://logobank.uz:8005/media/logos_png/payme-01.png" alt="" width={300} height={300} />
                    Payme orqali to'lash
                    </Link>
            </div>
        </>
    )
}