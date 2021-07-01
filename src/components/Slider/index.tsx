import React from 'react';
import { Show } from '../../types/show';
import { Link } from "react-router-dom";
import styles from './Slider.scss';
import { motion } from "framer-motion"

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

                                {activeIndex === index && (
                                    <motion.div 
                                        animate={{
                                            scale: [0, 1.2, 1],
                                            borderRadius: ["0%", "30%", "70%", "100%"],
                                        }}
                                        className={styles.showIndex}>
                                        {++index}
                                    </motion.div>
                                )}
                        </div>
                    </Link>
                );
            })}
        </div>
    </div>
)


export default Slider;