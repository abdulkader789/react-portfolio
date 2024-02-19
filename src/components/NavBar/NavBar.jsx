import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='p-10 fixed z-10 text-white w-full h-auto'>
            <div className="flex h-20 w-full bg-gray-800 py-4 px-6 rounded-l-full rounded-r-full">
                <div className='logo w-[15%] h-full flex justify-evenly items-center'>

                    <img className='w-10 mt-5 h-10 rounded-full' src='https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg' alt="logo" />

                    <h2 className='text-center uppercase font-bold'>abdul<br />kader</h2>
                </div>
                <nav className='w-[70%] h-full'>
                    <ul className='flex h-full w-full justify-evenly items-center font-proxima uppercase'>
                        <li>home</li>
                        <li>about</li>
                        <li>Resume</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>light</li>
                    </ul>

                </nav>
                <div className='w-[15%] h-full flex justify-center items-center'>
                    <button className='uppercase bg-white text-black px-8 py-2 rounded-l-full rounded-r-full'>resume</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
