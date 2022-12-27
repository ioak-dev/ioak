import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import "./style.scss"
import content from "../../assets/content/FortunaSection.json"
import screenshot1 from "../../assets/screenshots/fortuna/1.png"
import screenshot2 from "../../assets/screenshots/fortuna/2.png"
import screenshot3 from "../../assets/screenshots/fortuna/3.png"
import ProjectSpotlightSection from "../ProjectSpotlightSection";


interface Props {
}

export default function FortunaSection(props: Props) {
  return (
    <ProjectSpotlightSection name="fortuna" screenshots={[screenshot1, screenshot2, screenshot3]} data={content} />
  )
}
