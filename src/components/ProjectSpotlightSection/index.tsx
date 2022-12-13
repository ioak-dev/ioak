import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import "./style.scss"
import OakAnimateElement from "../oakfly/OakAnimateElement"

interface Props {
  name: string,
  screenshots: any[],
  data: {
    logo: string,
    highlights: string[]
  }
}

export default function ProjectSpotlightSection(props: Props) {
  return (
    <div className={`project-spotlight-section project-spotlight-section--${props.name} column-layout`}>
      <OakAnimateElement direction="none">
        <div className="project-spotlight-section__right">
          <img className="app-logo" src={props.data.logo} />
          {props.data.highlights.slice(0).map(item => (<div className="project-spotlight-section__right__bottom">
            {item}
          </div>))}
          <div className="project-spotlight-section__right__action">
            <button className="project-spotlight-section__right__action__button">Learn more</button>
            <button className="project-spotlight-section__right__action__button">Learn more</button>
          </div>
        </div>
      </OakAnimateElement>
      <div className="project-spotlight-section__left">
        {/* <img className="app-logo" src={props.data.logo} /> */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        // effect="fade"
        >
          {props.screenshots.map(item =>
            <SwiperSlide><img className="app-screenshot" src={item} /></SwiperSlide>)}
        </Swiper>
      </div>
    </div>
  )
}
