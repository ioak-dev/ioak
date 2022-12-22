import React, { useEffect, useRef, useState } from "react"
import "./style.scss"
import OakAnimateElement from "../oakfly/OakAnimateElement"
import SectionTile from "./SectionTile"


interface Props {
  membersCount: number;
}

export default function StatisticsSection(props: Props) {
  return (
    <div className="statistics-section column-layout">

      <OakAnimateElement direction="none">
        <SectionTile count={props.membersCount} label="Active members" />
      </OakAnimateElement>
      <OakAnimateElement direction="none">
        <SectionTile count={7} label="Live projects" />
      </OakAnimateElement>
      <OakAnimateElement direction="none">
        <SectionTile count={6} label="Pipeline projects" />
      </OakAnimateElement>
    </div>
  )
}
