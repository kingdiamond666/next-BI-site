export default function NewQuestionCTA({title, body, buttonText}) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
            <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                <span className="block sm:inline">{title}</span>
              </h2>
              <p className="mt-3 text-xl text-white">
                {body}
              </p>
              <a
                href="/NewQuestion"
                className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
