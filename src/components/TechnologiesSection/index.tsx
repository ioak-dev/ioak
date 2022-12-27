import React from "react"
import "./style.scss"
import content from "../../assets/content/TechnologiesSection.json"
import CallToAction from "../HeroSection/CallToAction"
import OakAnimateElement from "../oakfly/OakAnimateElement"
// import aiSection from "../../assets/ai_section.png"
import svgReact from "../../assets/technology-logo/react.svg"
import svgGithub from "../../assets/technology-logo/github.svg"
import svgNodejs from "../../assets/technology-logo/nodejs.svg"
import svgTypescript from "../../assets/technology-logo/typescript.svg"
import svgMongodb from "../../assets/technology-logo/mongodb.svg"
import svgGcp from "../../assets/technology-logo/gcp.svg"

export default function TechnologiesSection() {
  return (
    <div className="technologies-section column-layout">
      <div className="technologies-section__left">
        {content.technologies.map((url: string) =>
          <div
            className="technologies-section__logo">
            <img
              src={url}
            />
          </div>
        )}
      </div>
      <div className="technologies-section__right">
        <OakAnimateElement>
          <div className="technologies-section__right__text">
            {content.title} <span className="deemphasize-text">{content.description}</span>
          </div>
        </OakAnimateElement>
      </div>
    </div >
  )
}
