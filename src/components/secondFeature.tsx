import { AcademicCapIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Cutting-Edge Wine AI Model',
    description:
      'Designed by a team of renowned sommeliers, data scientists, and machine learning experts, the Cutting-Edge Wine AI Model employs state-of-the-art algorithms to decipher the complex characteristics of wines. By ingesting vast amounts of historical and sensory data, it possesses an unrivaled ability to accurately predict and evaluate various aspects of a wine\'s quality, including flavor profiles, ageability, and food pairing recommendations. ',
    icon: AcademicCapIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Delivering wisdom</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your AI Sommelier</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Using cutting-edge AI technology, our AI agent trained with wine knowledge and designed to answer wine questions
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://d2aaddunp29031.cloudfront.net/feature5.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}