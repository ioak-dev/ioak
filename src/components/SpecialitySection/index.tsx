import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import CallToAction from "../HeroSection/CallToAction"
import OakAnimateElement from "../oakfly/OakAnimateElement"

interface Props {
  direction?: "left" | "right" | "up" | "down"
  data: {
    description: string
  }
}
export default function SpecialitySection(props: Props) {
  return (
    <div className="speciality-section">
      <div className="column-layout">
        <OakAnimateElement direction={props.direction || "right"}>
          <h2
            className="speciality-section--heading heading--2"
            dangerouslySetInnerHTML={{ __html: props.data.description }}
          />
        </OakAnimateElement>
      </div>
    </div>
  )
}
