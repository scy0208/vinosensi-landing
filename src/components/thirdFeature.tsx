import { GlobeAmericasIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Multi-language AI system',
    description:
      'Our AI Agent is powered by OpenAI\'s cutting-edge GPT system, making it an exceptional tool for global wineries. With support for over 95 languages, it possesses the ability to seamlessly translate your winery and wine insights, ensuring that the rich information reaches users in the language they are most comfortable with. This greatly enhances communication and understanding, and opens doors to a wider audience, bridging gaps between cultures and promoting the universal appreciation of fine wines.',
    icon: GlobeAmericasIcon,
  },
]

export default function ThirdFeature() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Bridging Borders</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your International Brand Ambassador</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Our AI Agent supports over 95 languages and help you enagage customers all over the world
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
          <div className="flex items-start justify-end lg:order-first">
            <img
              src="https://d2aaddunp29031.cloudfront.net/feature4.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}