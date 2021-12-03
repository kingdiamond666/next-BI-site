/* This example requires Tailwind CSS v2.0+ */
export default function FeaturedBy() {
  return (
    <div className=" bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          We've worked with some names you might know...
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="/companyLogos/grey/New-Wear-It-To-Heart-Lettermark-Grey@1x.png"
              alt="Wear It To Heart"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-12" src="/companyLogos/grey/Beatifics-Logo-Grey.png" alt="Beatifics" />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-24" src="/companyLogos/grey/peloton-2.png" alt="Peloton" />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-24" src="/companyLogos/grey/LJ-Angled-Badge-Grey@Large.png" alt="Lauren James" />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
              alt="Transistor"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
