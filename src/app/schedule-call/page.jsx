import styles from "./page.module.css";

export const metadata = {
  title: "Schedule a Call",
};

export default function ScheduleCall() {
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
          <div className="form-group d-flex items-center">
            <label htmlFor="business-name" className="mr-2">
              Business Name
            </label>
            <input type="text" className="form-control" id="business-name" />
          </div>
          <div className="form-group d-flex items-center">
            <label htmlFor="phone-number" className="mr-2">
              Phone Number
            </label>
            <input type="text" className="form-control" id="phone-number" />
          </div>
          <div className="form-group d-flex items-center">
            <label htmlFor="email" className="mr-2">
              Email
            </label>
            <input type="text" className="form-control" id="email" />
          </div>
          <fieldset className={`${styles.fieldset}`}>
            <legend className={`${styles.legend}`}>
              What would you like to talk about
            </legend>
            <div className="form-group d-flex items-center">
              <input
                className={styles.checkbox}
                type="checkbox"
                id="awareness"
              />
              <label htmlFor="awareness">
                Awareness Lab Days and workshops
              </label>
            </div>
            <div className="form-group d-flex items-center">
              <input className={styles.checkbox} type="checkbox" id="invite" />
              <label htmlFor="invite">
                Invite a speaker with disabilities to your event
              </label>
            </div>
            <div className="form-group d-flex items-center">
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
            {/* Will add an on/off switch component for receiving emails about updates and services */}
          </div>
          <button type="submit">Schedule a Call</button>
        </form>
        <hr />
      </div>
    </>
  );
}
