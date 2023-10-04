import './Project.css'

import { useLoading } from '../Loader/useLoading';
import Loader from '../Loader/Loader'
const Project = () => {
    const isLoading = useLoading();

    return (

        <div className='min-h-screen'>
            {isLoading ? <Loader></Loader> :

                <section className='project'>
                    <h2 className="light" >My Projects</h2>
                    <div className='w-96 h-40  box'>

                    </div>
                </section>

            }
        </div>
    );
};

export default Project;