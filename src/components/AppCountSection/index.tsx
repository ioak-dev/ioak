import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/AppCountSection.json"
import OakAnimateElement from "../oakfly/OakAnimateElement"

export default function AppCountSection() {
  return (
    <div className="app-count-section column-layout">
      <div className="app-count-section__heading">
        <OakAnimateElement direction="none">
          <h2 className="app-count-section__heading__title heading--2">Active Projects</h2>
        </OakAnimateElement>
        <OakAnimateElement direction="left">
          <div className="app-count-section__heading__accent">
            <div />
            <div />
            <div />
          </div>
        </OakAnimateElement>
      </div>
      <div className="app-count-section__container">
        {content.data.map(item => (
          <SectionTile data={item} key={item.title} />
        ))}
      </div>
    </div>
  )
}
