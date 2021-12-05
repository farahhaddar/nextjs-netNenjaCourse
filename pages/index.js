import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'



export default function Home() {
  return (
    <>
    <Head>
      <title>Test | Home Page</title>
      <meta name='about' description='Hello Home Page ' />
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}> Hello Farah</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam unde dignissimos veniam, odit dolores quos ut, fugiat sed dolore, sunt mollitia consequuntur eaque ipsa consectetur optio tempore? Sapiente, minus?</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laboriosam unde dignissimos veniam, odit dolores quos ut, fugiat sed dolore, sunt mollitia consequuntur eaque ipsa consectetur optio tempore? Sapiente, minus?</p>
      <Link href='/events'><a className={styles.btn}>SEE Events</a></Link>
    </div>
    </>
  
  )
}
