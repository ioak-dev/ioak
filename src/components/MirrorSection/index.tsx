import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import "./style.scss"
import content from "../../assets/content/NeuralwebSection.json"
import screenshot1 from "../../assets/screenshots/neuralweb/1.png"
import screenshot2 from "../../assets/screenshots/neuralweb/2.png"
import screenshot3 from "../../assets/screenshots/neuralweb/3.png"
import screenshot4 from "../../assets/screenshots/neuralweb/4.png"
import ProjectSpotlightSection from "../ProjectSpotlightSection";


interface Props {
}

export default function MirrorSection(props: Props) {
  return (
    <ProjectSpotlightSection name="neuralweb" screenshots={[screenshot1, screenshot2, screenshot3, screenshot4]} data={content} />
  )
}
