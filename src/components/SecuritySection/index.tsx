import React from "react"
import "./style.scss"
import content from "../../assets/content/SecuritySection.json"
import CallToAction from "../HeroSection/CallToAction"
import OakAnimateElement from "../oakfly/OakAnimateElement"
// import aiSection from "../../assets/ai_section.png"
import aiSection from "../../assets/security.svg"

export default function SecuritySection() {
  return (
    <div className="security-section">
      <img
        src={aiSection}
        alt="Powered by Artificial intelligence"
      />
      <div className="security-section__content">
        <OakAnimateElement>
          <div className="security-section__right">
            {content.title} <span className="deemphasize-text">{content.description}</span>
          </div>
        </OakAnimateElement>
      </div>
    </div >
  )
}
