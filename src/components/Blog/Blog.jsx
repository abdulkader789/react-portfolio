
// import './Blog.scss'
import './Blog.css'

import { useLoading } from '../Loader/useLoading';
import Loader from '../Loader/Loader'
const Blog = () => {
    const isLoading = useLoading();

    return (
        <div className='min-h-screen'>
            {isLoading ? <Loader></Loader> :

                <div className="py-5">
                    <h2 className="text-center dark:text-white text-4xl md:text-5xl font-bold mb-5" >My Projects</h2>

                </div>

            }
        </div>
    );
};

export default Blog;