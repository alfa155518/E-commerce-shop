
import { ReviewList } from "../data/review";

const Review = () => {



    


    return (
        <section className="container-review">
        <h2>Reviews</h2>
        <div className="content">
            {
                ReviewList.map((review,index) => (
                    <div key={index} className="review">
                        <div className="instructor-img"><img src={review.imgUrl} alt={review.imgAlt} /></div>
                        <div className="info">
                            <div className="data">
                                <h3>{review.name}</h3>
                                <h4>{review.date}</h4>
                                <ul>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                    <li><i className="fa-solid fa-star"></i></li>
                                </ul>
                            </div>
                            <p className="message">{review.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        </section>
    )

}



export default Review;