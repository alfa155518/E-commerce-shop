import { useRef } from "react";





const Pagination = ({productsPerPage,totalProducts,paginate}) => {

    // All Pagination Numbers 
    let pageNumbers = [];

    // Loop On All Pagination Numbers
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    // All Pagination Item  
    let containerList = useRef()

    return (
        <ul ref={containerList} className="pagination">
            {
                pageNumbers.map(number => (
                    <li key={number} onClick={(e) => paginate(number,containerList,e)}>
                        {number}
                    </li>
                ))
            }
        </ul>
    )

}


export default Pagination;