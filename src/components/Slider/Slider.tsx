import React, { useEffect, useState } from 'react';
import { Show } from '../../types/Show';
import { Link } from "react-router-dom";
import styles from './Slider.scss';

interface SliderProps {
    currentShows: Show[];
    activeShow: Show;
    updateActiveShow: (id: string) => void;
}

const Slider: React.FC<SliderProps> = ({ currentShows, updateActiveShow, activeShow }) => {
    const foundShowIndex = currentShows.findIndex((show: { id: string | null; }) => show === activeShow);
    const [currentIndex, setCurrentIndex] = useState(foundShowIndex);
 
    const cardClickHandler = (index: number) => {
        updateActiveShow(currentShows[index].id);

        // prev
        if (currentIndex > index && index >= 0) {
            setCurrentIndex(currentIndex - (currentIndex - index));
            updateActiveShow(currentShows[index].id);
        }  
        
        // // next
        if (currentIndex < index && index <= currentShows.length) {
            setCurrentIndex(currentIndex + (index - currentIndex));
            updateActiveShow(currentShows[index].id);
        }  
    }

    useEffect(() => {
        const foundShow = currentShows.findIndex((show: { id: string | null; }) => show === activeShow);
        setCurrentIndex(foundShow);
    }, [activeShow]);

    const imgHelper = (file: string) => {
        return `./${file.split('.')[0]}`;
    }


    return (
        <div className={styles.showContainer}>
            <div data-testid='slider' className={styles.sliderContainer}>
                {currentShows.map((show: Show, index: number) => {
                    return (
                        <Link className={styles.link} key={show.id} to={`/?id=${show.id}`} onClick={() => cardClickHandler(index)} >                            
                            <div className={styles.show}>
                                    <div>
                                    <img key={index} className={currentIndex !== index ? styles.showStyle : styles.active } src={`https://viceimages.s3.amazonaws.com/${show.product_image_url}`} />
                                    </div>

                                    <div className={styles.showIndex}> {index + 1}</div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
};


export default Slider;