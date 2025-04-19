// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/modules'
// Import Swiper styles
import 'swiper/css';
import { bannerLists } from '../../utils';

const colors = ["bg-banner-color1", "bg-banner-color2", "bg-banner-color3"]

const HeroBanner =  () => {
  return (
       <div className='py-2 rounded-md'>
           <Swiper
           grabCursor = {true}
           autoplay ={{
            delay: 4000,
            disableOnInteraction: false,
           }}
           navigation
           modules={[Pagination, EffectFade, Navigation, Autoplay]}
           pagination={{clickable:true}}
           scrollbar={{draggable: true}}
           slidesPerView={1}
           >
                  {bannerLists.map((item,i) => (
                    <SwiperSlide key={item.id}>
                        <div className={`carousel-item rounded-md sm:h-[500px] h-96 ${colors[i]}`}>
                        <div className='flex items-center justify-center'>
                        <div className='text-center'>
                            <h3 className='text-3xl text-white'>
                                {item.title}
                            </h3>
                        </div>
                        </div>
                        </div>
                    </SwiperSlide>
                  ))}
           </Swiper>
       </div>
  );
};

export default HeroBanner;