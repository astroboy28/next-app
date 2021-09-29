import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
     <> {/* the content must be inside this fragment */}
    <Head> {/* this is the title of the page */}
      <title>This is the Homepage</title> 
      <meta name="these are my keywords" content="sample next site"/>  {/* this is the metadata for keywords, etc. */}
    </Head>
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nihil eius, aperiam qui dolor blanditiis ea pariatur. Id, odio voluptatibus.</p>
      <Link href="/about">
        <a className={styles.btn}>See more</a>
      </Link>    
    </div>
    </>
  )
}


