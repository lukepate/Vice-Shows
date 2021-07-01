import React, { useEffect, useState } from 'react';
import { Show } from '../../types/show';
import { Link } from "react-router-dom";
import styles from './Slider.scss';

interface SliderProps {
    currentShows: Show[];
    activeIndex: number;
}

const Slider: React.FC<SliderProps> = ({ currentShows, activeIndex }) => (
    <div className={styles.showContainer}>
        <div className={styles.sliderContainer} data-testid='slider' >
            {currentShows.map((show: Show, index: number) => {
                return (
                    <Link className={styles.link} key={show.id} to={`/?id=${show.id}`}  data-testid={`show-${show.id}`} >
                        <div className={styles.show}>
                                <img key={index} alt={show.title} className={activeIndex === index ? styles.active : styles.showStyle} src={`https://viceimages.s3.amazonaws.com/${show.product_image_url}`} />

                                <div className={styles.showIndex}>{++index}</div>
                        </div>
                    </Link>
                );
            })}
        </div>
    </div>
)


export default Slider;