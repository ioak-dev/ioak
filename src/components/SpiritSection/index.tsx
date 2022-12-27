import React, { useEffect, useRef, useState } from "react"
import "./style.scss"
import OakAnimateElement from "../oakfly/OakAnimateElement"
import ioakWhite from "../../assets/ioak_white.svg"


interface Props {
}

export default function SpiritSection(props: Props) {
  const [messages, setMessages] = useState(["Imaginative", "Optimistic", "Altruistic", "Knowledge Centric"]);
  const [currentIndex, setCurrentIndex] = useState(4);
  const _currentIndex = useRef(0);

  useEffect(() => {

    setInterval(() => {
      if (_currentIndex.current < messages.length) {
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
      {currentIndex < messages.length && <div className="spirit-section__text">
        {messages[currentIndex]}
      </div>}
      {currentIndex === messages.length && <div className="spirit-section__text">
        
      <img
          className="logo"
          src={ioakWhite}
          alt="IOAK logo"
        />
      </div>}
    </div>
  )
}
