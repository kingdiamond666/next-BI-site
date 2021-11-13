/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import AnswerBoxGrid from '../AnswerBox/AnswerBoxGrid';

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: ""
  }
  // More questions...
]

const questionAnswers = [
  {
    key: 0,
    question: 'What Is the LifeTime Value of my customer?',
    image: 'newplot (1).png',
    heading: 'The LTV of your customer is $258.19',
    keyTakeAwayHeadings: [
      {
        takeAwayId: 0,
        mainPoint: "New customers spend an average of $142.64 on their first order, but over their lifetime they're worth $258.19.",
        subPoint: "Since 124 new customers are acquired each month, an LTV of $258.19 means that these customers are actually worth $32.0k over their lifetimes.",
      },
      {
        takeAwayId: 1,
        mainPoint:"Order retention (32%) is the biggest driver of LTV.",
        subPoint: "The impact of retention is compounded on subsequent orders making it a significant driver of LTV",
      },
      {
        takeAwayId: 2,
        mainPoint: "Expect a timeframe of 617 days to accrue LTV.",
        subPoint: "Most of a customer's LTV will be accrued in the 617 days after their first purchase",
      },
      {
        takeAwayId: 3,
        mainPoint: "Maximize LTV with the Optimizing LTV Narrative.",
        subPoint: "The unit economics of LTV can have a large impact throughout the business. Use the Optimizing LTV Narrative to identify areas that will have the biggest impact on LTV"
      }
    ],
  },
  {
    key: 1,
    question: 'How well am I tracking my customer life-cycle?',
    image: 'newplot (2).png',
    heading: 'Your web tracking is GREAT, so there\'s no need to take immediate action',
    keyTakeAwayHeadings: [
      {
      takeAwayId: 0,
      mainPoint: "Web Tracking Status: GREAT",
      subPoint: "Last week, 100% of customers can be tied back to their web behavior in the data. Anything over 85% is considered good."
      }
    ]
  },
  {
    key: 2,
    question: 'How Do My Shipping Times Effect Future Purchase Behavior?',
    image: 'newplot (7).png',
    heading: 'The likelihood of a re-order drops by 5.38% after day 7 of waiting for their order to arrive.',
    keyTakeAwayHeadings: [
      {
      takeAwayId: 0,
      mainPoint: "Customers who received their order in 2 days:",
      subPoint: "Customers who's orders made it to them in 2 days average a likelihood of 39.56% likelihood to re-purchase within the next 7 days."
      },
      {
        takeAwayId: 1,
        mainPoint: "Customers who received their order in 3 days:",
        subPoint: "Customers who's orders made it to them in 3 days average a likelihood of 35.65% likelihood to re-purchase within the next 7 days."
      },
      {
        takeAwayId: 2,
        mainPoint: "Customers who received their order in 4 days:",
        subPoint: "Customers who's orders made it to them in 4 days average a likelihood of 30.88% likelihood to re-purchase within the next 7 days."
      }
    ]
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function QuestionGrid({content}) {

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
    </div>
  )
}
