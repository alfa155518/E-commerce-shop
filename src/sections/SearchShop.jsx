


import { useState } from "react";
import { postList } from "../data/postList";
import { Link } from "react-router-dom";






const SearchShop = ({products}) => {

    // State Value Of Input
    let [inputValue, setInputValue] = useState('')
    let [resultProductsSearch, setResultProductsSearch] = useState([])


    // Handel Search Products By Categories
    const handelProductsSearch = (e) => {

        let targetInputValue = e.target.value;
        
        setInputValue(targetInputValue)
        
        let filteredProduct = products.filter((product) => product.name.toLowerCase().includes(targetInputValue.toLowerCase()))

        setResultProductsSearch(filteredProduct)

    }


    return (
        <section className="shop-right-side">
        <div className="container-search">
        <form>
            <input type="text" placeholder="search" value={inputValue} onChange={(e) => handelProductsSearch(e)}/>
            <i className="fa fa-magnifying-glass"></i>
        </form>
        </div>

        {/* ====== Filtered Products ====== */}

        {
        inputValue &&
        resultProductsSearch.map((product) => (
            <div key={product.id} className="product">
                <div className="product-img"><img src={product.img} alt='product-img' /></div>
                <div className="details">
                    <h5><Link to={`/shop/${product.id}`}>{product.category}</Link></h5>
                    <span>${product.price}</span>
                </div>
            </div>
        ))
        }


        {/* ===== Popular Post Section ===== */}
        <div className="popular-post">
            <h2>Popular Post</h2>
        {
            postList.map((post) => (
                <div key={post.id} className="post">
                    <div className="post-img"><img src={post.imgUrl} alt={post.imgAlt} /></div>
                    <div className="details">
                        <h5 className="title">{post.title}</h5>
                        <strong className="date">{post.date}</strong>
                    </div>
                </div>
            ))
        }
        </div>
        </section>
    )

}


export default SearchShop;