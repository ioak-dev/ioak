import React, { useEffect, useState } from "react"
import "./style.scss"
import OakAnimateElement from "../oakfly/OakAnimateElement"


interface Props {
}

export default function SpiritSection(props: Props) {
  const [messages, setMessages] = useState(["Innovation", "Open-mindedness", "Ascending", "Knowledge"]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    setInterval(() => {
      if (currentIndex < messages.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 3000);
  }, [])

  return (
    <div className="spirit-section column-layout">
      <div className="spirit-section__typewriter">
        <div className="spirit-section__typewriter__text">
          {messages[currentIndex]}
        </div>
      </div>
    </div>
  )
}
