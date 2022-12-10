import React from "react"
import "./style.scss"
import content from "../../assets/content/AppCountSection.json"
import OakAnimateElement from "../oakfly/OakAnimateElement"


interface Props {
  data: {
    title: string
    logo: string
    screenshotOne: string
    screenshotTwo: string
    descriptionOne: string
    descriptionTwo: string
    descriptionThree: string
    technologies: string[]
  }
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
        <div className="mirror-section__container__first">
          <OakAnimateElement direction="none">
            <div className="mirror-section__container__first__left">
              <div className="mirror-section__container__first__left__top">
                <div className="mirror-section__container__first__left__top__tile-two">
                  <img className="app-logo" src={props.data.logo} />
                </div>
                <div className="mirror-section__container__first__left__top__tile-one">
                  {props.data.technologies.map((item: string) =>
                    <img className="technology-logo" src={item} />
                  )}
                </div>
              </div>
              <div className="mirror-section__container__first__left__bottom">
                {props.data.descriptionOne}
              </div>
            </div>
          </OakAnimateElement>
          <OakAnimateElement direction="none">
            <div className="mirror-section__container__first__right">
              <img className="app-screenshot" src={props.data.screenshotOne} />
            </div>
          </OakAnimateElement>
        </div>
        <div className="mirror-section__container__second">
          <OakAnimateElement direction="none">
            <div className="mirror-section__container__second__left">
              <img className="app-screenshot" src={props.data.screenshotTwo} />
            </div>
          </OakAnimateElement>
          <OakAnimateElement direction="none">
            <div className="mirror-section__container__second__right">
              <div className="mirror-section__container__second__right__tile-one">
                {props.data.descriptionTwo}
              </div>
              <div className="mirror-section__container__second__right__tile-two">
                {props.data.descriptionThree}
              </div>
            </div>
          </OakAnimateElement>
        </div>
      </div>
    </div>
  )
}
