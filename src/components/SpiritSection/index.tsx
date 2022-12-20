import React, { useEffect, useRef, useState } from "react"
import "./style.scss"
import OakAnimateElement from "../oakfly/OakAnimateElement"


interface Props {
}

export default function SpiritSection(props: Props) {
  const [messages, setMessages] = useState(["Imaginative", "Optimistic", "Altruistic", "Knowledge Centric"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const _currentIndex = useRef(0);

  useEffect(() => {

    setInterval(() => {
      if (_currentIndex.current < messages.length - 1) {
        setCurrentIndex(_currentIndex.current + 1);
        _currentIndex.current = _currentIndex.current + 1;
      } else {
        setCurrentIndex(0);
        _currentIndex.current = 0;
      }
    }, 5000);
  }, [])

  return (
    <div className="spirit-section column-layout">
      <div className="spirit-section__text">
        {messages[currentIndex]}
      </div>
    </div>
  )
}
