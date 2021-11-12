import React from 'react';
import ReactPlayer from "react-player";
import styles from './Player.module.css'

function VideoPlayer(props) {
    return (
        <div className={styles.player}>
            <ReactPlayer
                width='160px'
                height='90px'
                url='https://www.youtube.com/watch?v=mpykT40_VBc'
            />
        </div>
    );
}

export default VideoPlayer;