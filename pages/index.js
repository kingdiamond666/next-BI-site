import Head from 'next/head'
import React, {Fragment} from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePageBanner from '../comps/Banners/HomePageBanner'
import AboutUs from '../comps/About/AboutUs';
import PlatformFeatures from '../comps/About/PlatformFeatures';
import WorkWithUs from '../comps/About/WorkWithUs';
import Form from '../comps/Form/Form';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ModalInner from '../comps/Modals/ModalInner';
import {useState} from 'react';


Modal.setAppElement('#__next');

export default function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const handleFormSuccess = async (value) => {
    await value;
    if(value){
      setIsOpen(true)
      console.log('from the main');
      console.log(modalIsOpen);
    }
  }

const closeModal = () => {
  setIsOpen(false);
}

const firstNameHandler = name => {
  setFirstName(name)
}

  return (
    <Fragment>
      <Head />
      <HomePageBanner/>
      <AboutUs />
      <PlatformFeatures />

      <ModalInner firstName={firstName} closeModal={closeModal} isOpen={modalIsOpen}/>

      <WorkWithUs />
      <Form onSuccess={handleFormSuccess} handleFirstName={firstNameHandler}/>
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
