export const categories = [
  {
    slug: 'travel-insurance',
    name: 'Travel Insurance',
    icon: '🛡️',
    accentColor: '#C4714F',
    intro: 'Your US health insurance stops working the moment you leave the country — and most people don\'t find out until they need a hospital abroad. This section covers everything you need to navigate travel insurance for Japan: what Medicare doesn\'t cover, which policies are worth buying, and why seniors in particular need a separate plan before they board.',
    subtopics: [
      'Medicare and international travel gaps',
      'Best travel insurance policies for Japan',
      'Coverage for seniors traveling abroad',
      'Medical evacuation and emergency coverage',
      'Trip cancellation and interruption protection',
      'Pre-existing condition coverage',
    ],
    featuredSlug: 'best-travel-insurance-japan-2026',
    relatedCategories: ['trip-essentials', 'travel-stories'],
  },
  {
    slug: 'food-and-culture',
    name: 'Food & Culture',
    icon: '🍜',
    accentColor: '#b8a06a',
    intro: 'Food is how Japan tells its story. From the precision of a Tokyo ramen counter to the warmth of a neighborhood machi chuka, every meal is a window into how people live. These guides explore the culture behind the cuisine — and what it teaches us about traveling thoughtfully between Japan and the USA.',
    subtopics: [
      'Japanese restaurant culture and etiquette',
      'Neighborhood dining in Tokyo and beyond',
      'Food differences: Japan vs. the USA',
      'Regional Japanese cuisine by prefecture',
      'How to order when you can\'t read the menu',
      'Japanese convenience store culture',
    ],
    featuredSlug: 'food-and-culture',
    relatedCategories: ['travel-stories', 'trip-essentials'],
  },
  {
    slug: 'travel-stories',
    name: 'Travel Stories',
    icon: '✈️',
    accentColor: '#6a8ab8',
    intro: 'The best travel stories aren\'t about perfect itineraries — they\'re about the moments you didn\'t plan. These are real experiences from the road between Japan and the USA: the backstreets, the detours, the discoveries that happen when you put the map away and just walk.',
    subtopics: [
      'Tokyo neighborhood discoveries',
      'Getting lost and finding something better',
      'American road trip reflections',
      'Cultural moments that change your perspective',
      'Traveling between two very different worlds',
      'What Japan taught me about home',
    ],
    featuredSlug: 'travel-stories',
    relatedCategories: ['food-and-culture', 'trip-essentials'],
  },
  {
    slug: 'trip-essentials',
    name: 'Trip Essentials',
    icon: '🎒',
    accentColor: '#6ab88a',
    intro: 'The practical side of traveling to Japan — done right. From navigating Haneda Airport on arrival to choosing the best eSIM before you fly, these guides cover the logistics so you can spend your energy on the actual trip. Especially useful for first-timers, seniors, and anyone traveling between the USA and Japan.',
    subtopics: [
      'Getting from the airport to central Tokyo',
      'IC cards (Suica & Pasmo) for transit and shopping',
      'eSIMs and staying connected in Japan',
      'Packing lists for Japan travel',
      'Japan trip planning for seniors',
      'Pre-departure checklist and insurance',
    ],
    featuredSlug: 'trip-essentials',
    relatedCategories: ['travel-insurance', 'travel-stories'],
  },
]

export function getCategoryBySlug(slug) {
  return categories.find(c => c.slug === slug) || null
}
