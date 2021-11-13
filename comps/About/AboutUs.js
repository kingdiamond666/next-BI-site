
import React, {useState, useReducer, useEffect} from 'react';
import AnswerBox from '../AnswerBox/AnswerBox';

export default function AboutUs({contentInside}) {
  const {title, description} = contentInside;
  return (
    <div id="AboutUs" className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between grid grid-row-3 row-auto gap-4">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {title}
          </h2>
          <p className="mt-5 text-xl text-gray-400">
          { description }
          </p>
        </div>
      </div>
    </div>
  )
}
