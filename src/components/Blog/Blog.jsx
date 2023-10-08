
// import './Blog.scss'
import './Blog.css'

import { useLoading } from '../Loader/useLoading';
import Loader from '../Loader/Loader'
const Blog = () => {
    const isLoading = useLoading();

    return (
        <div className='min-h-screen bg-[#f4f5f5] dark:bg-inherit max-w-screen-xl py-10  mx-auto rounded-xl mb-10  shadow-md'>
            {isLoading ? <Loader></Loader> :

                <div className="py-5">
                    <h2 className="text-center dark:text-white text-4xl md:text-5xl font-bold mb-5" >My Blogs</h2>

                </div>

            }
        </div>
    );
};

export default Blog;