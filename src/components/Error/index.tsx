import React from 'react';
import Logo from '../Nav/ViceLogo';
import styles from './Error.scss';

const Error: React.FC = () => {
    return (
        <div className={styles.errorContainer}>
            <Logo />
            <p>Error Loading Data</p>
        </div>
    )
};


export default Error;