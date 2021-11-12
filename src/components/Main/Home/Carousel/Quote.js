import React from 'react';
import styles from './Carousel.module.css'

function Quote({qoute}) {
    return (
        <div className={styles.block}>
            <div className={styles.title}>{qoute.name}</div>
            <div>{qoute.price}</div>
        </div>
    );
}

export default Quote;