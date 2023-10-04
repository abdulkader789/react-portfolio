
// import './Blog.scss'
import './Blog.css'

import { useLoading } from '../Loader/useLoading';
import Loader from '../Loader/Loader'
const Blog = () => {
    const isLoading = useLoading();

    return (
        <div className='blog-container min-h-screen'>
            {isLoading ? <Loader></Loader> :

                <div className="card">
                    <p>My Blogs</p>
                </div>

            }
        </div>
    );
};

export default Blog;