
import {  useState } from 'react';
import {Link} from 'react-router-dom'
import productData from '../data/products.json'




const Landing = () => {


    let [productsName, setProductsName] = useState([])
    let [valueSearch, setValueSearch] = useState("")
    
    const handelSearch = (e) => {
        let inputValue = e.target.value;
        setValueSearch(inputValue)

        const filtered = productData.filter((product) => product.name.toLowerCase().includes(inputValue.toLowerCase()))

        setProductsName(filtered)
    }
    return (
        <>
        <section className="landing">
            <div className="container-landing">
                    </div>

            <div className="content">
            <h2>Search Your One Form <strong>Thousand</strong> Of Products</h2>
            <form>
                <input type="text" placeholder="Search Your Product" value={valueSearch} onChange={(e) => handelSearch(e)} />
                <i className="fa-solid fa-magnifying-glass"></i>
            </form>
            <p>We Have The LArgest Collection Of Products</p>
            </div>
        </section>
                <ul className='filtered-links'>
            {
                valueSearch && productsName.map((product,i) =>
                
                <li key={i}><Link to={`/E-commerce-shop/${product.id}`}>{product.name}</Link></li>
                
                )
            }
            </ul>
            </>
    )

}


export default Landing;