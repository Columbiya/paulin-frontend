import React from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { newsStore } from '../../store/newsStore'
import { NewsItem } from '../News/NewsItem'
import "swiper/css";

export const NewsList: React.FC = (props) => {

    return (
        <Swiper 
            spaceBetween={10}
            slidesPerView={4}
            modules={[Autoplay]}
            autoplay={true}
            breakpoints={{
                280: {
                    slidesPerView: 1
                },
                700: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
                1750: {
                    slidesPerView: 4,
                } 
            }}
            loop={true}
        >
            {
                newsStore.items?.map(item => (
                    <SwiperSlide>
                        <NewsItem {...item} key={item.id} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
} 