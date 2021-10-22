import { ChevronDownIcon } from '@heroicons/react/solid';
import React, {useState, useReducer} from 'react';
import AnswerBox from '../AnswerBox/AnswerBox';



const questionAnswers = [
  { 
    key: 0,
    question: 'What Is the LifeTime Value of my customer?',
    image: 'newplot (1).png', 
    heading: 'The LTV of your customer is $258.19',
    keyTakeAwayHeadings: [
      {
        mainPoint: "New customers spend an average of $142.64 on their first order, but over their lifetime they're worth $258.19.",
        subPoint: "Since 124 new customers are acquired each month, an LTV of $258.19 means that these customers are actually worth $32.0k over their lifetimes.",
      },
      {
        mainPoint:"Order retention (32%) is the biggest driver of LTV.",
        subPoint: "The impact of retention is compounded on subsequent orders making it a significant driver of LTV",
      },
      {
        mainPoint: "Expect a timeframe of 617 days to accrue LTV.",
        subPoint: "Most of a customer's LTV will be accrued in the 617 days after their first purchase",
      },
      {
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
      mainPoint: "Customers who received their order in 2 days:",
      subPoint: "Customers who's orders made it to them in 2 days average a likelihood of 39.56% likelihood to re-purchase within the next 7 days."
      },
      {
        mainPoint: "Customers who received their order in 3 days:",
        subPoint: "Customers who's orders made it to them in 3 days average a likelihood of 35.65% likelihood to re-purchase within the next 7 days."
      },
      {
        mainPoint: "Customers who received their order in 4 days:",
        subPoint: "Customers who's orders made it to them in 4 days average a likelihood of 30.88% likelihood to re-purchase within the next 7 days."
      }
    ]
  }
]


export default function AboutUs() {
  const [question, setQuestion] = useState({
    key: 1,
    question: 'Where Should I Spend My Ad Budget?',
    image: 'newplot (2).png', 
    heading: 'Your web tracking is GREAT, so there\'s no need to take immediate action',
    keyTakeAwayHeadings: [
      "Web Tracking Status: GREAT"
    ],
    keyTakeAwayBody: [
      "Last week, 100% of customers can be tied back to their web behavior in the data. Anything over 85% is considered good."
    ]
  });


  const passOnSelectedOption = (e) => {
    const answerBox = questionAnswers[e.target.options.selectedIndex]
    setQuestion({...answerBox})
    console.log(question)
  }

  return (
    <div id="AboutUs" className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between grid grid-row-3 row-auto gap-4">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Us
          </h2>
          <p className="mt-5 text-xl text-gray-400">
            We provide the genie in the bottle. You ask the questions the genie answers.
          </p>
        </div>
        <div className="row-span-3">
        <div className="mt-10 w-full max-w-xs">
          <label htmlFor="questions" className="block text-base font-medium text-gray-300">
            Example Questions:
          </label>
          <div className="mt-1.5 relative">
            <select
              id="currency"
              name="currency"
              className="appearance-none block w-full bg-none bg-gray-700 border border-transparent rounded-md pl-3 pr-10 py-2 text-base text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white sm:text-sm"
              defaultValue="Where Should I Spend My Ad Budget?"
              onChange={passOnSelectedOption}
            >
              <option key="0">What Is the LifeTime Value of my customer?</option>
              <option key="1">How well am I tracking my customer life-cycle?</option>
              <option key="2">How Do My Shipping Times Effect Re-Orders?</option>
              <option key="3">Where Should I Spend My Ad Budget?</option>
              <option key="4">What Is The Entire Customer Journey For My Top Buyers?</option>
              <option key="5">What Day Of The Week Are My Customers Shopping?</option>
              <option key="6">How Do I Convert More Loyalists?</option>
              <option key="7">What Do My Customers Think of My Brand?</option>
              <option key="8">How Do I Get My Customers To Buy 2X More Times/Week?</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
              <ChevronDownIcon className="h-4 w-4 text-white" aria-hidden="true" />
            </div>
          </div>
        </div>

      <AnswerBox image={question.image} key={question.key} question={question.question} heading={question.heading} keyTakeAwayHeadings={question.keyTakeAwayHeadings} keyTakeAwayBody={question.keyTakeAwayBody}/>
      </div>
      </div>
    </div>
  )
}