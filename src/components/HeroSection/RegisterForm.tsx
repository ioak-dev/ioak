import React from "react"
import "./RegisterForm.scss"
import OakButton from "../oakfly/OakButton"
import { httpGet } from "../Lib/RestTemplate"

interface Props {
}
export default function RegisterForm(props: Props) {
  const handleSubmit = () => {
    httpGet("/api/hello", {}).then((response: any) => {
      console.log(response);
    })
  }

  return (
    <div className="register-form">
      <div className="register-form__backdrop" />
      <div className="register-form__content">
        <div className="register-form__content__form">
          <div className="register-form__content__form__two-column">
            <div>
              <div className="register-form__content__form__label">First name</div>
              <input />
            </div>
            <div>
              <div className="register-form__content__form__label">Last name</div>
              <input />
            </div>
          </div>
          <div>
            <div className="register-form__content__form__label">Email</div>
            <input />
          </div>
          <div>
            <div className="register-form__content__form__label">Telephone</div>
            <input />
          </div>
        </div>
        <OakButton
          action={handleSubmit}
          theme="primary"
          variant="regular"
        >
          Submit
        </OakButton>
      </div>
    </div>
  )
}
