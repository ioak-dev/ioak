import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/AppCountSection.json"

export default function AppCountSection() {
  return (
    <div className="app-count-section column-layout">
      <div className="app-count-section__heading">
        <h2 className="app-count-section__heading__title heading--2">Active Projects</h2>
        <div className="app-count-section__heading__accent" />
      </div>
      <div className="app-count-section__container">
        {content.data.map(item => (
          <SectionTile data={item} key={item.title} />
        ))}
      </div>
    </div>
  )
}
