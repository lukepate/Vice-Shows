import React, { useEffect, useState } from 'react';
import { Show } from '../../types/show';
import { useHistory } from "react-router-dom";
import Slider from '../Slider'; 
import Nav from '../Nav'; 
import styles from './Dashboard.scss';
import { motion, AnimatePresence } from "framer-motion"

interface DashboardProp {
    currentShows: [Show]
}

const Dashboard: React.FC<DashboardProp> = ( {currentShows} ) => {
    const history = useHistory();
    const [activeShowState, setActiveCardState] = useState(currentShows[0]);
    const [fadeDirection, setFadeDirection] = useState(true);

    const foundShowIndex = currentShows.findIndex((show: Show) => show === activeShowState);
    const [currentIndex, setCurrentIndex] = useState(foundShowIndex);

    const updateActiveShow = (id: string) => {
        const foundShow = currentShows.find((x) => x.id === id);
        if (foundShow) setActiveCardState(foundShow);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search).get('id');
        const foundShow = currentShows.find((x: Show) => x.id === urlParams);

        // removes false query params
        if(!foundShow) {
            const url = new URL(window.location.href)
            const params = new URLSearchParams(url.search.slice(1))
            params.delete('id')
            window.history.replaceState({}, '', `${window.location.pathname}`)
        };

        if (foundShow) {
            updateActiveShow(foundShow.id); 
            setActiveCardState(foundShow);
        };

        history.listen((_location, action) => {
            const urlParams = new URLSearchParams(window.location.search).get('id');
            const foundShow = currentShows.find((show: Show) => show.id === urlParams);

            if (foundShow) updateActiveShow(foundShow.id);
            if (action === 'POP' && foundShow) updateActiveShow(foundShow.id);
        });
    }, []);

    // matches active image to active image in slider
    useEffect(() => {
        const foundShow = currentShows.findIndex((show: Show) => show === activeShowState);
        foundShow >= currentIndex ? setFadeDirection(false) : setFadeDirection(true);
        
        setCurrentIndex(foundShow);
    }, [activeShowState]);

    const left = { opacity: 0, x: -400};
    const right = { opacity: 0, x: 400};

    return (
        <div data-testid='dashboard' className={styles.container}>
            <Nav />
            <div className={styles.containerOrder}>
                <Slider currentIndex={currentIndex} currentShows={currentShows} />

                <div className={styles.activeShow}>
                    <AnimatePresence>
                        <motion.img
                            className={styles.activeImage} 
                            key={`https://viceimages.s3.amazonaws.com/${activeShowState.product_image_url}`}
                            src={`https://viceimages.s3.amazonaws.com/${activeShowState.product_image_url}`}
                            initial={ fadeDirection === true ? left : right }
                            animate={{ opacity: 1,  x: 0}}
                            exit={{opacity: 0, display: "none"}}
                        />
                    </AnimatePresence>
                </div>

                <div className={styles.activeTextContainer}>
                    <div className={styles.activeDetailsContainer}>
                        <p className={styles.episodesText}>{activeShowState.episodes} Episodes</p>
                        <h1 className={styles.titleText}>{activeShowState.title}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Dashboard;