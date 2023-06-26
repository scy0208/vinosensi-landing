import { GlobeAmericasIcon, ChatBubbleLeftRightIcon, AcademicCapIcon, EnvelopeIcon, BuildingLibraryIcon, ClockIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Online AI Sommelier',
    description:
      'Easily integrated into your website, our AI chatbot guides customers to discover and specify their needs, and provides wine recommendations from your inventories.',
    icon: AcademicCapIcon,
  },
  {
    name: 'AI Sales Agent',
    description:
      'Our AI chatbot in your website assimilates extensive knowledge about your winery\'s unique history, story, offering and delivering them to your customers.',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'AI Marketing Content Creator',
    description:
      'Our platform captures, accumulates and analyzes customers chatting, browsing, and purchase history to generate personalized email marketing content and integrate with your marketing tool.',
    icon: EnvelopeIcon,
  },
  {
    name: 'AI-Optimized Wine Tasting',
    description:
      'Booking visiting and wine tasting by directly chatting with our AI Chatbot in your website.',
    icon: ClockIcon,
  },
  {
    name: 'AI Wine Club Customer Manager',
    description:
      'Our platform optimizes your wine club member retention through member preference tracking, feedback collection.',
    icon: GlobeAmericasIcon,
  },
  {
    name: 'End to End AI Customer Supporter',
    description:
      'Our AI Chatbot integrates with your inventory, shipping, order tracking to provide end to end customer supporting.',
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
        <div className="mx-auto mt-16 max-w-xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
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