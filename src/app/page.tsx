//import Image from 'next/image'

import styles from './page.module.css'
import { redirect } from 'next/navigation';
import PaginationMui from './paginationMui';


export default function Home() {
  redirect('/1')
  return (
    <main className={styles.main}>
      
      <PaginationMui />
    </main>
  )
}
