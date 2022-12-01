import React from "react"
import "./style.scss"
import ioakWhite from "../../assets/ioak_white.svg"
import ioakBlack from "../../assets/ioak_black.svg"
import { Link } from "gatsby"

interface Props {
  black?: boolean
}

export default function HeaderSection(props: Props) {
  return (
    <div className="header-section">
      <Link to="/" title="Go to landing page">
        <img
          className="logo"
          src={props.black ? ioakBlack : ioakWhite}
          alt="Janus logo"
        />
      </Link>
    </div>
  )
}
