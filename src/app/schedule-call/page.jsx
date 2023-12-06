"use client";
import { useState } from "react";

import CustomSwitch from "../../components/custom-switch/custom-switch.component";

import styles from "./page.module.css";
import CustomInput from "@/components/custom-text-input/custom-text-input.component";

export default function ScheduleCall() {
  let [receiveEmails, setReceiveEmails] = useState(false);
  let [businessName, setBusinessName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [email, setEmail] = useState("");

  return (
    <>
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
            required={true}
          />
          <CustomInput
            label="Phone Number"
            forAttr="phone-number"
            val={phoneNumber}
            handleChange={(e) => setPhoneNumber(e.target.value)}
            required={true}
          />
          <CustomInput
            label="Email"
            forAttr="email"
            val={email}
            handleChange={(e) => setEmail(e.target.value)}
            type="email"
            required={true}
          />
          <fieldset className={`${styles.fieldset}`}>
            <legend className={`${styles.legend}`}>
              What would you like to talk about
            </legend>
            <div className="d-flex items-center pb-2">
              <input
                className={styles.checkbox}
                type="checkbox"
                id="awareness"
              />
              <label htmlFor="awareness">
                Awareness Lab Days and workshops
              </label>
            </div>
            <div className="d-flex items-center pb-2">
              <input className={styles.checkbox} type="checkbox" id="invite" />
              <label htmlFor="invite">
                Invite a speaker with disabilities to your event
              </label>
            </div>
            <div className="d-flex items-center pb-2">
              <input
                className={styles.checkbox}
                type="checkbox"
                id="usability"
              />
              <label htmlFor="usability">Usability testing</label>
            </div>
          </fieldset>
          <div className="form-group d-flex flex-column items-center">
            <label htmlFor="event-desc">Tell us about your Event</label>
            <textarea id="event-desc"></textarea>
          </div>
          <div className="form-group d-flex items-center">
            <CustomSwitch
              toggleChecked={setReceiveEmails}
              toggleStatus={receiveEmails}
              labelText="Receive emails about updates and services"
            />
          </div>
          <button className={styles.scheduleCallBtn} type="submit">
            Schedule a Call
          </button>
        </form>
        <hr />
      </div>
    </>
  );
}
