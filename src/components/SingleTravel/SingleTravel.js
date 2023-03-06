import {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"
import "./singletravel.css"
import Skeleton from "react-loading-skeleton";

export const SingleTravel = () => {

    const {id} = useParams()
    const [data, setData] = useState({})
    const [isProgress, setProgress] = useState(false)
    useEffect(() => {

            setProgress(true)
            fetch(`https://travel.iprogrammer.uz/services/get/${id}`)
                .then(res => res.json())
                .then((data) => {
                    setData(data);
                    setProgress(false)
                })
                .catch(err => setProgress(false))

    }, [])

    return (
        <>
            <div className="single">
                <div className="container mt-5 single-flex d-flex align-items-center justify-content-around">
                    {
                        isProgress
                            ?
                            <Skeleton count={1} baseColor={"#f5f2f2"} width={400} height={400} enableAnimation={true}/>
                            :
                            <img src={data.img} alt="" width={400} height={400}/>
                    }
                    <div className="single__right bg-light">
                        <div className="m-5">
                            <h1>✅Nomi: {isProgress ? <Skeleton width={300} height={40}/> :
                                <strong>{data.name}</strong>}</h1>
                            <p>✅Tavsifi: {isProgress ? <Skeleton width={300} height={30}/> :
                                <strong>{data.description}</strong>}</p>
                            <p>✅Narxi: {isProgress ? <Skeleton width={300} height={30}/> :
                                <strong>{data.price}</strong>}</p>
                            <p>{isProgress ? <Skeleton width={"100%"} height={30}/> : <p>{data.description}</p>}</p>
                            <div className="mt-5">
                                <Link className="start-btn"
                                      to={`travel/${id}`}>{isProgress ? "Kuting..." : "Davom etish"}</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br/> <br/>
                {/*<div className="bg-dark h-100 mt-5">*/}
                {/*    <span className="text-dark">.</span>*/}
                {/*</div>*/}
            </div>
        </>
    )
}