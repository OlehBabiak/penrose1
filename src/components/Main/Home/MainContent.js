import React from 'react';
import styles from "./MainContent.module.css";
import title from "../../../assets/Title.png";
import girl from "../../../assets/Model@2x.png";
import Image from "./Image";
import VideoPlayer from "./Player/VideoPlayer";
import SwiperComponent from "./Swiper/SwiperComponent";

function MainContent(props) {
    return (
        <div className={styles['background-img']}>
            <div className={styles['left-block']}>
                <Image src={title} alt='Title'/>
                    <VideoPlayer/>
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
            <div className={styles.block}>
                <SwiperComponent/>
            </div>

        </div>
    );
}

export default MainContent;