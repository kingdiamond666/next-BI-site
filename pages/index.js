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
import QuestionGrid from '../comps/About/QuestionGrid';
import {useState, useEffect} from 'react';

//I am a test comment for a push

Modal.setAppElement('#__next');

export async function getStaticProps() {
  const res = await fetch ('http://localhost:1337/company')
  const data = await res.json();
  return {
    props: {
      data,
    },
  }
}

export default function Home({data}) {
  // const { about } = data;
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

const logIt = async() =>{
  const res = await fetch ('http://localhost:1337/company')
  const dataInArray = await res.json();
  const data = await dataInArray
  console.log(data.header.button)
}
  return (
    <Fragment>
      <Head />
      <HomePageBanner content={data.header} logTheData={logIt}/>
      <QuestionGrid content={data.big_question}/>
      <AboutUs contentInside={data.about}/>
      <PlatformFeatures content={data.text_block} />

      <ModalInner firstName={firstName} closeModal={closeModal} isOpen={modalIsOpen}/>

      <WorkWithUs content={data.copy_section}/>
      <Form content={data.form_cta_section} onSuccess={handleFormSuccess} handleFirstName={firstNameHandler}/>
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
