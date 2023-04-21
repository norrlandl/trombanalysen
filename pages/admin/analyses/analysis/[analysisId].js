import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineRadarChart } from "react-icons/ai";
import { prisma } from "../../../../prisma/client";
import styles from "./analysisId.module.scss";
import AdminLayout from "@/components/layout/adminLayout";
import { ButtonTertiary } from "@/components/ui/buttons";

export default function AnalysisDetails({ analysis }) {
  console.log(analysis);

  const {
    id,
    createdAt,
    company,
    status,
    accessibilityScore,
    responsiveScore,
    seoScore,
  } = analysis;

  const date = new Date(createdAt).toISOString().slice(0, 11).replace("T", " ");

  const newStatus = status === "PROGRESS" ? "In progress" : "Done";

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
                    <AiOutlineRadarChart />
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
        <ButtonTertiary link="/admin/analyses">Tillbaka</ButtonTertiary>
      </div>
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
