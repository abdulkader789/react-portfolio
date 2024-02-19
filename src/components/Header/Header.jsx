import './Header.css';

const Header = () => {
    return (
        <section className='lg:h-[100vh] flex justify-center w-full items-center'>
            <div className='flex relative justify-between items-center w-full  h-full'>
                <div className='w-1/2 relative h-full border-2 border-black'>
                    <img className='h-full w-full relative left-0 top-0  object-cover' src='https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png' alt="Profile" />
                    <div className="absolute inset-0 bg-green-500 opacity-50"></div>
                </div>
                <div className='flex justify-center items-center h-full absolute inset-y-0 left-1/2 transform -translate-x-1/2'>
                    <div className='flex'>
                        <div className='border rounded-l-full bg-white h-[300px] w-[150px] flex justify-center items-center'>
                            <h2 className='text-center text-3xl font-bold uppercase'>abdul</h2>
                        </div>
                        <div className='border rounded-r-full bg-gray-400 h-[300px] w-[150px] flex justify-center items-center'>
                            <h2 className='text-center text-3xl font-bold uppercase'>kader</h2>
                        </div>
                    </div>
                </div>

                <div className='w-1/2 h-full flex justify-center bg-gray-700 border-2 border-black'>
                    <p className='text-center'>Your description goes here...</p>
                </div>
            </div>
        </section>


    );
};

export default Header;
