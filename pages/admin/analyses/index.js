import AdminLayout from "@/components/layout/adminLayout";
import AnalysisList from "@/components/analysis/analysisList";
import AnalysisForm from "@/components/analysis/analysisForm";
import { prisma } from "../../../prisma/client";
import styles from "./index.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

import { ButtonSecondary } from "@/components/ui/buttons";

export default function Analysis({ analysisData }) {
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  async function createAnalysisHandler(analysisInputedData) {
    const response = await fetch("/api/analysis/create", {
      method: "POST",
      body: JSON.stringify(analysisInputedData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status < 300) {
      refreshData();
    }
  }

  async function updateAnalysisHandler(analysisInputedData) {
    // const response = await fetch("/api/analysis/create", {
    //   method: "POST",
    //   body: JSON.stringify(analysisInputedData),
    //   headers: { "Content-Type": "application/json" },
    // });
    // if (response.status < 300) {
    //   refreshData();
    // }
  }

  async function deleteAnalysisHandler(id) {
    console.log(id);
    const response = await fetch(`/api/analysis/delete`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
      }),
    });
    const json = await response.json();
    if (response.status < 300) {
      refreshData();
    }
  }

  return (
    <AdminLayout>
      <h1 className={styles.heading_h1}>ANALYSES</h1>
      <AnalysisList
        analysis={analysisData}
        onDeleteAnalysis={deleteAnalysisHandler}
        onUpdateAnalysis={updateAnalysisHandler}
      />
      <AnalysisForm onCreateAnalysis={createAnalysisHandler} />
    </AdminLayout>
  );
}

export async function getServerSideProps() {
  const getAnalysis = await prisma.analysis.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return {
    props: {
      analysisData: JSON.parse(JSON.stringify(getAnalysis)),
    },
  };
}
