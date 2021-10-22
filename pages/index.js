import Head from 'next/head'
import React, {Fragment} from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePageBanner from '../comps/Banners/HomePageBanner'
import AboutUs from '../comps/About/AboutUs';
import PlatformFeatures from '../comps/About/PlatformFeatures';
import WorkWithUs from '../comps/About/WorkWithUs';
export default function Home() {
  return (
    <Fragment>
      <Head />
      <HomePageBanner/>
      <AboutUs />
      <PlatformFeatures />
      <WorkWithUs />
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/club_logo.png" alt="Vercel Logo" width={72} height={40} />
            </span>
          </a>
        </footer>
    </Fragment>
  )
}
