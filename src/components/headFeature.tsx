import { FilmIcon, MegaphoneIcon, CalendarDaysIcon, GiftIcon, TruckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Wine Club Manager',
    description:
      'Explaining Wine club term, price, service, offering and benefit',
    icon: GiftIcon,
  },
  {
    name: 'Visiting Guider',
    description:
      'Automating Tastings room booking & event booking',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Operation Information Deliver',
    description:
      'Answering questions about winery, vineyard, tastings room location & hour',
    icon: MegaphoneIcon,
  },
  {
    name: 'Branding Storyteller',
    description:
      'Delivering story about founders, winery, vineyards, winemaking process',
    icon: FilmIcon,
  },
  {
    name: 'eCommerce Helper',
    description:
      'Wine introduction, comparison, shipment policy, restriction, carrier information',
    icon: TruckIcon,
  },
]

export default function HeadFeature() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Answering faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Digital Agent</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Armed with all your winery information, our AI agent is here to provide immediate answers to any of your winery-related questions.
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
              src="https://d2aaddunp29031.cloudfront.net/digit-agent.png"
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
