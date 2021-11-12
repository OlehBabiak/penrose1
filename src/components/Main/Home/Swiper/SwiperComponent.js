import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Keyboard,Pagination,Navigation
} from 'swiper';
import 'swiper/swiper-bundle.css';
import './swiper.css'
import {useDispatch, useSelector} from 'react-redux'
import {loadQuotes} from "../../../../redux/action-creators";

SwiperCore.use([Keyboard,Pagination,Navigation]);


function SwiperComponent() {
    const dispatch = useDispatch()
    const {quotes} = useSelector(store => store.quotes)

    useEffect(() => {
dispatch(loadQuotes())
    }, [dispatch]);

    return (
        <React.Fragment>
            <Swiper
                id="main"
                tag="section"
                wrapperTag="ul"
                navigation={true}
                keyboard={{
                    "enabled": true
                }}
                pagination={{
                    "clickable": true
                }}
                spaceBetween={0}
                slidesPerView={1}
                className="my-swiper"
            >
                {quotes.map(quote => (quote.price < 5 &&
                        <SwiperSlide key={quote.id}>
                            <div>{quote.name}</div>
                            <div>{quote.price}</div>
                        </SwiperSlide>
                ))}
            </Swiper>
        </React.Fragment>
    );
}

export default SwiperComponent;
