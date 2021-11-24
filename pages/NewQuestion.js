
import {useState} from 'react'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import Footer from '../comps/Footer/Footer'
import MainMenu from '../comps/UI/MainMenu'
import NewQuestionForm from '../comps/Form/NewQuestionForm'
import ModalInner from '../comps/Modals/ModalInner'
import {server} from '../config/'
import {fetch} from 'node-fetch'

export async function getStaticProps() {
  const res = await fetch (server)
  const data = await res.json();
  return {
    props: {
      data,
    },
  }
}
export default function NewQuestion({data}) {
  const {question_page} = data;
  const {page_title, page_body, form_cta, form_sub_cta} = question_page;
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
  const menuItems = data.menu_items;


  return (
    <>
    <MainMenu menuItems={menuItems} />
    <ModalInner content={data.modal} firstName={firstName} closeModal={closeModal} isOpen={modalIsOpen}/>

    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="relative bg-white shadow-xl">
          <h2 className="sr-only">Ask Us A Question</h2>

          <div className="grid grid-cols-1 ">
            {/* Contact information */}
            <div className="relative overflow-hidden py-10 px-6 bg-indigo-700 sm:px-10 xl:p-12">
              <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-extrabold text-white">{page_title}</h1>
                <h2 className="text-xl font-extrabold text-white mt-4">{page_body}</h2>
                <div className="flow-root mt-8 lg:mt-10">
                  <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                      <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg" alt="Tuple" />
                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                      <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-indigo-300.svg" alt="Mirage" />
                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                      <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/statickit-logo-indigo-300.svg"
                        alt="StaticKit"
                      />
                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                      <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/transistor-logo-indigo-300.svg"
                        alt="Transistor"
                      />
                    </div>
                    <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">
                      <img
                        className="h-12"
                        src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
                        alt="Workcation"
                      />
                    </div>
                  </div>
                </div>
                <NewQuestionForm onSuccess={handleFormSuccess} handleFirstName={firstNameHandler} cta={form_cta} subCta={form_sub_cta}/>

            </div>

            {/* Contact form */}

          </div>
        </div>
      </div>
    </div>

  </div>
    <Footer content={data.footer_menu_items}/>
    </>
  )
}
