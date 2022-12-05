import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/AppCountSection.json"
import OakAnimateElement from "../oakfly/OakAnimateElement"

export default function AppCountSection() {
  return (
    <div className="app-count-section column-layout">
      <div className="app-count-section__left">
        {content.data.title} <span className="deemphasize-text">{content.data.subtitle}</span>
      </div>
      <div className="app-count-section__right">
        {content.data.tiles.map(item => (
          <SectionTile data={item} key={item.title} />
        ))}
      </div>
    </div>
  )
}
