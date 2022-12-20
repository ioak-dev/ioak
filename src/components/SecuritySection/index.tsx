import React from "react"
import "./style.scss"
import content from "../../assets/content/SecuritySection.json"
import CallToAction from "../HeroSection/CallToAction"
import OakAnimateElement from "../oakfly/OakAnimateElement"
// import aiSection from "../../assets/ai_section.png"
import aiSection from "../../assets/artificial-intelligence.svg"

export default function SecuritySection() {
  return (
    <div className="ai-section">
      <img
        src={aiSection}
        alt="Powered by Artificial intelligence"
      />
      <div className="ai-section__content">
        <OakAnimateElement>
          <div className="ai-section__right">
            {content.title} <span className="deemphasize-text">{content.description}</span>
          </div>
        </OakAnimateElement>
      </div>
    </div >
  )
}
