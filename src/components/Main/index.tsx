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

const Main: React.FC<MainProp> = ( {currentShows} ) => {
    const history = useHistory();
    const [activeShow, setActiveShow] = useState(currentShows[0]);

    useEffect(() => {
        const idParam = new URLSearchParams(window.location.search).get('id');
        const foundShow = findShow(idParam, currentShows);

        // removes false query param matches from url
        if (foundShow){
            setActiveShow(foundShow)
        } else {
            const url = new URL(window.location.href);
            const params = new URLSearchParams(url.search.slice(1));
            params.delete('id');
            window.history.replaceState({}, '', `${window.location.pathname}`);
        };

        history.listen((_location) => {
            const idParam = new URLSearchParams(window.location.search).get('id');
            const foundShow = findShow(idParam, currentShows);
            
            setActiveShow(foundShow ? foundShow : currentShows[0]); 
        });
    }, []);

    return (
        <div data-testid='Main' className={styles.container}>
            <Nav />
            <div className={styles.containerOrder}>
                <Slider activeShow={activeShow} currentShows={currentShows} />

                <Active activeShow={activeShow}/>
            </div>
        </div>
    )
};


export default Main;