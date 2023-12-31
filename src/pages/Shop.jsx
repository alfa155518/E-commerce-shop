

import { addAndRemoveActiveClass } from "../sections/OurProduct";
import Data from "../data/products.json";
import Banner from "../components/Banner";
import '../css/shop.css'
import { useRef, useState } from "react";
import ProductShop from "../sections/ProductShop";
import Pagination from "../sections/Pagination";
import SearchShop from "../sections/SearchShop";




const Shop = ({addToCart}) => {

    // State Of Data
    let [products,setProducts] = useState(Data);

    let parentItemList = useRef()




    // Filtered By Category Name 
    const filteredByCategoriesName = (e) => {

        // Add Or remove Class Active 
        addAndRemoveActiveClass(e,parentItemList)

        // Target Name Of Element List
        let targetName = e.target.innerHTML;

        // Filtered PRoducts
        let filteredProduct = Data.filter((item) => item.category === targetName)

        // Set Filtered Products
        setProducts(filteredProduct)

        // Return All Products
        targetName === 'All' && setProducts(Data) 

    }



       // All Categories Nav Item
    const categoriesShop = [
        {
            itemName:'All',
            activeClass: "active"
        },
        {
            itemName:"Men's Sneaker"
        },
        {
            itemName:"Men's Pants"
        },
        {
            itemName:"Men's Boot"
        },
        {
            itemName:'Bag'
        },
        {
            itemName:'Cap'
        },
        {
            itemName:'Earphones'
        },
        {
            itemName:'Bottle'
        },
    ]





    // Pagination

    let [currentPage,setCurrentPage] = useState(1);

    // Number Of We Wont 
    const productsPerPage = 12;

    // Products Number
    let indexOfLastProduct = currentPage * productsPerPage;

    // Dynamic Number
    let indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    // Current Products To Show By Pagination
    let currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct)


    // Pagination Function 
    const paginate = (pageNumber,containerList,e) => {

        // Set Product By Pagination
        setCurrentPage(pageNumber)

        // Add Or Remove Class Active 
        addAndRemoveActiveClass(e,containerList)


    } 



    return (
        <>
        {/* ===== Banner Section ====== */}
        <Banner sectionName={'Our Shop Product'}/>

        <section className="shop">

            {/* ==== Nav Shop Categories===== */}
            <div className="nav-shop">
                <h2>Shop</h2>
                <ul className="categories-shop" ref={parentItemList}>
                {
                    categoriesShop.map((item,index) => {
                        return (
                            <li key={index} className={item.activeClass} onClick={(e) => filteredByCategoriesName(e)}>{item.itemName}</li>
                        )
                    })
                }
                </ul>
            </div>

            {/* ====== Shop Products Section ======= */}
            <section className="container-product-shop">
                <ProductShop products={currentProducts} addToCart={addToCart}/>
                <SearchShop products={Data}/>
            </section>

            {/* ===== Pagination Products ===== */}
            <Pagination
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            paginate={paginate}
            />
        </section>
        </>
    )

}



export default Shop;