import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import "./style.scss"
import content from "../../assets/content/FortunaSection.json"
import screenshot1 from "../../assets/screenshots/fortuna/1.jpg"
import ProjectSpotlightSection from "../ProjectSpotlightSection";


interface Props {
}

export default function FortunaSection(props: Props) {
  return (
    <ProjectSpotlightSection name="fortuna" screenshots={[screenshot1, screenshot1]} data={content} />
  )
}
