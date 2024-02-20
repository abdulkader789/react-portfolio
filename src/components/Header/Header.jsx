import './Header.css';
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    return (
        <section className='h-screen flex justify-center w-full items-center'>
            <div className='flex flex-col md:flex-row relative justify-between items-center w-full  h-full'>
                <div className='md:w-1/2 w-full h-1/2 md:h-full relative  '>
                    <img className='h-full w-full object-cover  relative left-0 top-0 ' src='/src/images/profile_pic.jpg' alt="Profile" />
                    <div className="absolute inset-0 bg-green-500 opacity-50"></div>
                </div>
                <div className='flex justify-center items-center -top-10 h-full absolute inset-y-0 left-1/2 transform -translate-x-1/2'>
                    <div className='flex six-caps-regular text-6xl md:text-8xl'>
                        <div className='border rounded-l-full bg-white h-[200px] w-[100px] md:h-[300px] md:w-[150px] flex justify-center items-center'>
                            <h2 className='text-center hidden md:inline-block font-bold   uppercase'>abdul</h2>
                            <h2 className='text-center md:hidden  font-bold uppercase'>ab<br />dul</h2>
                        </div>
                        <div className='border rounded-r-full bg-gray-400 h-[200px] w-[100px] md:h-[300px] md:w-[150px] flex justify-center items-center'>
                            <h2 className='text-center hidden  md:inline-block font-bold  uppercase'>kader</h2>
                            <h2 className='text-center  font-bold md:hidden '>ka<br />der</h2>
                        </div>
                    </div>
                </div>

                <div className='md:w-1/2 w-full h-1/2 md:h-full items-center flex flex-col justify-center dark:bg-gray-700 bg-gray-100 md:pt-72'>

                    <div>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'web developer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'youtuber',
                                1000,
                                'app developer',
                                1000,
                                'blogger',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                            className='text-green-600 uppercase poppins-bold'
                        />
                    </div>
                    <div className='px-10 my-4'>
                        <h2 className='poppins-regular text-md dark:text-white'>Hi, my name is Abdul Kader and I am from Dhaka, Bangladesh. I am a MERN stack web developer and a final year university student pursuing B.Sc in CSE.</h2>
                    </div>

                    <button className="flex capitalize h-12 py-2 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-8 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                        <span>contact me</span>
                    </button>



                </div>
            </div>
        </section>


    );
};

export default Header;
