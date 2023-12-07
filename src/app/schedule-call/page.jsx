"use client";
import { useState } from "react";

import CustomSwitch from "../../components/custom-switch/custom-switch.component";

import styles from "./page.module.css";
import CustomInput from "@/components/custom-text-input/custom-text-input.component";
import CustomCheckbox from "@/components/custom-checkbox/custom-checkbox.component";

export default function ScheduleCall() {
  const [receiveEmails, setReceiveEmails] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCheckboxValues, setSelectedCheckboxValues] = useState({
    awareness: false,
    invite: false,
    usability: false,
  });
  const [errors, setErrors] = useState({
    email: "",
    phone_number: "",
  });
  const [thankYouMessage, setThankYouMessage] = useState("");

  const updateCheckboxValue = (attr) => {
    setSelectedCheckboxValues({
      ...selectedCheckboxValues,
      [attr]: !selectedCheckboxValues[attr],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    clearErrors();

    setErrors(() => {
      const errorsObj = {
        email: "",
        phone_number: "",
      };

      if (!email) {
        errorsObj["email"] = "Email field is required";
      } else if (email && (!email.includes("@") || !email.includes("."))) {
        errorsObj["email"] = "Email is not in proper format";
      }
      if (phoneNumber && !phoneNumber.match(/\d{3}-\d{3}-\d{4}/)) {
        errorsObj["phone_number"] = "Phone number is not in proper format";
      }

      if (!errorsObj["email"] && !errorsObj["phone_number"]) {
        setThankYouMessage(
          "Thank you for your interest in Empower Ability Labs. We will be in touch with you shortly."
        );
      }

      return errorsObj;
    });
  };

  const clearErrors = () => {
    setErrors({
      email: "",
      phone_number: "",
    });
    setThankYouMessage("");
  };

  return (
    <>
      <div
        hidden={!errors.email && !errors.phone_number}
        className={`${styles.messageContainer} ${styles.errorContainer} container ph-2 pt-2 mt-5`}
      >
        <ul className="pl-3 pt-2">
          {errors.phone_number && (
            <li>
              <a href="#phone-number">{errors.phone_number}</a>
            </li>
          )}
          {errors.email && (
            <li>
              <a href="#email">{errors.email}</a>
            </li>
          )}
        </ul>
      </div>
      <div
        hidden={!thankYouMessage}
        aria-hidden={!thankYouMessage}
        className={`${styles.messageContainer} ${styles.thankYouMessageContainer} container ph-2 pt-2 mt-5`}
      >
        <p>{thankYouMessage}</p>
      </div>
      <div className="headingContent">
        <div className="container">
          <h1>Schedule a Call</h1>
          <p>
            At Empower Ability Labs, we are dedicated to cultivating empathy and
            driving positive change through immersive experiences. Fill out the
            form below and we’ll get back to you as soon as we can to schedule a
            call with our sales team.
          </p>
        </div>
      </div>
      <div className="container message"></div>
      <div className="container form-container">
        <form className="form">
          <CustomInput
            label="Business Name"
            forAttr="business-name"
            val={businessName}
            handleChange={(e) => setBusinessName(e.target.value)}
            name="business_name"
          />
          <CustomInput
            label="Phone Number"
            forAttr="phone-number"
            val={phoneNumber}
            handleChange={(e) => setPhoneNumber(e.target.value)}
            type="tel"
            name="phone_number"
            otherAttributes={{
              placeholder: "Format: XXX-XXX-XXXX",
            }}
          />
          <CustomInput
            label="Email"
            forAttr="email"
            val={email}
            handleChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <fieldset className={`${styles.fieldset}`}>
            <legend className={`${styles.legend}`}>
              <h3 id="topic-to-talk-about">
                What would you like to talk about
              </h3>
            </legend>
            <div role="group" aria-labelledby="topic-to-talk-about">
              <ul>
                <CustomCheckbox
                  label="Awareness Lab Days and Workshops"
                  forAttr="awareness"
                  handleChecked={updateCheckboxValue}
                />
                <CustomCheckbox
                  label="Invite a speaker with disabilities to your event"
                  forAttr="invite"
                  handleChecked={updateCheckboxValue}
                />
                <CustomCheckbox
                  label="Usability Testing"
                  forAttr="usability"
                  handleChecked={updateCheckboxValue}
                />
              </ul>
            </div>
          </fieldset>
          {selectedCheckboxValues.invite && (
            <div className="d-flex flex-column items-center">
              <label htmlFor="event-desc">Tell us about your Event</label>
              <textarea id="event-desc"></textarea>
            </div>
          )}
          <div className="form-group d-flex items-center">
            <CustomSwitch
              toggleChecked={setReceiveEmails}
              toggleStatus={receiveEmails}
              labelText="Receive emails about updates and services"
            />
          </div>
          <button className={styles.scheduleCallBtn} onClick={handleSubmit}>
            Schedule a Call
          </button>
        </form>
        <hr />
      </div>
    </>
  );
}
