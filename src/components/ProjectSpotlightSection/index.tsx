import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import "./style.scss"
import OakAnimateElement from "../oakfly/OakAnimateElement"

interface Props {
  name: string,
  screenshots: any[],
  data: {
    title: string,
    logo: string,
    highlights: string[],
    action?: {
      link: string,
      label: string
    }
  }
}

export default function ProjectSpotlightSection(props: Props) {

  const visitSite = () => {
    window.open(props.data.action?.link,'_blank');
  }

  return (
    <div className={`project-spotlight-section project-spotlight-section--${props.name} column-layout`}>
      <div className="project-spotlight-section__left">
        {/* <OakAnimateElement direction="none">
          <img className="app-logo" src={props.data.logo} />
        </OakAnimateElement> */}
        <div className="project-spotlight-section__left__title">
          {props.data.title}
        </div>
        {props.data.highlights.slice(0).map(item => (
          <OakAnimateElement direction="right"><div className="project-spotlight-section__left__bottom">
            {item}
          </div></OakAnimateElement>))}
        {props.data.action && <div className="project-spotlight-section__left__action">
          <button className="project-spotlight-section__left__action__button" onClick={visitSite}>{props.data.action?.label}</button>
        </div>}
      </div>
      <div className="project-spotlight-section__right">
        <img className="app-logo" src={props.data.logo} />
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
