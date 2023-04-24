import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { MdDeleteOutline } from "react-icons/md";
import { prisma } from "../../../../prisma/client";
import styles from "./analysisId.module.scss";
import AdminLayout from "@/components/layout/adminLayout";
import { ButtonTertiary, ButtonPrimary } from "@/components/ui/buttons";
import {
  AiOutlineSound,
  AiOutlineMobile,
  AiOutlineSearch,
  AiOutlineFundProjectionScreen,
  AiOutlineTrademark,
} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BiPaint } from "react-icons/bi";

export default function AnalysisDetails({ analysis }) {
  // console.log(analysis);

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const {
    id,
    createdAt,
    company,
    status,
    accessibilityScore,
    accessibilityInfo,
    responsiveScore,
    responsiveInfo,
    seoScore,
    seoInfo,
    performanceScore,
    performanceInfo,
    brandScore,
    brandInfo,
    designScore,
    designInfo,
    contentScore,
    contentInfo,
  } = analysis;

  const date = new Date(createdAt).toISOString().slice(0, 11).replace("T", " ");

  const newStatus = status === "PROGRESS" ? "In progress" : "Done";

  const form = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const analysisUpdateData = {
      id: id,
      company: form.current.company.value,
      status: form.current.status.value,
      accessibilityScore: parseInt(form.current.accessibilityScore.value),
      accessibilityInfo: form.current.accessibilityInfo.value,
      responsiveScore: parseInt(form.current.responsiveScore.value),
      responsiveInfo: form.current.responsiveInfo.value,
      seoScore: parseInt(form.current.seoScore.value),
      seoInfo: form.current.seoInfo.value,
      performanceScore: parseInt(form.current.performanceScore.value),
      performanceInfo: form.current.performanceInfo.value,
      brandScore: parseInt(form.current.brandScore.value),
      brandInfo: form.current.brandInfo.value,
      designScore: parseInt(form.current.designScore.value),
      designInfo: form.current.designInfo.value,
      contentScore: parseInt(form.current.contentScore.value),
      contentInfo: form.current.contentInfo.value,
    };

    console.log(analysisUpdateData);

    const response = await fetch(`/api/analysis/update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(analysisUpdateData),
    });
    const json = await response.json();
    console.log(json);

    if (response.status < 300) {
      refreshData();
    }
  };

  function deleteHandler(id) {
    props.onDeleteAnalysis(id);
  }

  return (
    <AdminLayout>
      <div>
        <h1 className={styles.heading_h1}>{company}</h1>

        <div>
          <h4 className={styles.heading_h4}>{company}</h4>
          <h5 className={styles.heading_h5}>Handle the user</h5>
        </div>

        <table className={styles.table}>
          <thead className={styles.table__thead}>
            <tr>
              <th scope="col">Company</th>
              <th scope="col">Status</th>
              <th scope="col">Date</th>
              <th scope="col">Accessibility</th>
              <th scope="col">Responsive</th>
              <th scope="col">SEO</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className={styles.table__tbody}>
            <tr key={id} className={styles.table__tbody_tr}>
              <td className={styles.table__tbody_td}>{company}</td>
              <td
                className={`${
                  status === "DONE"
                    ? styles.table__tbody_td_green
                    : styles.table__tbody_td_blue
                }`}
              >
                <span>{newStatus}</span>
              </td>
              <td className={styles.table__tbody_td}>{date}</td>
              <td className={styles.table__tbody_td}>
                {accessibilityScore == null
                  ? ""
                  : `${accessibilityScore} / 100`}
              </td>
              <td className={styles.table__tbody_td}>
                {responsiveScore == null ? "" : `${responsiveScore} / 100`}
              </td>
              <td className={styles.table__tbody_td}>
                {seoScore == null ? "" : `${seoScore} / 100`}
              </td>
              <td
                className={`${styles.table__tbody_td} ${styles.table__tbody_td_actions}`}
              >
                <button
                  onClick={() => deleteHandler(id)}
                  className={`${styles.table__button} ${styles.table__icon_delete}`}
                >
                  <span className={styles.table__icon}>
                    <MdDeleteOutline />
                  </span>
                </button>
                <button
                  className={`${styles.table__button} ${styles.table__icon_analysis}`}
                >
                  <span className={styles.table__icon}>
                    <AiOutlineFundProjectionScreen />
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot className={styles.table__tfoot}>
            <tr>
              <td colSpan="7"></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div>
        <h4 className={styles.heading_h4}>Update analysis</h4>
        <h5 className={styles.heading_h5}>Handle the analysis</h5>
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
            defaultValue={company}
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
            defaultValue={status}
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
            defaultValue={accessibilityScore}
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
            defaultValue={accessibilityInfo}
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
            defaultValue={responsiveScore}
            className={styles.form__input}
          ></input>

          <label htmlFor="responsiveInfo" className={styles.form__label}>
            Information
          </label>
          <textarea
            type="text"
            id="responsiveInfo"
            defaultValue={responsiveInfo}
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
            defaultValue={seoScore}
            className={styles.form__input}
          ></input>

          <label htmlFor="seoInfo" className={styles.form__label}>
            Information
          </label>
          <textarea
            type="text"
            id="seoInfo"
            defaultValue={seoInfo}
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
            defaultValue={performanceScore}
            className={styles.form__input}
          ></input>

          <label htmlFor="performanceInfo" className={styles.form__label}>
            Information
          </label>
          <textarea
            type="text"
            id="performanceInfo"
            defaultValue={performanceInfo}
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
            defaultValue={brandScore}
            className={styles.form__input}
          ></input>

          <label htmlFor="brandInfo" className={styles.form__label}>
            Information
          </label>
          <textarea
            type="text"
            id="brandInfo"
            defaultValue={brandInfo}
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
            defaultValue={designScore}
            className={styles.form__input}
          ></input>

          <label htmlFor="designInfo" className={styles.form__label}>
            Information
          </label>
          <textarea
            type="text"
            id="designInfo"
            defaultValue={designInfo}
            className={styles.form__textarea}
          ></textarea>
        </div>

        <div className={styles.form__textsection}>
          <div className={styles.form__textsection_header}>
            <span className={styles.form__icon}>
              <BiPaint />
            </span>
            <h6 className={styles.heading_h6}>Content</h6>
          </div>
          <label htmlFor="contentScore" className={styles.form__label}>
            Score
          </label>
          <input
            type="number"
            id="contentScore"
            defaultValue={contentScore}
            className={styles.form__input}
          ></input>

          <label htmlFor="contentInfo" className={styles.form__label}>
            Information
          </label>
          <textarea
            type="text"
            id="contentInfo"
            defaultValue={contentInfo}
            className={styles.form__textarea}
          ></textarea>
        </div>

        <div className={`${styles.form__textsection} ${styles.form__button}`}>
          <ButtonPrimary type="submit">Update analysis</ButtonPrimary>
        </div>
      </form>
      <ButtonTertiary link="/admin/analyses"> &larr; Tillbaka</ButtonTertiary>
    </AdminLayout>
  );
}

export async function getServerSideProps(context) {
  const { analysisId } = context.query;

  const analysis = await prisma.analysis.findUnique({
    where: {
      id: analysisId,
    },
  });

  return {
    props: {
      analysis: JSON.parse(JSON.stringify(analysis)),
    },
  };
}
