import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import "./style.scss"
import content from "../../assets/content/AppCountSection.json"
import OakAnimateElement from "../oakfly/OakAnimateElement"
import screenshot from "../../assets/preview/boardview.jpg"
import screenshot1 from "../../assets/hero.jpg"


interface Props {
  screenshots: any[],
  data: {
    logo: string,
    highlights: string[],
    technologies: string[]
  }
}

export default function ProjectSpotlightSection(props: Props) {
  return (
    <div className="project-spotlight-section column-layout">
      <div className="project-spotlight-section__right">
        {/* <div className="project-spotlight-section__right__top">
          <div className="project-spotlight-section__right__top__left">
            Left
          </div>
          <div className="project-spotlight-section__right__top__right">
            {props.data.highlights[0]}
          </div>
        </div> */}
        <img className="app-logo" src={props.data.logo} />
        {props.data.highlights.slice(0).map(item => (<div className="project-spotlight-section__right__bottom">
          {item}
        </div>))}
        <div className="project-spotlight-section__right__action">
        <button className="project-spotlight-section__right__action__button">Learn more</button>
        <button className="project-spotlight-section__right__action__button">Learn more</button>
        </div>
      </div>
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
