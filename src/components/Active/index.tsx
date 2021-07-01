import React from 'react';
import { Show } from '../../types/show';
import styles from './Active.scss';
import { motion } from "framer-motion"

interface ActiveProps {
    activeShow: Show
};

const Active: React.FC<ActiveProps> = ( {activeShow}) => (
    <>
        <div className={styles.activeShow}>
            <motion.img
                className={styles.activeImage} 
                key={`https://viceimages.s3.amazonaws.com/${activeShow.product_image_url}`}
                src={`https://viceimages.s3.amazonaws.com/${activeShow.product_image_url}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5 }}
            />
        </div>

        <div className={styles.activeTextContainer}>
            <div className={styles.activeDetailsContainer}>             
                <p className={styles.episodesText}>{activeShow.episodes} Episodes</p>
        
                <h1 className={styles.titleText}>{activeShow.title}</h1>
            </div>
        </div>
    </>
    )


export default Active;