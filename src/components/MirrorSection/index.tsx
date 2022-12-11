import React from "react"
import "./style.scss"
import content from "../../assets/content/AppCountSection.json"
import OakAnimateElement from "../oakfly/OakAnimateElement"
import screenshot from "../../assets/preview/boardview.jpg"


interface Props {
}

export default function MirrorSection(props: Props) {
  return (
    <div className="mirror-section column-layout">
      {/* <div className="mirror-section__heading">
        <h3 className="mirror-section__heading__title heading--3">{props.data.title}</h3>
        <div className="mirror-section__heading__accent">
          <div />
        </div>
      </div> */}
      <div className="mirror-section__container">
        <div>content</div>
        <div className="project-variant-one__container__first__right">
          <img className="app-screenshot" src={screenshot} />
        </div>
      </div>
    </div>
  )
}
