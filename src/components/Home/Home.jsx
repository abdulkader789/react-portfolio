import { useLoading } from '../Loader/useLoading';
import Loader from '../Loader/Loader'
import About from '../About/About'
import './Home.css';
import Project from '../Project/Project'
import Skill from '../Skill/Skill'
import Blog from '../Blog/Blog'
import Contact from '../Contact/Contact'
import Header from '../Header/Header'
const Home = () => {
    const isLoading = useLoading();

    return (
        <div>
            {isLoading ? <Loader></Loader> :
                <>
                    <Header></Header>
                    <About></About>
                    <Project></Project>
                    <Skill></Skill>
                    <Blog></Blog>
                    <Contact></Contact>
                </>
            }

        </div >
    );
};

export default Home;
