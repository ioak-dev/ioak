import React, { useEffect, useRef, useState } from "react"
import "./style.scss"
import OakAnimateElement from "../oakfly/OakAnimateElement"


interface Props {
}

export default function FreeSection(props: Props) {
  return (
    <div className="free-section column-layout">
      Knowledge should be free and accessible to everyone
    </div>
  )
}
