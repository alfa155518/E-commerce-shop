import { useParams } from "react-router-dom";

import blogList from "../data/blogdata";
import { useState } from "react";
import SearchShop from "../sections/SearchShop";








const SingleBlog = () => {

    // Blogs Data
    const [allBlogs] = useState(blogList)

    let {id} = useParams()

    // Return Target Blog 
    let targetBlog = allBlogs.find((blog,i) => {
        return(blog.id === Number(id))
    })

    return (
        <section className="single-blog-container">

            {/* ========= Single Blog ======== */}
            <div className="single-blog">
                    <div className="blog-img"> <img src={targetBlog.imgUrl} alt={targetBlog.imgAlt} /></div>

                    {/* ============  Single Blog details =============== */}
                    <div className="details">
                        <h2>{targetBlog.title}</h2>
                        <ul className="meta-list">
                            {
                                targetBlog.metaList.map((list,i) => (
                                    <li key={i}><i className={list.iconName}></i> <span>{list.text}</span></li>
                                ))
                            }
                        </ul>
                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi magni sapiente libero nesciunt dicta non impedit similique unde nisi dolore voluptas voluptate quibusdam, quas eum, mollitia asperiores, doloremque atque quisquam. Optio ducimus nostrum numquam quae at doloremque animi saepe est ut accusantium. Mollitia aliquid laborum labore a iure, ratione veritatis.
                        </p>
                    </div>
                    {/* =======  Quote Section ======= */}
                    <div className="quote">
                    <i className="fa-solid fa-quote-left fa-border"></i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt vel illum et alias odio assumenda tempore? Deserunt velit culpa impedit! Eveniet hic at vero ipsa a, eius, delectus laborum modi voluptatibus esse perferendis tempora aut impedit porro veritatis debitis sequi.
                    </div>
                    <article className="blog-article">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis dolorem soluta quo totam quam id vero quod reprehenderit illo culpa, neque fugit? Tenetur consectetur cumque alias, ratione mollitia itaque repellat repudiandae libero suscipit, rerum quas? Alias nemo, asperiores architecto deserunt ipsum iure aliquam delectus suscipit incidunt nihil fuga assumenda expedita error quo culpa quos inventore possimus fugiat dolores? Quia, similique.
                    </article>
                    <img  className="details-img" src={require('../images/blog/single/01.jpg')} alt="" />
                    <article className="blog-article">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis dolorem soluta quo totam quam id vero quod reprehenderit illo culpa, neque fugit? Tenetur consectetur cumque alias, ratione mollitia itaque repellat repudiandae libero suscipit, rerum quas? Alias nemo, asperiores architecto deserunt ipsum iure aliquam delectus suscipit incidunt nihil fuga assumenda expedita error quo culpa quos inventore possimus fugiat dolores? Quia, similique.
                    </article>
                    <img className="details-img" src={require('../images/blog/11.jpg')} alt="" />

                            {/* ======== Socials Links ======== */}
                    <ul className="socials">
                            <li className="facebook"><i className="fa-brands fa-facebook"></i></li>
                            <li className="twitter"><i className="fa-brands fa-twitter"></i></li>
                            <li className="linkedin"><i className="fa-brands fa-linkedin"></i></li>
                            <li className="instagram"><i className="fa-brands fa-instagram"></i></li>
                            <li className="pinterest"><i className="fa-brands fa-pinterest"></i></li>
                    </ul>
            </div>

            {/* ========= Popular Blog ========== */}
            <aside>
                <SearchShop/>
            </aside>
        </section>
    )

}


export default SingleBlog;