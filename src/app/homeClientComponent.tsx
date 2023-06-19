"use client";

import styles from "./page.module.css";
import {useState} from "react"
import Pagination from '@mui/material/Pagination';


export default function HomeClientComponent({children
  ,totalPages,setCurrentPage
}:{
  children: React.ReactNode;
  totalPages: number;
  setCurrentPage: (currentPage: number) => void
}) {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(42);  
  console.log("test client")
  return (
    <main className={styles.main}>
      {children}
      <Pagination className={styles.mui_pagination} count={totalPages} color="primary" variant="outlined" shape="rounded" onChange={(e, value) => {
      console.log(value);
      setCurrentPage(value);
    }} />  
      <button> test 1</button>
      <button> test 2</button>
    </main>
  );
}