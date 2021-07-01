import React from 'react';
import Logo from './ViceLogo';
import styles from './Nav.scss';
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
    return (
        <nav data-testid='nav' className={styles.navContainer}>
            <Link to={`/`}>
                <Logo />
            </Link>
        </nav>
    )
};

export default Nav;
