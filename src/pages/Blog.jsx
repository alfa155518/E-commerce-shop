import { useState } from "react";
import Banner from "../components/Banner";
import BlogCard from "../sections/BlogsCard";
import blogList from "../data/blogdata";

import '../css/blog.css'
import SearchShop from "../sections/SearchShop";




const Blog = () => {

    let [blogs,setBlogs] = useState(blogList)

    return (
        <>
        <Banner sectionName={'Blog Page'}/>
        <section className="blog-container">

            {/* ======== All Blogs Card ========= */}
            <BlogCard blogs={blogs} setBlogs={setBlogs}/>

        </section>
        </>
    )

}



export default Blog;