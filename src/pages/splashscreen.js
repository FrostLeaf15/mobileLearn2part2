import { useState, useEffect } from 'react';
import styles from '../styles/splashscreen.module.css';
import Image from 'next/image';
import logoPic from '../image/logo.png';

const SplashScreen = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const checkInternetConnection = () => {
        const isOnlineNow = navigator.onLine;
        setIsOnline(isOnlineNow);
        };

        window.addEventListener('online', checkInternetConnection);
        window.addEventListener('offline', checkInternetConnection);

        // Initial check when component mounts
        checkInternetConnection();

        return () => {
            window.removeEventListener('online', checkInternetConnection);
            window.removeEventListener('offline', checkInternetConnection);
        };
    }, []);

    useEffect(() => {
        if (isOnline) {
            // Redirect to login page if internet connection is available
            setTimeout(() => {
                window.location.href = '/menu'; // Adjust the URL as needed
            }, 2000); // Splash screen duration before redirect (2 seconds in this case)
        }
    }, [isOnline]);

    return (
        <div className="splash-screen">
            {isOnline ? (
                <div className={styles["container"]}>
                    <Image src={logoPic} alt="Logo" className={styles.logo} />
                    <h1 className={styles.text}>App Tugas</h1>
                </div>
            ) : (
            <div className="bad-connection">
                <h1>Bad Connection</h1>
                <p>Please check your internet connection and try again.</p>
            </div>
            )}
        </div>
    );
};

export default SplashScreen;
