import React, { useEffect, useRef, useState } from "react"
import "./style.scss"
import OakAnimateElement from "../oakfly/OakAnimateElement"
import SectionTile from "./SectionTile"


interface Props {
}

export default function StatisticsSection(props: Props) {
  return (
    <div className="statistics-section column-layout">
      <SectionTile count={10} label="Active members" />
      <SectionTile count={7} label="Live projects" />
      <SectionTile count={6} label="Pipeline projects" />
    </div>
  )
}
