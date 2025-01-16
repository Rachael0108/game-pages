import { isPC } from '../../pc/src/utils/tools';
import { useState, useRef, useEffect } from 'react';
import { type Swiper as SwiperRef } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import './mediaSwiper.scss';
import LazyLoad from 'react-lazyload'

export { MediaSwiper }

interface MediaSwiperProps {
  swiperList: {id: number, url: string}[],
  type: 'image' | 'video',
  autoPlay: boolean
}
const MediaSwiper = ({ swiperList, type, autoPlay }: MediaSwiperProps)  => {
  const [ activeSwiper, setActiveSwiper ] = useState<number>(0)
  const isMobile = useRef(!isPC()).current
  const swiperRef = useRef<SwiperRef>(null)

  const initSwiper = (swiper: SwiperRef) => {
    swiperRef.current = swiper
    swiper.autoplay.stop()
  }
  const slideChange = (swiper: SwiperRef) => {
    setActiveSwiper(swiper.activeIndex)
  }
  useEffect(() => {
    if(autoPlay) {
      swiperRef.current?.autoplay.start()
    }
  }, [autoPlay]);

  return <>
    <div className="nestedSwiper">
      <Swiper
        effect={'coverflow'}
        slidesPerView={'auto'}
        centeredSlides={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[ Autoplay, Navigation, EffectCoverflow ]}
        onSwiper={(swiper) => initSwiper(swiper)}
        onSlideChange={slideChange}
        observer={true}
        observeParents={true}
        // spaceBetween={30}
        coverflowEffect={
          {
            rotate: 0,
            stretch: 120,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }
        }
      >
        {swiperList.map((item) => (
          <SwiperSlide key={`${type}-${item.id}`}>
            {type === 'image' ? <LazyLoad offset={100}><img alt={''} src={item.url}/></LazyLoad> :
              <lite-youtube videoid={item.videoId}>
                <a className="lite-youtube-fallback" href="https://www.youtube.com/watch?v=VIDEO-ID-HERE">VIDEO
                  TITLE/DESCRIPTION
                </a>
              </lite-youtube>}
          </SwiperSlide>
        ))}
      </Swiper>

      {
        swiperList.length > 1 &&
        <div className="swiper-pagination"  id={isMobile ? 'mb-navigation' : ''}>
          <div className="swiper-button-prev"
               style={{
                 pointerEvents: activeSwiper === 0 ? 'none' : 'auto',
                 opacity: activeSwiper === 0 ? 0.3 : 1
               }}
          />
          <div className="swiper-button-next"
               style={{
                 pointerEvents: activeSwiper === swiperList.length - 1 ? 'none' : 'auto',
                 opacity: activeSwiper === swiperList.length - 1 ? 0.3 : 1
               }}
          />
        </div>
      }
      {/*<div className="role-pagination" id={isMobile ? 'mb-pagination' : ''}>*/}
      {/*  <ul className="flex items-center">*/}
      {/*    {*/}
      {/*      swiperList.map((item, index) => {*/}
      {/*        return <li key={index}*/}
      {/*                   className={`${activeSwiper === index ? 'page-dot page-dot-active' : 'page-dot'}`}*/}
      {/*                   onClick={() => handlePagination(index)}*/}
      {/*        ></li>*/}
      {/*      })*/}
      {/*    }*/}
      {/*  </ul>*/}
      {/*</div>*/}
    </div>
  </>
}
