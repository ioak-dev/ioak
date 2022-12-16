import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import "./style.scss"
import content from "../../assets/content/NeuralwebSection.json"
import screenshot1 from "../../assets/screenshots/mirror/1.jpg"
import ProjectSpotlightSection from "../ProjectSpotlightSection";


interface Props {
}

export default function MirrorSection(props: Props) {
  return (
    <ProjectSpotlightSection name="neuralweb" screenshots={[screenshot1, screenshot1]} data={content} />
  )
}
