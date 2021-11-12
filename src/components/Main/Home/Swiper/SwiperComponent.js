import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Keyboard,Pagination,Navigation
} from 'swiper';
import 'swiper/swiper-bundle.css';
import './swiper.css'
import {useSelector} from 'react-redux'

SwiperCore.use([Keyboard,Pagination,Navigation]);


function SwiperComponent() {
    const {quotes} = useSelector(store => store.quotes)

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
                    <>
                        <SwiperSlide>
                            <div>{quote.name}</div>
                            <div>{quote.price}</div>
                        </SwiperSlide>
                    </>
                ))}
            </Swiper>
        </React.Fragment>
    );
}

export default SwiperComponent;
