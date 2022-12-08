import React from "react"
import "./style.scss"

interface Props {
  data: {
    title: string
    count: number
  }
}

export default function SectionTile(props: Props) {
  return (
    <div className="app-count-section-sectiontile">
      <div className="app-count-section-sectiontile__count">{props.data.count}</div>
      <div className="app-count-section-sectiontile__title">{props.data.title}</div>
    </div>
  )
}
