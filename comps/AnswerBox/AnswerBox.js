import React from 'react';
import { DocumentReportIcon } from '@heroicons/react/outline';
import Image from 'next/image';

export default function AnswerBox({key, question, image, heading, keyTakeAwayHeadings, keyTakeAwayBody}) {
    console.log(keyTakeAwayHeadings)
    return (
        <div className="pt-10 space-y-4">
            <div className="aspect-w-3 aspect-h-2">
                <Image className="object-cover shadow-lg rounded-lg" src={`/graphs/${image}`} width={750} height={400} />
            </div>
            <div className="text-lg leading-6 font-medium space-y-1">
                <h3 className="text-indigo-600 text-2xl font-extrabold text-white sm:text-3xl sm:tracking-tight lg:text-3xl">Question:</h3>
                <h4 className="text-indigo-400 text-1xl font-extrabold text-white sm: text-2xl sm: tracking-tight lg:text-2xl">{question}</h4>
            </div>
            <div className="text-lg">
            <h3 className="text-indigo-600 text-2xl font-extrabold text-white sm:text-3xl sm:tracking-tight lg:text-3xl">Answer:</h3>
            <h4 className="text-indigo-400 text-1xl font-extrabold text-white sm: text-2xl sm: tracking-tight lg:text-2xl">{heading}</h4>
            </div>

            <ul role="list" className="pt-6 grid grid-cols-1 gap-y-20 lg:grid-cols-1 lg:gap-y-12 lg:gap-x-8">
            {keyTakeAwayHeadings.map((item) =>{
                return(
            
                <li className="">
                <div key={item.key} className="flex flex-col bg-white rounded-2xl shadow-xl">
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                    <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                    <DocumentReportIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900">{item.mainPoint}</h3>
                    <p className="mt-4 text-base text-gray-500">{item.subPoint}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                    <a href='#' className="text-base font-medium text-indigo-700 hover:text-indigo-600">
                    See Example<span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
                </div>            
                </li>
                )
                })
            }
            </ul>
        </div>
    )
}

