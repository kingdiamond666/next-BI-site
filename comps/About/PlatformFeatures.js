import React, {createElement} from 'react'

import DynamicIcon from '../UI/DynamicIcon';
//ICONS
import {
    ChatAltIcon,
    DocumentReportIcon,
    HeartIcon,
    InboxIcon,
    PencilAltIcon,
    ReplyIcon,
    TrashIcon,
    UsersIcon,
  } from '@heroicons/react/outline'


  export default function PlatformFeatures({content}) {
    const {features_title, features_subtitle, features} = content;
    return (
      <div id="Features" className="bg-indigo-700">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">{features_title}</h2>
          <p className="mt-4 max-w-3xl text-lg text-indigo-200">
            {features_subtitle}
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.id}>
                <div>
                  <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <DynamicIcon icon={feature.icon} />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white">{feature.feature_title}</h3>
                  <p className="mt-2 text-base text-indigo-200">{feature.feature_description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
