import React, { useState } from "react";
import emailjs from "emailjs-com";
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
  const [valid, setIsValid] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      [NAME]: e.target[0].value,
      [EMAIL]: e.target[1].value,
      [MESSAGE]: e.target[2].value,
    };

    const { valid, errorState } = validate(data, config);
    if (!valid) {
      setErrors(errorState);
      setIsLoading(false);
      return setIsValid(false);
    }

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        e.target,
        "user_IyPdDHtYTG3DDGWOZKogS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    if (!valid) {
      setIsValid(true);
      setErrors(initialErrorState);
    }

    setIsLoading(false);
  };
  return (
    <section className="section colored" id="contact-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="center-heading">
              <h2 className="section-title">Let's Connect</h2>
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
                      />
                    </fieldset>
                    {!valid && !!errors[NAME].length && (
                      <span>{errors[NAME][0]}</span>
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
                      />
                      {!valid && !!errors[EMAIL].length && (
                        <span>{errors[EMAIL][0]}</span>
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
                        required
                      ></textarea>
                      {!valid && !!errors[MESSAGE].length && (
                        <span>{errors[MESSAGE][0]}</span>
                      )}
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="main-button"
                        disabled={true}
                      >
                        Send Message
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
