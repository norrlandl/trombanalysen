import styles from "./radarchart.module.scss";
import Link from "next/link";
import Radar from "react-d3-radar";
import Image from "next/image";
import img from "../../public/img.svg";
import { prisma } from "../../prisma/client";

export default function Radarchart({ analysis }) {
  console.log(analysis);

  const {
    accessibilityScore,
    responsiveScore,
    seoScore,
    brandScore,
    designScore,
    ContentScore,
  } = analysis;

  return (
    <div className={styles.flexContainer}>
      <div className={styles.item}>
        <div className={styles.item__text}>
          <h3 className={styles.heading_h3}>Duis euismod ut</h3>
          <h1 className={styles.heading_h1}>tincidunt turpis</h1>
          <p className={styles.paragraph}>
            Leo quis cursus at risus nunc diam morbi adipiscing. Semper quisque
            quis integer senectus elementum. Aliquet massa tellus vehicula fames
            aliquet.
          </p>
          <Link href="/accessibility" legacyBehavior>
            <a className={`${styles.btn} ${styles.btn__primary}`}>
              Dive deeper &rarr;
            </a>
          </Link>
          <div>
            {accessibilityScore}
            {/* <div>
              <Radar
                width={500}
                height={500}
                padding={80}
                domainMax={10}
                highlighted={null}
                // onHover={(point) => {
                //   if (point) {
                //     console.log("hovered over a data point", point);
                //   } else {
                //     console.log("not over anything");
                //   }
                // }}
                data={{
                  variables: [
                    {
                      key: "accessibility",
                      label: "Accessibility",
                    },
                    { key: "strength", label: "Strength" },
                    { key: "adaptability", label: "Adaptability" },
                    { key: "creativity", label: "Creativity" },
                    { key: "openness", label: "Open to Change" },
                    { key: "confidence", label: "Confidence" },
                  ],
                  sets: [
                    {
                      key: "me",
                      label: "My Scores",
                      values: {
                        accessibility: accessibilityScore,
                        strength: responsiveScore,
                        adaptability: seoScore,
                        creativity: accessibilityScore,
                        openness: { accessibilityScore },
                        confidence: { accessibilityScore },
                      },
                    },
                  ],
                }}
              />
            </div> */}
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.item__img}>
          <Image src={img} className={styles.logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { radarId } = context.query;

  const analysis = await prisma.analysis.findUnique({
    where: {
      id: radarId,
    },
  });

  return {
    props: {
      analysis: JSON.parse(JSON.stringify(analysis)),
    },
  };
}
