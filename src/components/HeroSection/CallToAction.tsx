import React, { useState } from "react"
import "./CallToAction.scss"
import OakButton from "../oakfly/OakButton"
import RegisterForm from "./RegisterForm"
import { OpenRegistrationFormEvent } from "../../event/OpenRegistrationFormEvent"

interface Props {
  theme?: "primary" | "default"
  data: {
    label: string
    faIcon: string
  }
}
export default function CallToAction(props: Props) {
  const handleSubmit = () => {
    OpenRegistrationFormEvent.next(true);
  }

  return (
    <div className="call-to-action">
      <OakButton
        action={handleSubmit}
        theme={props.theme || "primary"}
        variant="regular"
      >
        {props.data.label}
      </OakButton>
    </div>
  )
}
