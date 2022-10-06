import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { newsStore } from '../../store/newsStore'
import { NewsItem } from '../News/NewsItem'

export const NewsList: React.FC = (props) => {

    return (
        <Swiper 
            spaceBetween={10}
            slidesPerView={4}
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