import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import "./style.scss"
import content from "../../assets/content/OneauthSection.json"
import screenshot1 from "../../assets/screenshots/oneauth/1.png"
import screenshot2 from "../../assets/screenshots/oneauth/2.png"
import ProjectSpotlightSection from "../ProjectSpotlightSection";


interface Props {
}

export default function OneauthSection(props: Props) {
  return (
    <ProjectSpotlightSection name="oneauth" screenshots={[screenshot1, screenshot2]} data={content} />
  )
}
