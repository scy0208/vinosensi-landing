import { GlobeAmericasIcon, ChatBubbleLeftRightIcon, AcademicCapIcon, EnvelopeIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Your Online AI Sommelier',
    description:
      'Easily integrated into your website, our AI chatbot guides customers to discover and specify their needs, and provides wine recommendations from your inventories.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Your AI Branding Storyteller',
    description:
      'Our AI chatbot assimilates your branding story, your winery history, and founding family background, delivering them to your customers',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'Your Customer Relationship Manager',
    description:
      'Our platform captures, accumulates and analyzes customers chating, browsing, and purchase history to generate personalized marketing email campaigns.',
    icon: EnvelopeIcon,
  },
  {
    name: 'Your Customer Events Planner',
    description:
      'Our platform prodives information for planning customized tasting, touring, or other social events in a personalized way by grouping customer preferences.',
    icon: GlobeAmericasIcon,
  },
  {
    name: 'Your End to End Customer Supporter',
    description:
      'Our platform integrates with inventory, shipping, order tracking into the Chatbot to provide end to end customer supporting',
    icon: ChatBubbleLeftRightIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-600">Make Customers Happier</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to interact with your online customers
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          VinoSensei elevates your winery experiences with AI-driven wine curation, thorough customer analysis, bespoke events, and comprehensive support features.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}