import React from 'react';
import Logo from '../Nav/ViceLogo';
import styles from './Loading.scss';

const Loading: React.FC= () => {
    return (
        <div className={styles.loadingContainer}>
            <Logo />
            <div className={styles.loader}>
                <p>Loading...</p>
            </div>
        </div>
    )
};


export default Loading;