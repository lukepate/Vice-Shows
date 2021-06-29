import React, { useEffect, useState } from 'react';
import { Show } from '../../types/show';
import { Link } from "react-router-dom";
import styles from './Slider.scss';

interface SliderProps {
    currentShows: Show[];
    currentIndex: number;
}

const Slider: React.FC<SliderProps> = ({ currentShows, currentIndex }) => {

    const activeShow = (index: number, show: Show) => {
        return (
             <div>
                <img key={index} className={styles.active} src={`https://viceimages.s3.amazonaws.com/${show.product_image_url}`} />
            </div>
        )
    };

    const showImage = (index: number, show: Show) => {
        return (
            <div>
                <img key={index} className={styles.showStyle} src={`https://viceimages.s3.amazonaws.com/${show.product_image_url}`} />
            </div>
        )
    };

    return (
        <div className={styles.showContainer}>
            <div data-testid='slider' className={styles.sliderContainer}>
                {currentShows.map((show: Show, index: number) => {
                    return (
                        <Link className={styles.link} key={show.id} to={`/?id=${show.id}`} >                            
                            <div className={styles.show}>
                                    {currentIndex === index ? 
                                        activeShow(index, show) :
                                        showImage(index, show) 
                                    }
                                  
                                    <div className={styles.showIndex}>{++index}</div>

                 
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
};


export default Slider;