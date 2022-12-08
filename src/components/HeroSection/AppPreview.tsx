import React from "react"
import "./style.scss"
import imageBoardView from "../../assets/preview/boardview.jpg"
import imageBoardViewMobile from "../../assets/preview/boardview_mobile.jpg"
import imageTaskView from "../../assets/preview/taskview.jpg"

export default function AppPreview() {
  return (
    <div className="app-preview">
      <div className="app-preview--container">
        <img
          className="preview-mobile desktop-only"
          src={imageTaskView}
          alt="Janus board view"
        />
        <img
          className="preview-desktop desktop-only"
          src={imageBoardView}
          alt="Janus board view"
        />
        <img
          className="preview-mobile mobile-only"
          src={imageBoardViewMobile}
          alt="Janus board view"
        />
      </div>
    </div>
  )
}
