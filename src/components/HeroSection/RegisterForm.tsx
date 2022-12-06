import React from "react"
import "./RegisterForm.scss"
import OakButton from "../oakfly/OakButton"

interface Props {
}
export default function RegisterForm(props: Props) {
  return (
    <div className="register-form">
      <div className="register-form__backdrop" />
      <div className="register-form__content">
        Test
        <OakButton
          action={() => (window.location.href = "https://app.janus.ioak.io")}
          theme="primary"
          variant="regular"
        >
          Submit
        </OakButton>
      </div>
    </div>
  )
}
