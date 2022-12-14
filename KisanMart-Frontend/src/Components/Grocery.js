import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Login.css"
import { useHistory } from "react-router-dom";
import axios from "axios";
import { url } from "./Common/constants";
import Footer from "./Footer/Footer";
import swal from 'sweetalert'
const Grocery = () => {

    const [grocery, setGrocery] = useState([]);
    const [productId, setproductId] = useState("");
    const [quantity, setquantity] = useState(1);
    const history = useHistory();
    const token = JSON.parse(localStorage.getItem("jwttoken"));
    const HandleAddCart = (productId) => {
        if (token) {
            const itemcart = {
                productId,
                quantity
            }
            axios.post(url + "/customer/addtocart", itemcart, { headers: { "authorization": `Bearer ${token}` } })
                .then(response => {
                    console.log('Printing product data', response.data);
                    swal("Good job!", "product Added Successfully","success");
                    history.push("/cart");
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                });
        }
        else{
            alert("please Login First")
        }
    }

    useEffect(() => {
        init();
    }, [])
    const init = () => {
        const category = "Grocery"
        axios.get(url + "/getproducts/" + category, { headers: { "authorization": `Bearer ${token}` } })
            .then(response => {
                console.log('Printing product data', response.data);
                setGrocery(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });
    }

    

    return (
        <>
        <div>
            <div className="container">
                <div className="row g-3">
                    {grocery.map((item) => (
                        <div className="col-4">
                            <br/>
                            <div className="card " key={item.id}>
                                <div onClick={() => history.push(`/product/${item.id}`)}>

                                    <img src={item.imageUrl} height={150} width={25} className="card-img-top px-5" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text description-box overflow-auto">{item.description}</p>
                                        <h5>{item.rate} Rs.</h5>
                                    </div>
                                </div>
                                <button className="btn btn-primary" onClick={() => { HandleAddCart(item.id) }}>Add TO Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            <br/>
            <Footer/>
            </div>
        </>
    )
}
export default Grocery;