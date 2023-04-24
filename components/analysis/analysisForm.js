import { useRef } from "react";
import styles from "./analysisForm.module.scss";
import { ButtonPrimary } from "@/components/ui/buttons";
import {
  AiOutlineSound,
  AiOutlineMobile,
  AiOutlineSearch,
  AiOutlineRead,
  AiOutlineTrademark,
} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BiPaint } from "react-icons/bi";

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
      brandInfo: form.current.brandInfo.value,
      brandScore: parseInt(form.current.brandScore.value),
      designInfo: form.current.designInfo.value,
      designScore: parseInt(form.current.designScore.value),
      contentInfo: form.current.contentInfo.value,
      contentScore: parseInt(form.current.contentScore.value),
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

        <div className={styles.form__textsection}>
          <div className={styles.form__textsection_header}>
            <span className={styles.form__icon}>
              <AiOutlineTrademark />
            </span>
            <h6 className={styles.heading_h6}>Brand</h6>
          </div>
          <label htmlFor="brandScore" className={styles.form__label}>
            Score
          </label>
          <input
            type="number"
            id="brandScore"
            className={styles.form__input}
          ></input>

          <label htmlFor="brandInfo" className={styles.form__label}>
            Information
          </label>
          <textarea
            type="text"
            id="brandInfo"
            className={styles.form__textarea}
          ></textarea>
        </div>

        <div className={styles.form__textsection}>
          <div className={styles.form__textsection_header}>
            <span className={styles.form__icon}>
              <BiPaint />
            </span>
            <h6 className={styles.heading_h6}>Design</h6>
          </div>
          <label htmlFor="designScore" className={styles.form__label}>
            Score
          </label>
          <input
            type="number"
            id="designScore"
            className={styles.form__input}
          ></input>

          <label htmlFor="designInfo" className={styles.form__label}>
            Information
          </label>
          <textarea
            type="text"
            id="designInfo"
            className={styles.form__textarea}
          ></textarea>
        </div>

        <div className={styles.form__textsection}>
          <div className={styles.form__textsection_header}>
            <span className={styles.form__icon}>
              <AiOutlineRead />
            </span>
            <h6 className={styles.heading_h6}>Content</h6>
          </div>
          <label htmlFor="contentScore" className={styles.form__label}>
            Score
          </label>
          <input
            type="number"
            id="contentScore"
            className={styles.form__input}
          ></input>

          <label htmlFor="contentInfo" className={styles.form__label}>
            Information
          </label>
          <textarea
            type="text"
            id="contentInfo"
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
