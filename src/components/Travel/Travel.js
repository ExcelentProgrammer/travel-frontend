import {useEffect, useState} from "react"
import {Cabinet} from "../Cabinet/Cabinet"
import {TravelCard} from "../TravelCard/TravelCard"
import "./travel.css"
import {Spinner} from "reactstrap";


export const Travel = () => {
    const [travel, setTravel] = useState({})
    const [isProgress, setProgress] = useState(false);
    useEffect(() => {

            setProgress(true)
            fetch("https://travel.iprogrammer.uz/services/all/", {
                headers: {
                    "Content-type": "application/json",
                },
            })
                .then(res => res.json())
                .then((data) => {
                    setTravel(data);
                    setProgress(false)
                })
                .catch(err => setProgress(false))


    }, [])

    return (
        <>

            <div id="travel" className="traveling">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="titlepage">
                                <h2>Sayohat Uchun Takliflarni Tanlang</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row row2">
                        {
                            isProgress
                                ?
                                <h1 className={"text-center"}>
                                    <Spinner color="warning" type="grow"/>
                                    <Spinner color="warning" type="grow"/>
                                    <Spinner color="warning" type="grow"/>
                                </h1>
                                :

                                travel.length && travel.map(e => (
                                    <>
                                        <TravelCard  key={e.id} item={e}/>

                                    </>
                                ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}