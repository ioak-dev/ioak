import React, { useState } from "react"
import "./CallToAction.scss"
import OakButton from "../oakfly/OakButton"
import RegisterForm from "./RegisterForm"

interface Props {
  theme?: "primary" | "default"
  data: {
    label: string
    faIcon: string
  }
}
export default function CallToAction(props: Props) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="call-to-action">
      <OakButton
        action={() => setShowForm(true)}
        theme={props.theme || "primary"}
        variant="regular"
      >
        {props.data.label}
      </OakButton>
      {showForm && <RegisterForm />}
    </div>
  )
}
