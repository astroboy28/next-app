import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>HomePage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nihil eius, aperiam qui dolor blanditiis ea pariatur. Id, odio voluptatibus.</p>
      <Footer />
    </div>
  )
}
