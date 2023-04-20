import { useRef } from "react";
import styles from "./analysisForm.module.scss";
import { ButtonPrimary } from "@/components/ui/buttons";

export default function AnalysisForm(props) {
  // const companyInputRef = useRef("");
  // const statusInputRef = useRef("");

  // function submitHandler(e) {
  //   e.preventDefault();

  //   const enteredCompany = companyInputRef.current.value;
  //   const enteredStatus = statusInputRef.current.value;

  //   const analysisInputedData = {
  //     company: enteredCompany,
  //     status: enteredStatus,
  //   };

  //   console.log(analysisInputedData);
  //   props.onCreateAnalysis(analysisInputedData);
  // }

  const form = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const analysisInputedData = {
      company: form.current.company.value,
      status: form.current.status.value,
      accessibilityInfo: form.current.accessibilityInfo.value,
      accessibilityScore: parseInt(form.current.accessibilityScore.value),
      responsiveInfo: form.current.responsiveInfo.value,
      responsiveScore: parseInt(form.current.responsiveScore.value),
      seoInfo: form.current.seoInfo.value,
      seoScore: parseInt(form.current.seoScore.value),
    };

    console.log(analysisInputedData);
    props.onCreateAnalysis(analysisInputedData);

    form.current.reset();
  };

  return (
    <div>
      <div>
        <h4 className={styles.heading_h4}>Add new analysis</h4>
        <h5 className={styles.heading_h5}>
          Remeber to set the correct status, all analysis are set to progress as
          default.
        </h5>
      </div>

      <form onSubmit={submitHandler} ref={form} className={styles.form}>
        <div className={styles.form__section}>
          <label htmlFor="company" className={styles.form__label}>
            Company
          </label>
          <input
            type="text"
            required
            id="company"
            // ref={companyInputRef}
            className={styles.form__input}
          ></input>
        </div>

        <div className={styles.form__section}>
          <label htmlFor="role" className={styles.form__label}>
            Status
          </label>
          <select
            type="text"
            required
            id="status"
            // ref={statusInputRef}
            className={`${styles.form__input} ${styles.form__input__select}`}
          >
            {" "}
            <option value="PROGRESS">PROGRESS</option>
            <option value="DONE">DONE</option>
          </select>
        </div>

        <div className={styles.form__section}>
          <label htmlFor="accessibilityInfo" className={styles.form__label}>
            Accessibility Info
          </label>
          <input
            type="text"
            id="accessibilityInfo"
            // ref={emailInputRef}
            className={styles.form__input}
          ></input>
        </div>

        <div className={styles.form__section}>
          <label htmlFor="accessibilityScore" className={styles.form__label}>
            Accessibility Score
          </label>
          <input
            type="text"
            inputMode="numeric"
            id="accessibilityScore"
            name="accessibilityScore"
            // ref={emailInputRef}
            className={styles.form__input}
          ></input>
        </div>

        <div className={styles.form__section}>
          <label htmlFor="responsiveInfo" className={styles.form__label}>
            Responsive Info
          </label>
          <input
            type="text"
            id="responsiveInfo"
            // ref={emailInputRef}
            className={styles.form__input}
          ></input>
        </div>

        <div className={styles.form__section}>
          <label htmlFor="responsiveScore" className={styles.form__label}>
            Responsive Score
          </label>
          <input
            type="number"
            id="responsiveScore"
            // ref={emailInputRef}
            className={styles.form__input}
          ></input>
        </div>

        <div className={styles.form__section}>
          <label htmlFor="seoInfo" className={styles.form__label}>
            SEO Info
          </label>
          <input
            type="text"
            id="seoInfo"
            // ref={emailInputRef}
            className={styles.form__input}
          ></input>
        </div>

        <div className={styles.form__section}>
          <label htmlFor="seoScore" className={styles.form__label}>
            SEO Score
          </label>
          <input
            type="number"
            id="seoScore"
            // ref={emailInputRef}
            className={styles.form__input}
          ></input>
        </div>

        <div className={styles.form__section_button}>
          <ButtonPrimary type="submit">Submit</ButtonPrimary>
        </div>
      </form>
    </div>
  );
}
