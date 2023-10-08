import './Project.css'

import { useLoading } from '../Loader/useLoading';
import Loader from '../Loader/Loader'
const Project = () => {
    const isLoading = useLoading();

    return (

        <div className='bg-[#ffffff] dark:bg-inherit max-w-screen-xl mx-auto rounded-xl mb-10 shadow-md'>
            {isLoading ? <Loader></Loader> :

                <section className='project py-5'>
                    <h2 className="text-center dark:hidden text-4xl md:text-5xl font-bold mb-5" >My Projects</h2>
                    <h2 className="light hidden dark:block text-4xl md:text-5xl font-bold mb-5" >My Projects</h2>
                    <div className="grid grid-cols-6 gap-4 px-5 sm:px-10 lg:px-36">
                        <div className='h-80  col-span-6 box text-black w-full dark:text-white'>
                        </div>
                        <div className='h-60 col-span-6 md:col-span-3 box text-black dark:text-white'>
                        </div>
                        <div className='h-60 col-span-6 md:col-span-3 box text-black dark:text-white'>
                        </div>
                    </div>
                </section>

            }
        </div>
    );
};

export default Project;