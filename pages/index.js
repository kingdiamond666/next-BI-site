//Next Shelf
import Head from 'next/head'
import Image from 'next/image'

//React Shelf
import React, {Fragment,useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

//Styles Shelf
import styles from '../styles/Home.module.css'

//Component Shelf
import AboutUs from '../comps/About/AboutUs'
import FeaturedBy from '../comps/Banners/FeaturedBy'
import Footer from '../comps/Footer/Footer'
import Form from '../comps/Form/Form'
import HomePageBanner from '../comps/Banners/HomePageBanner'
import ModalInner from '../comps/Modals/ModalInner'
import PlatformFeatures from '../comps/About/PlatformFeatures'
import QuestionGrid from '../comps/About/QuestionGrid'
import WorkWithUs from '../comps/About/WorkWithUs'

//Set Modal to attach to root element in Next App
Modal.setAppElement('#__next')


export async function getStaticProps() {
  const res = await fetch (process.env.CLUB_API)
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}

export default function Home({data}) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [firstName, setFirstName] = useState('')
  const handleFormSuccess = async (value) => {
    await value
    if(value){
      setIsOpen(true)
    }
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const firstNameHandler = name => {
    setFirstName(name)
  }

const{menu_items, header, about, big_question, question_cta, text_block, modal, copy_section, form_cta_section, footer_menu_items} = data

  return (
    <Fragment>
      <Head />
      <HomePageBanner menuItems={menu_items} content={header} />
      <FeaturedBy />
      <AboutUs contentInside={about}/>
      <QuestionGrid content={big_question} ctaSection={question_cta}/>
      <PlatformFeatures content={text_block} />
      <ModalInner content={modal} firstName={firstName} closeModal={closeModal} isOpen={modalIsOpen}/>
      <WorkWithUs content={copy_section}/>
      <Form content={form_cta_section} onSuccess={handleFormSuccess} handleFirstName={firstNameHandler}/>
      <Footer content={footer_menu_items}/>
    </Fragment>
  )
}
