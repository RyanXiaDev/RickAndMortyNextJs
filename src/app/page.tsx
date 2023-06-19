//import Image from 'next/image'
'use client'
import { useEffect, useState } from 'react';
import styles from './page.module.css'
import Pagination from '@mui/material/Pagination';


export default function Home() {
  const [results, setResults] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  useEffect(() => {
    async function request() {
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      const data = await res.json();
      setResults(data.results)
      setTotalPages(data.info.pages);
    }
    request()

  }, [currentPage])
  return (
    <main className={styles.main}>
      <ul className={styles.grid}>
        {results.map((result: { id: any; name: any; image: string; }) => {
          const { id, name, image } = result;
          return (
            <li key={id} className="card">
              <img src={image} width={200} height={200} alt={`picture of ${name}`} />
              <h3>{name}</h3>
            </li>
          )
        })}
      </ul>
      <Pagination className={styles.mui_pagination} count={totalPages} color="primary" variant="outlined" shape="rounded" onChange={(e, value) => {
        console.log(value);
        setCurrentPage(value);
      }} />
    </main>
  )
}
