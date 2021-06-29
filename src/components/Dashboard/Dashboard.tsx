import React, { useEffect, useState } from 'react';
import { Show, Action } from '../../types/show';
import { useHistory } from "react-router-dom";
import Slider from '../Slider/Slider'; 
import Nav from '../Nav/Nav'; 
import styles from './Dashboard.scss';

interface DashboardProp {
    currentShows: [Show]
}

const Dashboard: React.FC<DashboardProp> = ( {currentShows} ) => {
    const history = useHistory();
    const [activeShowState, setActiveCardState] = useState(currentShows[0]);

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
        <div data-testid='dashboard' className={styles.container}>
            <Nav></Nav>
            <div className={styles.containerOrder}>
                <Slider currentShows={currentShows} updateActiveShow={updateActiveShow} activeShow={activeShowState} />
                <div className={styles.activeShow}>
                    <img className={styles.activeImage} src={`https://viceimages.s3.amazonaws.com/${activeShowState.product_image_url}`} />


                    <span className={styles.activeDetailsContainer}>
                        <p className={styles.episodesText}>{activeShowState.episodes} Episodes</p>
                        <h1 className={styles.titleText}>{activeShowState.title}</h1>
                    </span>
                </div>
            </div>
        </div>
    )
};


export default Dashboard;