import React from 'react';
import ReactPlayer from "react-player";
import styles from './Player.module.css'
import { videoUrl } from "../../../consnants";

function VideoPlayer () {
    return (
        <div className={styles.player}>
            <ReactPlayer
                width='100%'
                height='100%'
                url={videoUrl}
            />
        </div>
    );
}

export default VideoPlayer;