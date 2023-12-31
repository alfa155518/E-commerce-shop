import { useParams } from "react-router-dom";
import Data from '../data/products.json'
import { useState } from "react";
import SearchShop from "../sections/SearchShop";
import '../css/single-product.css'
import Review from "../sections/Review";




const SingleProduct = () => {

    let [product,setProduct] = useState(Data)


    let productId = useParams();

        let filteredProduct = product.filter((product) => product.id === productId.id)

        let {name,seller,price,img} = filteredProduct[0]

        
        const desc ="Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources applications emerging psd template.";


    return (
        <section className="container-product-page">

            {/* ======== Single Product Section ========== */}
        <div className="single-product">
        <div className="product-img"><img src={img} alt="product-img"/></div>

        <div className="product-info">
            <h2 className="name">{name}</h2>
            <ul className="stars">
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star-half-stroke"></i></li>
                <li className="review"><span>(3 review)</span></li>
            </ul>
            <h3 className="price">${price}</h3>
            <strong className="seller">{seller}</strong>
            <article className="description">
            {desc}
            </article>
            <div className="product-property">
                <form>
                    <select className="sizes">
                        <option>Select Size</option>
                        <option>SM</option>
                        <option>MO</option>
                        <option>LO</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                    <select className="colors">
                        <option>Select Color</option>
                        <option>White</option>
                        <option>Blue</option>
                        <option>Green</option>
                        <option>Yellow</option>
                    </select>
                </form>
            </div>
        </div>
        {/* ====== Review Section ======== */}
        <Review/>
        </div>



        {/* ====== Popular Post Section ======== */}
        <SearchShop/>
        </section>
    )

}



export default SingleProduct;