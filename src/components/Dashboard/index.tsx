import React, { useEffect, useState } from 'react';
import { Show } from '../../types/show';
import { useHistory } from "react-router-dom";
import Slider from '../Slider'; 
import Nav from '../Nav'; 
import styles from './Dashboard.scss';
import { motion } from "framer-motion"

interface DashboardProp {
    currentShows: Show[]
}

const findShow = (id: string | null, currentShows: Show[]) => {
    return currentShows.find((show: Show) => show.id === id);
};

const findIndex = (activeShowState: Show | null, currentShows: Show[]) => {
    return currentShows.findIndex((show: Show) => show === activeShowState);
};

const Dashboard: React.FC<DashboardProp> = ( {currentShows} ) => {
    const history = useHistory();
    const [activeShowState, setActiveCardState] = useState(currentShows[0]);
    const [activeIndex, setActiveIndex] = useState(findIndex(activeShowState, currentShows));

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search).get('id');
        const foundShow = findShow(urlParams, currentShows);

        // removes false query param matches from url
        if(!foundShow) {
            const url = new URL(window.location.href);
            const params = new URLSearchParams(url.search.slice(1));
            params.delete('id');
            window.history.replaceState({}, '', `${window.location.pathname}`);
        };

        if(foundShow) setActiveCardState(foundShow);

        history.listen((_location, action) => {
            const urlParams = new URLSearchParams(window.location.search).get('id');
            const foundShow = findShow(urlParams, currentShows);

            if (foundShow) setActiveCardState(foundShow);
            if (action === 'POP' && foundShow) setActiveCardState(foundShow);  
        });
    }, []);

    // matches active image to active image in slider
    useEffect(() => {
        const foundShow = findIndex(activeShowState, currentShows);
        setActiveIndex(foundShow);
    }, [activeShowState]);

    return (
        <div data-testid='dashboard' className={styles.container}>
            <Nav />
            <div className={styles.containerOrder}>
                <Slider activeIndex={activeIndex} currentShows={currentShows} />

                <div className={styles.activeShow}>
                    <motion.img
                        className={styles.activeImage} 
                        key={`https://viceimages.s3.amazonaws.com/${activeShowState.product_image_url}`}
                        src={`https://viceimages.s3.amazonaws.com/${activeShowState.product_image_url}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5 }}
                    />
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