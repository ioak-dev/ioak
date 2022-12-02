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
    <div className="project-variant-one-sectiontile">
      <div className="project-variant-one-sectiontile__count">{props.data.count}</div>
      <div className="project-variant-one-sectiontile__title">{props.data.title}</div>
    </div>
  )
}
