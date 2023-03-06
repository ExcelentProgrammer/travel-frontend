import { Link } from "react-router-dom"

export const Korzina = ({item}) => {
    return (
        <>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content bg-dark">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Savatcha</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            <Link className="d-flex" to={`travel/`}>
                                <img src={item.img} alt="" width={50} height={50} />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </Link>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}