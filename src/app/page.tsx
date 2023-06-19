"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

import HomeClientComponent from "./homeClientComponent";
import HomeServerComponent from "./homeServerComponent";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(42);

  return (
    <main className={styles.main}>
      <HomeClientComponent
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      >
        <HomeServerComponent/>
      </HomeClientComponent>
    </main>
  );
}
