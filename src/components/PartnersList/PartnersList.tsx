import { observer } from 'mobx-react-lite'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { partnersStore } from '../../store/partnersStore'
import { PartnerItem } from './Partner/Partner'
import 'swiper/css';
import { Autoplay } from 'swiper'

export const PartnersList: React.FC = observer((props) => {
    
    return (
        <div className="partners-list">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
            >
                {
                    partnersStore?.items.map(item => (
                        <SwiperSlide>
                            <PartnerItem {...item} key={item.id} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
})
