import { Link } from "react-router-dom";







const BlogCard = ({blogs,setBlogs}) => {


    return (
    <div className="all-blogs">
        {
            blogs.map((blog) => (
                <div key={blog.id} className="blog-card">
                <div className="blog-img"> <img src={blog.imgUrl} alt={blog.imgAlt}/></div>

                <div className="details">
                <h3><Link to={`/blog/${blog.id}`}>{blog.title}</Link></h3>

                <div className="meta-list-container">
                {
                    blog.metaList.map((list,i) => (
                        
                        <ul key={i} className="meta-list">
                        <li><i className={list.iconName}></i> <strong>{list.text}</strong></li>
                        </ul>
                        )
                        )
                    }
                    </div>

                <p className="blog-description">{blog.desc}</p>


                    <ul className="blog-actions">
                    <li><strong>Read More  <i className="fa fa-up-right-from-square"></i> </strong></li>
                    <li><i className="fa-solid fa-comment"></i> <span>{blog.commentCount}</span></li>
                    </ul>


                </div>
                </div>
            ))
        }
    </div>
    )

}


export default BlogCard;