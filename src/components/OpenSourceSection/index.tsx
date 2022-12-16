import React from "react"
import "./style.scss"
import content from "../../assets/content/AppCountSection.json"
import OakAnimateElement from "../oakfly/OakAnimateElement"
import opensource from "../../assets/open-source.svg"

export default function OpenSourceSection() {
  return (
    <div className="open-source-section column-layout">
      <div className="open-source-section__left">
        {content.data.title} <span className="deemphasize-text">{content.data.subtitle}</span>
      </div>
      <div className="open-source-section__right">
        <img src={opensource} />
      </div>
    </div>
  )
}
