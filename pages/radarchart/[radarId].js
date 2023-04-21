import styles from "./radarchart.module.scss";
import Link from "next/link";
import Image from "next/image";
import img from "../../public/img.svg";
import { prisma } from "../../prisma/client";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

export default function Radarchart({ analysis }) {
  console.log(analysis);

  const {
    accessibilityScore,
    responsiveScore,
    seoScore,
    performanceScore,
    brandScore,
    designScore,
    contentScore,
  } = analysis;

  const radarChartData = [
    { name: "Accessibility", value: accessibilityScore },
    { name: "Responsive", value: responsiveScore },
    { name: "SEO", value: seoScore },
    { name: "Performance", value: performanceScore },
    { name: "Brand", value: brandScore },
    { name: "Design", value: designScore },
    { name: "Content", value: contentScore },
  ];

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
            <div>
              <RadarChart
                height={500}
                width={500}
                outerRadius="80%"
                data={radarChartData}
              >
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis angle={60} domain={[0, 100]} />
                <Radar
                  dataKey="value"
                  stroke="#014147"
                  fill="#A6DDD8"
                  strokeWidth={2}
                  fillOpacity={0.6}
                />
              </RadarChart>
            </div>
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
