import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function generateUniqueId() {
    const timestamp = new Date().getTime();
    const random = Math.random().toString(36).substring(2, 8);
    return `${timestamp}-${random}`;
}

const TransitionEffect = () => {
    const uniqueKey1 = generateUniqueId();
    const uniqueKey2 = generateUniqueId();
    const uniqueKey3 = generateUniqueId();
    const [isExiting, setIsExiting] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsExiting(true);
        const timeout = setTimeout(() => {
            setIsExiting(false);
        }, 800); // Set the timeout duration to match your exit animation duration
        return () => clearTimeout(timeout);
    }, [location.pathname]); // Trigger effect when location.pathname changes

    console.log('keys are ', uniqueKey1, uniqueKey2, uniqueKey3);
    console.log('here is the path', location.pathname);

    return (
        <>
            <AnimatePresence mode='wait'>
                {isExiting && (
                    <>
                        <motion.div
                            key={uniqueKey1}
                            className='fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-[#f83e4b]'
                            // initial={{ x: '100%', width: '100%' }}
                            // animate={{ x: '0%', width: '0%' }}
                            // exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}

                            initial={{ x: '0%', width: '0%' }}
                            animate={{ x: '100%', width: '100%' }}
                            exit={{ x: ["100%", "0%"], width: ["100%", "0%"] }}

                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        >
                        </motion.div>

                        <motion.div
                            key={uniqueKey2}
                            className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-[#facf5a]'
                            // initial={{ x: '100%', width: '100%' }}
                            // animate={{ x: '0%', width: '0%' }}
                            //exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}

                            initial={{ x: '0%', width: '0%' }}
                            animate={{ x: '100%', width: '100%' }}
                            exit={{ x: ["100%", "0%"], width: ["100%", "0%"] }}

                            transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
                        >
                        </motion.div>

                        <motion.div
                            key={uniqueKey3}
                            className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#42b883]'
                            // initial={{ x: '100%', width: '100%' }}
                            // animate={{ x: '0%', width: '0%' }}
                            //exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}

                            initial={{ x: '0%', width: '0%' }}
                            animate={{ x: '100%', width: '100%' }}
                            exit={{ x: ["100%", "0%"], width: ["100%", "0%"] }}

                            transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
                        >
                        </motion.div>

                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default TransitionEffect;
