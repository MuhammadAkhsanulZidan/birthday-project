import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LoadingScreen({ onLoadingComplete }) {
    const [isLoading, setIsLoading] = useState(true);

    const handleAnimationComplete = () => {
        // Delay the disappearance of the loading screen
        setTimeout(() => {
            setIsLoading(false);
            onLoadingComplete(); // Notify parent component that loading is complete
        }, 1000); // Add delay after the last word fades in
    };

    return (
        <div className="container loading-screen">
            <motion.div className="loading-text">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >Today
                </motion.span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    is
                </motion.span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                >
                    your
                </motion.span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5, duration: 1 }}
                >
                    day
                </motion.span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.5, duration: 1 }}
                    onAnimationComplete={handleAnimationComplete}
                >
                    :)
                </motion.span>
            </motion.div>
            
        </div>
    );
}
