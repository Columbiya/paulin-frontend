import React, { useMemo } from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { newsStore } from 'store/newsStore'
import { NewsItem } from 'components/News/NewsItem'
import 'swiper/css'

export const NewsList: React.FC = (props) => {
  const reversedNews = useMemo(() => {
    if (!newsStore.items) return []

    return [...newsStore.items].reverse()
  }, [newsStore.items])

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      modules={[Autoplay]}
      autoplay={true}
      breakpoints={{
        280: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1750: {
          slidesPerView: 4,
        },
      }}
      loop={true}>
      {reversedNews.map((item) => (
        <SwiperSlide>
          <NewsItem {...item} key={item.id} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
