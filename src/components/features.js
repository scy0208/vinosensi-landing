import { GlobeAmericasIcon, ChatBubbleLeftRightIcon, AcademicCapIcon, FaceSmileIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'AI Sommelier Integration',
    description:
      'Our chatbot guides customers to discover and specify their needs, and provides wine recommendations from your inventorys.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Customer Relationship Management',
    description:
      'Captur, accumulate and analyze customers preferences, browsing, and purchase history to generate personalized marketing campaigns in personalized emails.',
    icon: FaceSmileIcon,
  },
  {
    name: 'Customized Events Planning',
    description:
      'Planning customized tasting, touring, or other social events by grouping user preferences and market them in a personalized.',
    icon: GlobeAmericasIcon,
  },
  {
    name: 'Customer Supporting Integration',
    description:
      'Integrate with inventory, shipping, order tracking and feedback to provide end to end customer supporting',
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
            VinoSensi enhance your winery experiences through AI-driven wine curation, in-depth customer analysis, tailor-made events, and comprehensive support features.
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