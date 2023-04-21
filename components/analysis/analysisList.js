import styles from "./analysisList.module.scss";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineRadarChart } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import Link from "next/link";

export default function ProjectList(props) {
  function deleteHandler(id) {
    props.onDeleteAnalysis(id);
  }

  return (
    <div>
      <div>
        <h4 className={styles.heading_h4}>All analyses</h4>
        <h5 className={styles.heading_h5}>Sort by company, status, score</h5>
      </div>

      <table className={styles.table}>
        <thead className={styles.table__thead}>
          <tr>
            <th scope="col">Company</th>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
            <th scope="col">Total score</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className={styles.table__tbody}>
          {props.analysis.map(
            ({
              id,
              company,
              createdAt,
              status,
              accessibilityScore,
              accessibilityInfo,
              responsiveScore,
              seoScore,
              performanceScore,
              brandScore,
              designScore,
              contentScore,
            }) => {
              const date = new Date(createdAt)
                .toISOString()
                .slice(0, 11)
                .replace("T", " ");

              const totalScore =
                accessibilityScore +
                responsiveScore +
                seoScore +
                performanceScore +
                brandScore +
                designScore +
                contentScore;

              const newStatus = status === "PROGRESS" ? "In progress" : "Done";

              return (
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
                    {totalScore == 0 ? "" : `${totalScore} / 700`}
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
                    <Link
                      href={`/radarchart/${id}`}
                      className={`${styles.table__link} ${styles.table__link_analysis}`}
                    >
                      <span className={styles.table__icon}>
                        <AiOutlineFundProjectionScreen />
                      </span>
                    </Link>
                    <Link
                      href={`/admin/analyses/analysis/${id}`}
                      className={`${styles.table__link} ${styles.table__link_details}`}
                    >
                      <span className={styles.table__icon}>
                        <FiMoreVertical />
                      </span>
                    </Link>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
        <tfoot className={styles.table__tfoot}>
          <tr>
            <td colSpan="6"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
