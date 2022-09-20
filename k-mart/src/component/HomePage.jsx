import "./Homepage.css";
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.png"
import img6 from "../images/img6.jpg"
import img7 from "../images/img7.png"
import img8 from "../images/img8.png"
import img9 from "../images/img9.png"

function HomePage() {
    return (
        <>
            <div className="container" >
                
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" height={400}  alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" height={400}  alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={img3} className="d-block w-100" height={400}  alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src={img4} className="d-block w-100" height={400}  alt="" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/*------------------------------------------------------------ */}
                <div className="row py-3">
                    <div className="col-1 text-start">
                        <img src={img6} height={40} width={40} alt="" />
                    </div>
                    <div className="col-9 text-start">
                        <h3 className="text-start">Grocery</h3>
                    </div>
                    <div className="col-2">
                        {/* <Link className="btn btn-primary" to={"/grocery"}>View All</Link> */}
                    </div>
                </div>

                <div className="row">
                    {/* {grocery.slice(0,3).map((item) => (
                        <div className="col-4">
                            <div className="card " key={item.id}>
                                <div onClick={() => history.push(`/product/${item.id}`)}>

                                    <img src={item.imageUrl} height={150} width={25} className="card-img-top px-5" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text description-box overflow-auto">{item.description}</p>
                                        <h5>{item.rate} Rs.</h5>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    ))} */}
                </div>
                {/*------------------------------------------------------------ */}
                <div className="row py-3">
                    <div className="col-1 text-start">
                        <img src={img7} height={40} width={40} alt="" />
                    </div>
                    <div className="col-9 text-start">
                        <h3 className="text-start">Fruits</h3>
                    </div>
                    <div className="col-2">
                        {/* <Link className="btn btn-primary" to={"/fruits"}>View All</Link> */}
                    </div>
                </div>

                <div className="row">
                    {/* {fruits.slice(0,3).map((item) => (
                        <div className="col-4">
                            <div className="card " key={item.id}>
                                <div onClick={() => history.push(`/product/${item.id}`)}>

                                    <img src={item.imageUrl} height={150} width={25} className="card-img-top px-5" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text description-box overflow-auto">{item.description}</p>
                                        <h5>{item.rate} Rs.</h5>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    ))} */}
                </div>
                {/*------------------------------------------------------------ */}
                <div className="row py-3">
                    <div className="col-1 text-start">
                        <img src={img8} height={40} width={40} alt=""/>
                    </div>
                    <div className="col-9 text-start">
                        <h3 className="text-start">Vegetables</h3>
                    </div>
                    <div className="col-2">
                        {/* <Link className="btn btn-primary" to={"/vegetables"}>View All</Link> */}
                    </div>
                </div>
                <div className="row">
                {/* {vegetables.slice(0,3).map((item) => (
                        <div className="col-4">
                            <div className="card " key={item.id}>
                                <div onClick={() => history.push(`/product/${item.id}`)}>

                                    <img src={item.imageUrl} height={150} width={25} className="card-img-top px-5" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text description-box overflow-auto">{item.description}</p>
                                        <h5>{item.rate} Rs.</h5>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    ))} */}
                </div>
                {/*------------------------------------------------------------ */}
                <div className="row py-3">
                    <div className="col-1 text-start">
                        <img src={img9} height={40} width={40} alt=""/>
                    </div>
                    <div className="col-9 text-start">
                        <h3 className="text-start">Dairy Products</h3>
                    </div>
                    <div className="col-2">
                    {/* <Link className="btn btn-primary" to={"/dairyproducts"}>View All</Link> */}
                    </div>
                </div>
                <div className="row">
                {/* {dairyproducts.slice(0,3).map((item) => (
                        <div className="col-4">
                            <div className="card " key={item.id}>
                                <div onClick={() => history.push(`/product/${item.id}`)}>

                                    <img src={item.imageUrl} height={150} width={25} className="card-img-top px-5" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text description-box overflow-auto">{item.description}</p>
                                        <h5>{item.rate} Rs.</h5>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    ))} */}
                </div>

            </div>
        </>
    )
}

export default HomePage