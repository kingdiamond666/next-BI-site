
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import AnswerBoxGrid from '../AnswerBox/AnswerBoxGrid';
import NewQuestionCTA from './NewQuestionCTA';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function QuestionGrid({content, ctaSection}) {
  const {cta_title, cta_body, cta_button} = ctaSection;
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Example Questions</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {content.map((question) => (
              <Disclosure as="div" key={question.id} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">{question.big_question_title}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      {question.fact.map(fact => {
                        return(
                        <AnswerBoxGrid fact_number={fact.fact_number} pointId={fact.id} mainPoint={fact.fact_heading} subPoint={fact.fact_body}/>
                      )})}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
     <NewQuestionCTA title={cta_title} body={cta_body} buttonText={cta_button}/>
    </div>
  )
}
