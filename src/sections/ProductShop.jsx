import { Link } from "react-router-dom";



const ProductShop = ({products,addToCart}) => {
    return (
        <div className="products">
        {
            products.map((product) => {
                return (
                    <div className="product" key={product.id}>
                        <img src={product.img} alt="product-img" />
                        <ul className="actions">
                            <li><Link to={`/shop/${product.id}`}><i className="fa fa-eye"></i></Link></li>
                            <li><i className="fa fa-heart"></i></li>
                            <li onClick={() => addToCart(product)}><i className="fa fa-cart-shopping"></i></li>
                        </ul>
                        <div className="details">
                            <h4>{product.name}</h4>
                            <ul className="stars">
                                <li><i className="fa fa-star fa-fw"></i></li>
                                <li><i className="fa fa-star fa-fw"></i></li>
                                <li><i className="fa fa-star fa-fw"></i></li>
                                <li><i className="fa fa-star fa-fw"></i></li>
                                <li><i className="fa fa-star-half fa-fw"></i></li>
                            </ul>
                            <span className="price">${product.price}</span>
                        </div>
                    </div>
                )
            })
        }
        </div>
    )
}


export default ProductShop;