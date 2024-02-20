
// import './Blog.scss'
import './Blog.css'

import { useLoading } from '../Loader/useLoading';
import Loader from '../Loader/Loader'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Blog = () => {
    const isLoading = useLoading();
    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mdabdulkaderjoni')
            .then(resp => resp.json())
            .then(data => {
                setBlogs(data.items);
            });
    }, [])
    // Function to sanitize HTML content and remove tags
    const sanitizeHTML = (html) => {
        const tempElement = document.createElement('div');
        tempElement.innerHTML = html;
        return tempElement.textContent.slice(0, 120) || tempElement.innerText.slice(0, 120) || '';
    };

    return (
        isLoading ? <Loader></Loader> :
            <div className='min-h-screen bg-[#f4f5f5] dark:bg-inherit max-w-screen-xl py-10  mx-auto rounded-xl mb-10  shadow-md'>


                <div className="py-5">
                    <h2 className="text-center dark:text-white text-4xl md:text-5xl font-bold mb-5" >My Blogs</h2>

                </div>

                <div className='flex flex-wrap'>
                    {blogs.map(blog => (

                        <a key={blog.guid} target='_blank' rel='noreferrer' href={blog.link}>
                            < div className="rounded overflow-hidden  flex flex-col max-w-xl mx-auto" >
                                {console.log(blog)}

                                <img className="w-full h-full relative" src='https://findingtom.com/images/uploads/medium-logo/article-image-00.jpeg' alt={blog.title} />

                                <div className="relative left-7 -mt-16 px-10 pt-5 pb-16 bg-white m-10">
                                    <a href="#" className="font-semibold text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">{blog.title}</a>
                                    <p className="text-gray-500 text-sm">
                                        {sanitizeHTML(blog.content)}
                                    </p>
                                    <p className="mt-5 text-gray-600 text-xs">By <a href="#" className="text-xs text-indigo-600 transition duration-500 ease-in-out">
                                        {blog.author}
                                    </a> </p>
                                </div>

                            </div>
                        </a>
                    ))
                    }
                </div>

            </div >
    );
};

export default Blog;