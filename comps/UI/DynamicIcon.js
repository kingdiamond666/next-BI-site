import * as HIcons from '@heroicons/react/outline'
import {HeartIcon} from '@heroicons/react/outline'
const DynamicIcon = (props) => {
  const {...icons} = HIcons
  const TheIcon = icons[props.icon]
  return(
    <>
    {TheIcon ? <TheIcon className="h-6 w-6 text-white" aria-hidden="true" /> : <HeartIcon className="h-6 w-6 text-white" aria-hidden="true" />}
    </>
    )

}

export default DynamicIcon
