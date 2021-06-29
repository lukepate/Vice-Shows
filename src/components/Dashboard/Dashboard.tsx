import React, { useEffect, useState } from 'react';
import { Show, Action } from '../../types/show';
import { useHistory } from "react-router-dom";
import Slider from '../slider/slider'; 
import Nav from '../nav/nav'; 
import styles from './dashboard.scss';

interface DashboardProp {
    currentShows: [Show]
}

const Dashboard: React.FC<DashboardProp> = ( {currentShows} ) => {

    const history = useHistory();
    const initShowState:Show = {
        id: currentShows[0].id, 
        title: currentShows[0].title, 
        episodes: currentShows[0].episodes, 
        product_image_url: currentShows[0].product_image_url
    };

    const [activeShowState, setActiveCardState] = useState(initShowState);

    const updateActiveShow = (id: string) => {
        const foundShow = currentShows.find((x) => x.id === id);
        if (foundShow) setActiveCardState(foundShow);
    };

    useEffect(() => {
            const urlParams = new URLSearchParams(window.location.search).get('id');
            const foundShow = currentShows.find((x: { id: string | null; }) => x.id === urlParams);
            
            if (foundShow) {
                updateActiveShow(foundShow.id); 
                setActiveCardState(foundShow);
            }
    }, []);

    useEffect(() => {
        history.listen((_location, action) => {
            const urlParams = new URLSearchParams(window.location.search).get('id');
            const foundShow = currentShows.find((show: { id: string | null; }) => show.id === urlParams);

            if (foundShow) updateActiveShow(foundShow.id);
            if (action === 'POP' && foundShow) updateActiveShow(foundShow.id);
        });
    }, []);

    return (
        <div className={styles.container}>
            <Nav></Nav>
            <Slider currentShows={currentShows} updateActiveShow={updateActiveShow} activeShow={activeShowState} />
            <div className={styles.activeShow}>
                <img className={styles.activeImage} src={`https://viceimages.s3.amazonaws.com/${activeShowState.product_image_url}`} />


                <span className={styles.activeDetailsContainer}>
                     <p className={styles.episodesText}>{activeShowState.episodes} Episodes</p>
                    <h1 className={styles.titleText}>{activeShowState.title}</h1>
                </span>
            </div>
        </div>
    )
};


export default Dashboard;