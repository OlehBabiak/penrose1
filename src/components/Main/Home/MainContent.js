import React from 'react';
import styles from "./MainContent.module.css";
import title from "../../../assets/Title.png";
import girl from "../../../assets/Model@2x.png";
import triangle from "../../../assets/Triangle.svg";
import triangle1 from "../../../assets/Triangle Glow (1).svg";
import Image from "./Image";
import Carousel from "./Carousel/Carousel";
import VideoPlayer from "./Player/VideoPlayer";

function MainContent(props) {
    return (
        <div className={styles['background-img']}>
            <div className={styles['left-block']}>
                <VideoPlayer/>
                <Image src={title} alt='Title'/>
            </div>
            <div className={styles['center-content-wrapper']}>
                <div className={styles['background-img2']}>
                    <div className={styles['background-img1']}>
                        <div className={styles['background-shadow']}>
                            <Image src={girl} alt='Girl'/>
                        </div>
                    </div>
                </div>
            </div>
                <Carousel/>
        </div>
    );
}

export default MainContent;