import React, { useState } from "react"
import "./RegisterForm.scss"
import OakButton from "../oakfly/OakButton"
import { httpGet, httpPost } from "../Lib/RestTemplate"
import { StaticQuery } from "gatsby"
import { OpenRegistrationFormEvent } from "../../event/OpenRegistrationFormEvent"
import { isEmptyOrSpaces } from "../Lib/Utils"

interface Props {
}

export default function RegisterForm(props: Props) {

  const [emailAlreadyExists, setEmailAlreadyExists] = useState(false);
  const [memberId, setMemberId] = useState("");
  const [errorFields, setErrorFields] = useState({
    firstName: '', lastName: '', email: '', telephone: ''
  })

  const [state, setState] = useState({
    firstName: '', lastName: '', email: '', telephone: ''
  });

  const handleChange = (event: any) => {
    setErrorFields({ ...errorFields, [event.currentTarget.name]: "" });
    setState({ ...state, [event.currentTarget.name]: event.currentTarget.value });
  }

  const handleClose = () => {
    OpenRegistrationFormEvent.next(false);
    setState({
      firstName: '', lastName: '', email: '', telephone: ''
    });
    setEmailAlreadyExists(false);
    setMemberId("");
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (validateForm()) {
      httpPost("/api/member", {...state, email: state.email.toLowerCase()}, {}).then((response: any) => {
        setMemberId(response.data.code);
      })
        .catch((error: any) => {
          if (error.response.status === 409) {
            console.log("409 conflict -- 1")
            setEmailAlreadyExists(true);
          }
        })
    }
  }

  const validateForm = () => {
    let outcome = true;
    const _errorFields: any = {};

    if (isEmptyOrSpaces(state.firstName)) {
      _errorFields.firstName = "Mandatory field missing";
      outcome = false;
    }

    if (isEmptyOrSpaces(state.lastName)) {
      _errorFields.lastName = "Mandatory field missing";
      outcome = false;
    }

    if (isEmptyOrSpaces(state.email)) {
      _errorFields.email = "Mandatory field missing";
      outcome = false;
    } else if (!state.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      _errorFields.email = "Not a valid Email";
      outcome = false;
    }

    setErrorFields({ ..._errorFields });

    return outcome;
  }

  return (
    <div className="register-form">
      <div className="register-form__backdrop" />
      {memberId === "" && !emailAlreadyExists && (
        <form className="register-form__content register-form__base" onSubmit={handleSubmit}>
          <div className="register-form__content__form">
            <div className="register-form__content__form__two-column">
              <div>
                <div className="register-form__content__form__label">First name*</div>
                <input
                  className={`register-form__content__form__input ${errorFields.firstName ? 'register-form__content__form__input--error' : ''}`}
                  autoFocus
                  autoComplete="off"
                  name="firstName"
                  id="firstName"
                  value={state.firstName}
                  onChange={handleChange}
                  placeholder="First name or Given name" />
                {errorFields.firstName &&
                  <div className="register-form__content__form__error">
                    {errorFields.firstName}
                  </div>}
              </div>
              <div>
                <div className="register-form__content__form__label">Last name*</div>
                <input
                  className={`register-form__content__form__input ${errorFields.lastName ? 'register-form__content__form__input--error' : ''}`}
                  autoComplete="off"
                  name="lastName"
                  id="lastName"
                  value={state.lastName}
                  onChange={handleChange}
                  placeholder="Last name or Family name" />
                {errorFields.lastName &&
                  <div className="register-form__content__form__error">
                    {errorFields.lastName}
                  </div>}
              </div>
            </div>
            <div>
              <div className="register-form__content__form__label">Email*</div>
              <input
                className={`register-form__content__form__input ${errorFields.email ? 'register-form__content__form__input--error' : ''}`}
                autoComplete="off"
                name="email"
                id="email"
                value={state.email}
                onChange={handleChange}
                placeholder="Email" />
              {errorFields.email &&
                <div className="register-form__content__form__error">
                  {errorFields.email}
                </div>}
            </div>
            <div>
              <div className="register-form__content__form__label">Telephone</div>
              <input
                className={`register-form__content__form__input ${errorFields.telephone ? 'register-form__content__form__input--error' : ''}`}
                autoComplete="off"
                name="telephone"
                id="telephone"
                value={state.telephone}
                onChange={handleChange}
                placeholder="Telephone number with country code" />
              {errorFields.telephone &&
                <div className="register-form__content__form__error">
                  {errorFields.telephone}
                </div>}
            </div>
          </div>
          <div className="register-form__content__action">
            <button className="register-form__content__action__button register-form__content__action__button--primary"
              onSubmit={handleSubmit}
            >
              Submit
            </button>
            <button className="register-form__content__action__button register-form__content__action__button--default"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </form>
      )}

      {emailAlreadyExists &&
        <div className="register-form__base">
          <div>
            Your email ({state.email}) is already registered with us. Post registration instructions have been sent to your email once again. Please check your mailbox for further steps.
          </div>
          <div className="register-form__content__action">
            <button className="register-form__content__action__button register-form__content__action__button--default"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>}

      {memberId &&
        <div className="register-form__base">
          <div>
            Thank you for joining our community. Post registration instructions have been sent to your email ({state.email}). Please check your mailbox for further steps.
          </div>
          <div className="register-form__content__action">
            <button className="register-form__content__action__button register-form__content__action__button--default"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>}
    </div>
  )
}
