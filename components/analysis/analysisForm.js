import { useRef } from "react";
import styles from "./analysisForm.module.scss";
import { ButtonPrimary } from "@/components/ui/buttons";
import {
  AiOutlineSound,
  AiOutlineMobile,
  AiOutlineSearch,
} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

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
      performanceInfo: form.current.performanceInfo.value,
      performanceScore: parseInt(form.current.performanceScore.value),
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
            className={styles.form__input}
          ></input>
        </div>

        <div className={styles.form__section}>
          <label htmlFor="status" className={styles.form__label}>
            Status
          </label>
          <select
            type="text"
            required
            id="status"
            className={`${styles.form__input} ${styles.form__input__select}`}
          >
            {" "}
            <option value="PROGRESS">PROGRESS</option>
            <option value="DONE">DONE</option>
          </select>
        </div>

        <div className={styles.form__textsection}>
          <div className={styles.form__textsection_header}>
            <span className={styles.form__icon}>
              <AiOutlineSound />
            </span>
            <h6 className={styles.heading_h6}>Accessibility</h6>
          </div>

          <label htmlFor="accessibilityScore" className={styles.form__label}>
            Score
          </label>
          <input
            type="text"
            inputMode="numeric"
            id="accessibilityScore"
            name="accessibilityScore"
            className={styles.form__input}
          ></input>

          <label htmlFor="accessibilityInfo" className={styles.form__label}>
            Information
          </label>
          <textarea
            type="text"
            rows="10"
            cols="50"
            id="accessibilityInfo"
            className={styles.form__textarea}
          ></textarea>
        </div>

        <div className={styles.form__textsection}>
          <div className={styles.form__textsection_header}>
            <span className={styles.form__icon}>
              <AiOutlineMobile />
            </span>
            <h6 className={styles.heading_h6}>Responsive</h6>
          </div>

          <label htmlFor="responsiveScore" className={styles.form__label}>
            Score
          </label>
          <input
            type="number"
            id="responsiveScore"
            className={styles.form__input}
          ></input>

          <label htmlFor="responsiveInfo" className={styles.form__label}>
            Information
          </label>
          <textarea
            type="text"
            id="responsiveInfo"
            className={styles.form__textarea}
          ></textarea>
        </div>

        <div className={styles.form__textsection}>
          <div className={styles.form__textsection_header}>
            <span className={styles.form__icon}>
              <AiOutlineSearch />
            </span>
            <h6 className={styles.heading_h6}>SEO</h6>
          </div>
          <label htmlFor="seoScore" className={styles.form__label}>
            Score
          </label>
          <input
            type="number"
            id="seoScore"
            className={styles.form__input}
          ></input>

          <label htmlFor="seoInfo" className={styles.form__label}>
            Information
          </label>
          <textarea
            type="text"
            id="seoInfo"
            className={styles.form__textarea}
          ></textarea>
        </div>

        <div className={styles.form__textsection}>
          <div className={styles.form__textsection_header}>
            <span className={styles.form__icon}>
              <FiSettings />
            </span>
            <h6 className={styles.heading_h6}>Performance</h6>
          </div>
          <label htmlFor="performanceScore" className={styles.form__label}>
            Score
          </label>
          <input
            type="number"
            id="performanceScore"
            className={styles.form__input}
          ></input>

          <label htmlFor="performanceInfo" className={styles.form__label}>
            Information
          </label>
          <textarea
            type="text"
            id="performanceInfo"
            className={styles.form__textarea}
          ></textarea>
        </div>

        <div className={`${styles.form__textsection} ${styles.form__button}`}>
          <ButtonPrimary type="submit">Add analysis</ButtonPrimary>
        </div>
      </form>
    </div>
  );
}
