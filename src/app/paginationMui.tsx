"use client"
import Pagination from '@mui/material/Pagination';
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
export default function PaginationMui (){
  const router = useRouter()
  return (
    <Pagination className={styles.mui_pagination} count={42} color="primary" variant="outlined" shape="rounded" 
    onChange={(e, value) => {
      console.log(value)
      router.push(`/${value}`)
      
    }} />
  )
}