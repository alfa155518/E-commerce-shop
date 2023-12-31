
import { useState } from "react";
import Banner from "../components/Banner";
import '../css/shop.css'
import Modal from "../sections/Modal";


const CartShop = ({cartProducts,setCartProducts}) => {




    // Remove Target Product
    const removeSingleProduct = (product) => {
        let newProducts = cartProducts.filter((item) => {
            return (item.id !== product.id)
        })
        setCartProducts(newProducts)
    }


    // Clear Cart Product
    const clearCart = () => {
        setCartProducts([])
    }



    // Increase Product Number
    const increaseProductNumber = (targetProduct,element) => {

        // Quantity Of Product
        let totalQuantity = +targetProduct.target.parentElement.parentElement.querySelector('span').innerHTML++

        // Return  Target Product
        let exit = cartProducts.find((item) => {
            return item.id === element.id;
        });

        //Set Quantity Of Product 
        setCartProducts(
            cartProducts.map((currElement) => {
            return currElement.id === element.id
                ? { ...exit, quantity: exit.quantity + 1 }
                : currElement;
            })
        )
        // Return Quantity Of Product
        return (totalQuantity)
    }


    // Decrease Product Number
    const decreaseProductNumber = (targetProduct,element) => {

        // Check Of Quantity Of Product
        if (targetProduct.target.parentElement.querySelector('.quantity-value').innerHTML <= 1 ) {
            targetProduct.preventDefault()
        } else {
            // Quantity Of Product
            targetProduct.target.parentElement.parentElement.querySelector('span').innerHTML--
            // Return  Target Product
            let exit = cartProducts.find((product) => {
                return (product.id === element.id)
            })
            
            //Set Quantity Of Product 
                setCartProducts(
                cartProducts.map(currElement => {
                    return currElement.id === element.id
                    ? {...exit, quantity: exit.quantity - 1}
                    : currElement
                })
            )
        }
        
    }




// Set All Products Total Price 
let allProductCost = cartProducts.reduce((acc, curr) => {
    return parseInt(acc + curr.quantity * curr.price);
}, 0);


    // State Of Show Modal Payment
    let [statusModal,setStatusModal] = useState(false) 

    // Handle Show Modal
    const showModal = () => {
        setStatusModal(true)
        document.documentElement.querySelector('.modal').style.display = 'block'
    }




    return ( 
        

        // Check If There Product in Cart 
        cartProducts.length <= 0 ?

        <h2 className="head-section">Your Cart Is Empty</h2>

        :

        <>
        
            
            <Banner sectionName={'Cart Shop Page'}/>

            

        {/* ======= Cart Products ======= */}
    
        <section className="cart-shop">
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            cartProducts.map((product) => (
                                <tr key={product.id}>
                                <td className="product-img">
                                    <img src={product.img} alt="product-img" />
                                    <p className="name">{product.name}</p>
                                </td>
                                <td><span className="price">${product.price}</span></td>
                                <td>
                                    <div className="quantity">
                                    <div className="plus" onClick={(event) => increaseProductNumber(event,product)}>+</div>
                                    <span className="quantity-value">{product.quantity}</span>
                                    <div className="minus" onClick={(event) => decreaseProductNumber(event,product)}>-</div>
                                    </div>
                                    </td>
                                <td className="total-price">${product.price * product.quantity}</td>
                                <td className="remove-product" onClick={() => removeSingleProduct(product)}><i className="fa-solid fa-trash-can"></i></td>
                        </tr>
                            ))
                        }
                </tbody>
            </table>
            {/* ===== Action Cart ===== */}
            <div className="action-cart">
                <div className="checkout" onClick={() => showModal()}><span>Proceed To CheckOut</span></div>
                <div className="clear-cart" onClick={() => clearCart()}><span>Clear Cart</span></div>
                </div>

            {/* ========= More Action Cart ========== */}

            <div className="more-action-cart">
                <div className="left-side">
                    <h2>Calculate Shipping</h2>
                    <form>
                        <select>
                        <option>Egypt</option>
                            <option>United kingdom (UK)</option>
                            <option>Germany</option>
                            <option>India</option>
                        </select>
                        <select>
                            <option>Cairo</option>
                            <option>New York</option>
                            <option>London</option>
                            <option>New Delhi</option>
                        </select>
                    </form>
                </div>
                <div className="right-side">
                    <h2>Cart Totals</h2>
                    <ul>
                        <li>
                        <strong>Cart Subtotal</strong>
                            <span>${allProductCost}.00</span>
                        </li>
                        <li>
                            <strong>Shipping and Handing</strong>
                            <span>Free Shipping</span>
                        </li>
                        <li>
                            <strong>Order Total</strong>
                            <span>${allProductCost}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

            {/* ========= Modal Payment ========= */}
            <Modal statusModal={statusModal} setCartProducts={setCartProducts}/>

    </>

    )
    
    
}




export default CartShop;