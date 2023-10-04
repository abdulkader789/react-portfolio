import { useEffect, useState } from 'react';

export const useLoading = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching or any other asynchronous task
        setTimeout(() => {
            setIsLoading(false); // Set loading state to false when data is loaded
        }, 2000); // Simulated delay for demonstration
    }, []);

    return isLoading;
};
