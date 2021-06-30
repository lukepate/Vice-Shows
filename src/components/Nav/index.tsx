import React from 'react';
import Logo from './ViceLogo';
import styles from './Nav.scss';

const Nav: React.FC = () => {
    return (
        <nav data-testid='nav' className={styles.navContainer}>
            <Logo />
        </nav>
    )
};

export default Nav;
