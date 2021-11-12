import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {loadQuotes} from '../../../../redux/action-creators'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Quote from "./Quote";
import styles from './Carousel.module.css'
import SwiperComponent from "../Swiper/SwiperComponent";


function Carousel(props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadQuotes())
    }, [dispatch]);


    return (
        <div className={styles.block}>
            <SwiperComponent/>
        </div>
    );
}

export default Carousel;