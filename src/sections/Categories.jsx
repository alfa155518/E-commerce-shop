
import { categoryList } from "../data/Categories";






const Categories = () => {

    return (
        <section className="categories">
            <div className="header-section">
                <h2>Chose Any Products</h2>
                <p>By Everything with Us</p>
            </div>
            <div  className="categories-products">
                {
                    categoryList.map((item,i) => {
                        return(
                            <div  key={i} className="product">
                                <img src={item.imgUrl} alt={item.imgAlt} />
                                <div className="info">
                                <i className={item.iconName}></i>
                                <strong>{item.title}</strong>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )


}



export default Categories;