import React from 'react';
import styles from './Nav.scss';

const Nav: React.FC = () => {
    return (
        <nav className={styles.navContainer}>
            <svg className="logo-vice" height="28" viewBox="0 0 89 28" preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg" width="89"><title>VICE</title><path className="logo-vice__foreground" d="M88.986 4.14c.097.381-.33.747-.552 1.027-1.863 2.333-3.929 5.093-6.411 6.865.179.928.084 2.16-.24 2.84.65.828 1.34 1.612 1.742 2.684-.529 2.8-1.757 4.972-3.72 6.392-1.916 1.384-4.505 1.93-7.442 2.604-5.679 1.305-15.023 2.592-19.236-.79-4.562 2.668-13.781 3.02-18.048-.158-3.033 3.827-14.998 3.491-13.218-4.103-2.219 1.675-5.5 3.984-8.63 5.288-3.63 1.51-10.504 1.34-9.817-3.788.083-.611.342-.956.634-1.5-1.062-1.847-1.733-3.129-2.375-4.735C1.058 15.226.12 13.473.01 11.322-.22 6.746 3.358 3.845 6.9 2.482 8.707 1.787 10.175.78 11.965.275c2.675-.76 4.968.707 5.145 3.156 3.11-.92 6.897-1.935 11.004-1.341 3.27-2.535 9.656-.969 13.853.235.949.273 2.226.978 2.929.948.595-.024 1.67-.829 2.294-1.105C50.135.866 53.985-.52 58.194.195c.797.134 1.526.555 2.374.63.576.053 1.28-.127 1.9-.156C72.305.19 80.495 2.822 88.987 4.14zM61.44 3.826c-1.005.12-1.718 1.216-2.375 1.578.048-.005.093-.013.078-.08.12-.538.35-.967.396-1.577-5.268-1.85-10.395.854-14.168 2.919-3.018 1.65-5.71 3.59-7.6 5.523.683-1.16 1.408-2.308 2.217-3.392.82-1.101 1.733-2.097 2.455-3.077-1.578-.412-3.16-.847-4.752-1.185-2.262-.48-5.408-1.275-7.282-.236-.542.3-.986 1.039-1.504 1.105-.429.055-1.135-.257-1.663-.315-1.934-.215-3.714-.036-5.462.315-1.637.327-5.098.907-5.542 2.445-.284.988.35 1.945.238 2.922-.108.96-1.034 2.232-1.504 2.998-.575.94-1.16 1.772-2.138 2.209-.592-2.94.052-5.555.555-8.048.31-1.537.935-3.11.397-4.657-1.51-.209-2.781.982-4.276 1.577-2.808 1.12-5.935 2.141-6.332 5.367-.224 1.817.461 2.972.95 4.262a31.132 31.132 0 0 0 3.88 7.26c-.42.768-1.407.968-1.506 2.05.447.63 1.377.714 2.296.711 2.656-.006 4.834-1.338 6.807-2.446 4.296-2.41 7.182-6.119 10.213-9.627.532-.617.97-1.36 1.663-1.736.68 3.117-.643 4.784-1.585 7.338-.363.984-1.508 4.064-.95 5.523.612 1.605 5.823 1.675 7.204.634.696-.525.973-1.71 1.347-2.447.477-.948.89-1.766 1.266-2.604.021 3.457 2.597 4.472 5.382 5.208 5.92 1.56 11.89-1.227 15.12-3.155-.404 2.561.594 2.818 2.613 3.235 5.22 1.074 10.477-.165 14.723-1.185 3.893-.934 7.023-1.594 7.6-5.446-.623-.537-2.18-.47-3.245-.314-3.14.458-6.18 2.04-10.37 1.735-.765-.055-2.416-.321-2.535-.788-.184-.728 1.124-1.238 2.22-1.42 3.14-.53 7.68.005 10.209-.95 1.214-.456 2.679-1.774 2.532-3.234-.096-.986-1.387-1.502-2.612-1.577-3.464-.216-5.94 1.8-9.575 1.104.454-.572.536-1.515 1.106-1.972 2.659-.056 5.242.47 7.758.315 3.498-.218 5.47-1.687 7.125-3.63.177-.21.621-.435.475-.788-6.076-.922-14.359-3.363-21.85-2.447zM49.407 9.9c-.39 1.77-1.205 3.796-1.662 5.76 2.516.036 5.17-.476 7.757-.631.35-.466.522-1.11.713-1.736.519.732.884 2.102.396 3.156-3.929-.055-6.753 3.153-10.607 3.156-1.726.002-3.193-.987-2.376-2.92 1.154-2.725 4.016-4.629 5.779-6.785zm9.183-2.92c.74.841 2.36.805 3.324 1.422-1.301.333-2.939.331-4.117.787.278-.724.527-1.474.793-2.208z" fill="#000" fillRule="evenodd"></path></svg>
        </nav>
    )
};

export default Nav;
