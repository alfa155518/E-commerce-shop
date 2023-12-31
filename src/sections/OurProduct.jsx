


import { useRef, useState } from "react";
import { ProductData } from "../data/OurProductData";



// Function Add And Remove ClassList  Active On List Item
export const addAndRemoveActiveClass = (e,containerList) =>  {
    const allNames = containerList.current.querySelectorAll('li')

    allNames.forEach( li => {
        li.classList.remove('active')
        e.target.classList.add('active')
    })
    }




const OurProduct = () => {

    // State Of Products 
    const [products,setProduct] = useState(ProductData)


    const categoryProductName = useRef()





    // Filtered Products By Name 
    const filteredByName = (e) => {
        
        // Target Name
        let targetName = e.target.innerHTML
        
        // Return Filtered Product
        let filteredProduct =  ProductData.filter((product) => product.cate === targetName)
        
        // Set Filtered Products
        setProduct(filteredProduct)

        // Add And Remove Class List Function 
        addAndRemoveActiveClass(e,categoryProductName)

        // Return All Products
        targetName === 'All' && setProduct(ProductData) 
    }
    
    
    

    return (
        <section className="container-our-product main-style-section">
        <div className="product-nav">
        <h2>Our Product</h2>
        <ul className="products-name" ref={categoryProductName}>
            <li className="active" onClick={(e) => filteredByName(e)}>All</li>
            <li onClick={(e) => filteredByName(e)}>Shoes</li>
            <li onClick={(e) => filteredByName(e)}>Bags</li>
            <li onClick={(e) => filteredByName(e)}>Phones</li>
            <li onClick={(e) => filteredByName(e)}>Beauty</li>
        </ul>
        </div>

        <div className="our-product">
            {
                products.map((product) => {
                    return (
                        <div key={product.id} className="product">
                            <img src={product.imgUrl} alt="product-img"/>
                            <div className="rate">
                                <span>{product.cate}</span>
                                <ul className="stars">
                                    <li className="star"><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li className="star"><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li className="star"><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li className="star"><i className="fa-solid fa-star fa-fw"></i></li>
                                    <li className="star"><i className="fa-regular fa-star-half-stroke"></i></li>
                                </ul>
                            </div>
                            <div className="info">
                                <h3 className="product-title">{product.title}</h3>
                                <span className="product-brand">{product.brand}</span>
                                <span className="product-price">{product.price}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
            </section>
    )

}



export default OurProduct;