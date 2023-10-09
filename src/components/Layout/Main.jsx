// Main.jsx
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import TransitionEffect from '../TransitionEffect/TransitionEffect';

const Main = () => {

    return (

        <div className='dark:bg-[#131415] bg-blend-soft-lighten'>
            <NavBar></NavBar>
            <TransitionEffect />
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
