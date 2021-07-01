import React, { useEffect, useState } from 'react';
import { Show } from '../../types/show';
import { useHistory } from "react-router-dom";
import Slider from '../Slider'; 
import Active from '../Active'; 
import Nav from '../Nav'; 
import styles from './Main.scss';

interface MainProp {
    currentShows: Show[]
}

const findShow = (id: string | null, currentShows: Show[]) => {
    return currentShows.find((show: Show) => show.id === id);
};

const findIndex = (activeShowState: Show | null, currentShows: Show[]) => {
    return currentShows.findIndex((show: Show) => show === activeShowState);
};

const Main: React.FC<MainProp> = ( {currentShows} ) => {
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

            foundShow ? setActiveCardState(foundShow) : setActiveCardState(currentShows[0]);
            if (action === 'POP' && foundShow) setActiveCardState(foundShow);  
        });
    }, []);

    // matches active image to active image in slider
    useEffect(() => {
        const foundShow = findIndex(activeShowState, currentShows);
        setActiveIndex(foundShow);
    }, [activeShowState]);

    return (
        <div data-testid='Main' className={styles.container}>
            <Nav />
            <div className={styles.containerOrder}>
                <Slider activeIndex={activeIndex} currentShows={currentShows} />

                <Active activeShowState={activeShowState}/>
            </div>
        </div>
    )
};


export default Main;