import React, { useState } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import validate, { EMAIL, MAX_LENGTH, MIN_LENGTH, REQUIRED } from "verdad-js";

type FormData = {
  [key: string]: string[];
};

const NAME = "NAME";
const MESSAGE = "MESSAGE";

const initialErrorState: FormData = {
  [EMAIL]: [],
  [NAME]: [],
  [MESSAGE]: [],
};

const config = {
  [EMAIL]: {
    rules: {
      [REQUIRED]: true,
      [EMAIL]: true,
    },
  },
  [NAME]: {
    rules: {
      [REQUIRED]: true,
      [MIN_LENGTH]: 5,
    },
  },
  [MESSAGE]: {
    rules: {
      [REQUIRED]: true,
      [MIN_LENGTH]: 5,
      [MAX_LENGTH]: 1000,
    },
  },
};

export default function Contact({}) {
  const [errors, setErrors] = useState(initialErrorState);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errorsPresent, setErrorsPresent] = useState<boolean>(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      [NAME]: name,
      [EMAIL]: email,
      [MESSAGE]: message,
    };

    const { valid, errorState } = validate(data, config);
    if (!valid) {
      setErrors(errorState);
      setIsLoading(false);
      return setErrorsPresent(true);
    }

    if (valid && errorsPresent) {
      setErrorsPresent(false);
    }

    emailjs
      .sendForm(
        "service_kpxgczi",
        "template_87ip3lq",
        e.target,
        "user_FoOp71wZXqqJcPL80vDKR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setHasSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };
  return (
    <section className="section colored" id="contact-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Let&apos;s Connect</h2>
            </div>
          </div>
          <div className="offset-lg-3 col-lg-6">
            <div className="center-text">
              <p>Ready to take your product to the next level?</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h5 className="margin-bottom-30">Keep in touch</h5>
            <div className="contact-text">
              <p>email: fengshuidigitalco@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12">
            <div className="contact-form">
              <form id="contact" onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Full Name"
                        required
                        name="user_name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </fieldset>
                    {errorsPresent && !!errors[NAME].length && (
                      <Error>{errors[NAME][0]}</Error>
                    )}
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <fieldset>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required
                        name="user_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errorsPresent && !!errors[EMAIL].length && (
                        <Error>{errors[EMAIL][0]}</Error>
                      )}
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        rows={6}
                        className="form-control"
                        id="message"
                        placeholder="Message"
                        maxLength={1000}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                      {errorsPresent && !!errors[MESSAGE].length && (
                        <Error>{errors[MESSAGE][0]}</Error>
                      )}
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="main-button"
                        disabled={isLoading || hasSubmitted}
                      >
                        {isLoading
                          ? "Loading"
                          : hasSubmitted
                          ? "Submitted"
                          : "Send"}
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Error = styled.span`
  color: red;
`;
