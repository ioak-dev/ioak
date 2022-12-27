import React, { useEffect, useRef, useState } from "react"
import "./style.scss"
import OakAnimateElement from "../oakfly/OakAnimateElement"


interface Props {
  count: number;
  label: string
}

export default function SectionTile(props: Props) {
  return (
    <div className="statistics-section-tile">
      <div className="statistics-section-tile__count">{props.count}</div>
      <div className="statistics-section-tile__label">{props.label}</div>
    </div>
  )
}
