// TODO: Replace all link: '#' values with your real affiliate URLs before publishing.
// All affiliate links should be disclosed per FTC guidelines — disclosures are already
// embedded in each article via the affiliateDisclosure flag and affiliate_card sponsored labels.

export const articles = [
  {
    slug: 'food-and-culture',
    title: 'The Art of Eating: Food & Culture Between Japan and the USA',
    excerpt: 'How two distinct food cultures — Japanese precision and American abundance — shape the way we travel, connect, and understand the world.',
    category: 'Food & Culture',
    icon: '🍜',
    accentColor: '#b8a06a',
    readTime: '7 min read',
    date: 'April 2026',
    affiliateDisclosure: true,
    content: [
      {
        type: 'paragraph',
        text: 'Food is never just sustenance. In Japan, a bowl of ramen carries centuries of regional pride, seasonal awareness, and a near-spiritual attention to craft. In the USA, a backyard barbecue is a language of its own — a way of saying "you matter" without words. Traveling between these two worlds has reshaped the way I think about every meal, every market, and every table I am invited to sit at.',
      },
      {
        type: 'h2',
        text: 'The Japanese Philosophy of Food',
      },
      {
        type: 'paragraph',
        text: 'The Japanese concept of shokuji — literally "eating a meal" — implies more than nutrition. It carries weight. Before eating, you say "Itadakimasu," a word that loosely means "I humbly receive," acknowledging the effort of the farmer, the cook, and the ingredients themselves. This philosophy shows up everywhere: in the carefully arranged bento boxes sold at train stations, in the seasonal menus that change with the cherry blossoms and autumn leaves, and in ramen shops where a single chef may spend twelve hours a day perfecting a single style of broth.',
      },
      {
        type: 'paragraph',
        text: 'What strikes most visitors to Japan is the consistency. A bowl of tonkotsu ramen in a tiny alley shop in Fukuoka will be extraordinary — not because the chef is showing off, but because anything less would be disrespectful to the craft. Japan\'s food culture rewards patience and specialization. There are sushi restaurants that have served the same style for four generations. There are tofu shops that have opened at 5 a.m. every day for a century. This devotion is not stubbornness — it is a form of respect for the people who will eat what you make.',
      },
      {
        type: 'h2',
        text: "America's Food Culture: Abundance and Identity",
      },
      {
        type: 'paragraph',
        text: 'The American food scene operates on different principles. Where Japan values depth and specialization, the USA celebrates breadth and fusion. A single city block in Los Angeles might have a Korean taco truck next to a Southern BBQ joint next to a Vietnamese pho spot. This is not chaos — it is one of America\'s most honest expressions of who it is: a country built by people who brought their food with them and kept cooking.',
      },
      {
        type: 'paragraph',
        text: 'Regional food culture in the USA runs deep and proud. In Texas, barbecue is identity — a slow-smoked argument about wood, technique, and lineage that has lasted generations. In New Orleans, a plate of gumbo carries the weight of French, African, and Native American history all at once. In New York\'s Chinatown, the dim sum carts connect second-generation immigrants to grandparents they may never have met. Food is how America holds its stories, and every region tells a different one.',
      },
      {
        type: 'h2',
        text: 'Where the Two Worlds Meet',
      },
      {
        type: 'paragraph',
        text: 'Traveling between Japan and the USA, you start to notice an unexpected intersection. Both cultures take food seriously — they just express it differently. Japan\'s Americanized yoshoku dishes like omurice (rice omelette) and napolitan spaghetti are deeply beloved — they are Japan\'s reimagining of foreign influences filtered through its own aesthetic sensibility. Similarly, Japanese cuisine has quietly transformed American food culture: sushi is now mainstream, ramen shops have opened in every major US city, and Japanese whisky appears on bar menus from Nashville to Seattle.',
      },
      {
        type: 'paragraph',
        text: 'The most interesting moments happen when you eat with local families in both countries. A Japanese home-cooked meal often includes pickles, miso soup, rice, and a main dish of fish or tofu — humble, balanced, complete. An American home-cooked meal might be a big pot of chili, a roast chicken, or a pot of pasta — generous, comforting, abundant. Both are acts of love. Both say: I made this for you.',
      },
      {
        type: 'h2',
        text: 'Essential Food Experiences in Japan',
      },
      {
        type: 'list',
        items: [
          'Tsukiji Outer Market, Tokyo — Fresh sushi breakfast surrounded by vendors who have been there since before dawn',
          'Nishiki Market, Kyoto — Five blocks of pickles, tofu, seafood, and street snacks in the heart of the old city',
          'Dotonbori, Osaka — The street food capital of Japan: takoyaki, okonomiyaki, and crab towers along the canal',
          'Depachika (any major city) — Underground food halls beneath department stores, where regional specialties from across Japan are arranged like art',
          'Any Japanese convenience store — Not ironic. The onigiri, sandwiches, and hot foods at 7-Eleven are genuinely excellent',
        ],
      },
      {
        type: 'h2',
        text: 'Essential Food Experiences in the USA',
      },
      {
        type: 'list',
        items: [
          'Memphis, Tennessee — Slow-smoked BBQ ribs at a roadside joint, the kind that fall off the bone without asking',
          'New Orleans, Louisiana — Beignets at Café Du Monde at midnight, followed by a bowl of gumbo the next morning',
          'New York City — A bagel with lox, dim sum in Flushing, and pizza by the slice — all in the same afternoon',
          'Los Angeles — Korean BBQ, fish tacos from a truck, and ramen that rivals anything you\'d find in Japan',
          'Portland, Oregon — Food cart pods where twenty cuisines share the same courtyard and every option is worth trying',
        ],
      },
      {
        type: 'tip',
        text: 'Gohan World tip: In Japan, look for the "noren" — the split fabric curtain hanging in a doorway. A weathered, dark noren usually means the restaurant has been open long enough to be trusted. The newer and shinier it looks, the less certain you can be.',
      },
      {
        type: 'h2',
        text: 'Book a Food Experience',
      },
      {
        type: 'paragraph',
        text: 'The fastest way to go deep into a food culture is to cook or eat with someone who grew up in it. These platforms connect travelers with local hosts for cooking classes, market tours, and guided food experiences across Japan and the USA.',
      },
      {
        type: 'affiliate_card',
        badge: 'Experiences',
        name: 'Airbnb Experiences — Food & Cooking',
        tagline: 'Cook with locals. Eat where they eat.',
        pros: [
          'Verified local hosts in Tokyo, Kyoto, Osaka, and across the USA',
          'Options range from sushi-making classes to ramen deep-dives',
          'Small groups — typically 2–10 people for a personal experience',
        ],
        link: '#', // TODO: replace with Airbnb Experiences affiliate URL
        linkText: 'Browse Cooking Experiences',
        sponsored: true,
      },
      {
        type: 'affiliate_card',
        badge: 'Tours',
        name: 'Viator — Food & Culture Tours',
        tagline: 'Guided food tours in Japan\'s top cities.',
        pros: [
          'Izakaya bar hopping tours in Tokyo and Osaka',
          'Street food walks through Kyoto\'s Nishiki Market',
          'Free cancellation on most bookings',
        ],
        link: '#', // TODO: replace with Viator affiliate URL
        linkText: 'Browse Food Tours',
        sponsored: true,
      },
    ],
  },

  {
    slug: 'travel-stories',
    title: 'From Tokyo Backstreets to American Road Trips: Real Stories from the Road',
    excerpt: 'Getting lost is not a failure. In both Japan and the USA, the best discoveries happen the moment you stop following the map.',
    category: 'Travel Stories',
    icon: '✈️',
    accentColor: '#6a8ab8',
    readTime: '8 min read',
    date: 'April 2026',
    affiliateDisclosure: true,
    content: [
      {
        type: 'paragraph',
        text: 'The first time I arrived in Tokyo, I had a plan. A printed itinerary. A color-coded spreadsheet of train lines and opening hours. By day two, I had abandoned all of it — not because things went wrong, but because something better kept happening every time I stepped away from the plan.',
      },
      {
        type: 'h2',
        text: 'Getting Lost in Tokyo (On Purpose)',
      },
      {
        type: 'paragraph',
        text: 'Tokyo is a city that rewards wandering. The neighborhoods — Shimokitazawa, Yanaka, Koenji, Kagurazaka — each have a distinct personality that no travel guide can fully capture. Shimokitazawa feels like a record store that turned into an entire neighborhood, full of vintage shops, tiny live music venues, and curry restaurants. Yanaka is what old Tokyo must have looked like before the war: narrow lanes, wooden temples, cats sleeping on stone walls.',
      },
      {
        type: 'paragraph',
        text: 'On one particular afternoon, I followed a smell. Somewhere between the Yanaka Cemetery and a cluster of shotengai (covered shopping streets), something was grilling — it turned out to be a tiny yakitori stand run by an elderly man who spoke no English and did not need to. He pointed at the skewers, I pointed back, and we ate together in comfortable silence. That was not in the itinerary. That was the whole trip.',
      },
      {
        type: 'h2',
        text: 'The Art of the Japanese Train System',
      },
      {
        type: 'paragraph',
        text: 'Understanding Japan\'s train system is one of the most satisfying learning curves in travel. It looks overwhelming at first — Tokyo alone has dozens of overlapping lines operated by different companies, color-coded and lettered and numbered. But once you understand that a Suica card works almost everywhere, and that every platform sign includes English, the system becomes your greatest asset. You can go from central Tokyo to a seaside village in Kamakura, spend an afternoon watching the ocean, and be back in the city for dinner. Japan trains run on time — not approximately. On time.',
      },
      {
        type: 'tip',
        text: 'Navigation tip: Google Maps works exceptionally well for Japanese transit navigation. Set your destination, tap the transit option, and it will tell you exactly which train, which car to board (for fastest exits), and which exit to take. The exits matter — some Tokyo stations have over 50.',
      },
      {
        type: 'h2',
        text: 'Road Tripping the United States',
      },
      {
        type: 'paragraph',
        text: 'Japan taught me to slow down and pay attention. The USA taught me to cover ground. There is no experience quite like renting a car in America and driving — properly driving — across states, through landscapes that change so dramatically you wonder if you are still in the same country. From the green hills of Tennessee through the flat immensity of Texas into the desert of New Mexico and up through the red rock canyons of Utah, the American road trip is its own form of education.',
      },
      {
        type: 'paragraph',
        text: 'What I love most about road trips in the USA is the conversations you have with strangers. At a diner in rural Mississippi, the woman who refills your coffee will ask where you are headed and then tell you exactly where you should eat in the next three towns. At a gas station in Nevada, the person working the counter has a story about how they ended up there that is more interesting than any podcast. Americans, at their best, are genuinely curious about other people — and generous with what they know.',
      },
      {
        type: 'h2',
        text: 'Moments That Stay With You',
      },
      {
        type: 'paragraph',
        text: 'Watching the sun rise over Fushimi Inari in Kyoto, before the crowds arrive, walking through the tunnel of ten thousand torii gates in the quiet of an early morning. Sitting at a bar in Nashville listening to someone play a guitar like they were trying to say something no words could handle. The bullet train from Tokyo to Osaka, watching Mount Fuji appear out of the window for exactly forty-five seconds before it disappears behind clouds. A thunderstorm crossing the Oklahoma plains from a highway that goes so straight and so flat you can see the weather coming from twenty miles away.',
      },
      {
        type: 'paragraph',
        text: 'These are the moments that don\'t photograph well. They just happen, and then they live in you. The best travel is like that — it changes your internal landscape more than it changes your Instagram feed.',
      },
      {
        type: 'h2',
        text: 'What Both Countries Teach You',
      },
      {
        type: 'paragraph',
        text: 'Japan teaches you patience, attention, and the value of doing one thing well. The USA teaches you openness, adaptability, and the value of covering ground. Traveling between them teaches you that both are right, that the world is large enough to hold many truths at once, and that the best version of yourself as a traveler borrows a little from both.',
      },
      {
        type: 'paragraph',
        text: 'Go slowly enough to notice things. Go far enough to be surprised. Say yes to the yakitori stand. Pull off the highway when something catches your eye. The plan is a suggestion. The road is the destination.',
      },
      {
        type: 'h2',
        text: 'Plan Your Stay',
      },
      {
        type: 'affiliate_card',
        badge: 'Accommodation',
        name: 'Booking.com — Hotels & Unique Stays',
        tagline: 'From Tokyo capsule hotels to Nashville honky-tonk districts.',
        pros: [
          'Largest selection of hotels, ryokan, and guesthouses in Japan',
          'Free cancellation on most properties',
          'Genius loyalty program unlocks discounts automatically',
        ],
        link: '#', // TODO: replace with Booking.com affiliate URL
        linkText: 'Search Accommodation',
        sponsored: true,
      },
      {
        type: 'affiliate_card',
        badge: 'Car Rental',
        name: 'Discover Cars — Car Rental Comparison',
        tagline: 'Compare rental rates across all major providers for USA road trips.',
        pros: [
          'Compares Hertz, Enterprise, Budget, and 500+ suppliers in one search',
          'Full-to-full fuel policy options (no surprises)',
          'Free cancellation up to 48 hours before pickup',
        ],
        link: '#', // TODO: replace with Discover Cars affiliate URL
        linkText: 'Compare Rental Cars',
        sponsored: true,
      },
    ],
  },

  {
    slug: 'trip-essentials',
    title: 'Your Complete Pre-Trip Checklist: From Smart Packing to Travel Insurance',
    excerpt: 'The practical side of travel is not glamorous, but getting it right is what lets you enjoy everything else. Here is everything you need before you board.',
    category: 'Trip Essentials',
    icon: '🎒',
    accentColor: '#6ab88a',
    readTime: '9 min read',
    date: 'April 2026',
    affiliateDisclosure: true,
    content: [
      {
        type: 'paragraph',
        text: 'Nobody talks about the two hours before a great trip — the packing panic, the passport check, the "did I print that booking confirmation?" anxiety. But those two hours determine a lot. Getting the practical side right before you leave means the moment you land, your only job is to enjoy where you are. This checklist covers everything, two weeks out to wheels up.',
      },
      {
        type: 'h2',
        text: 'Two Weeks Before Departure',
      },
      {
        type: 'list',
        items: [
          'Check passport validity — Japan and the USA both require at least 6 months validity beyond your travel dates',
          'Apply for any required visas — US citizens do not need a visa for Japan stays under 90 days, but always verify for your nationality',
          'Purchase travel insurance — do this now, before anything else on this list (more on this below)',
          'Notify your bank and credit cards of travel dates and destinations',
          'Book airport transportation — both ways, departure and return',
          'Download offline maps for your destination (Google Maps, Maps.me)',
          'Make digital copies of all documents: passport, insurance policy, bookings, emergency contacts',
        ],
      },
      {
        type: 'h2',
        text: 'One Week Before Departure',
      },
      {
        type: 'list',
        items: [
          'Set up your mobile plan — get a travel SIM, eSIM, or pocket Wi-Fi for Japan. Your US carrier\'s international plan is rarely the best value',
          'Load your Suica or Pasmo IC card (if traveling to Japan) — you can set it up digitally on iPhone or Android via Apple Pay / Google Pay now',
          'Pack a universal power adapter — Japan uses Type A plugs (same as USA) at 100V, so most US electronics work fine without a converter',
          'Prepare a travel-sized first aid kit: band-aids, ibuprofen, antidiarrheal, antihistamine',
          'Exchange a small amount of cash for your destination — enough for your first day before you find a reliable ATM',
          'Check weather forecasts and finalize your packing list accordingly',
        ],
      },
      {
        type: 'h2',
        text: 'Smart Packing: What Actually Matters',
      },
      {
        type: 'paragraph',
        text: 'The single best packing decision most travelers never make is packing less. For a two-week trip, one carry-on and a personal item is enough for the vast majority of itineraries — especially in Japan, where you can use luggage delivery services (takkyubin) to send bags ahead to your next hotel for a few dollars. Checking a bag means waiting at baggage claim, risking delays, and carrying more weight than you need.',
      },
      {
        type: 'list',
        items: [
          'Packing cubes — the single biggest quality-of-life upgrade for any trip',
          'Merino wool layers — lightweight, odor-resistant, works in hot or cold weather',
          'A small day backpack — essential for sightseeing without leaving things at the hotel',
          'Portable charger (10,000 mAh minimum) — your phone is your map, translator, and camera',
          'Compression packing cubes for shoes and liquids',
          'A lightweight rain layer — weather is unpredictable, and a compact rain jacket takes almost no space',
        ],
      },
      {
        type: 'affiliate_card',
        badge: 'Packing',
        name: 'Amazon — Top-Rated Travel Packing Essentials',
        tagline: 'Curated list of the gear that seasoned travelers actually use.',
        pros: [
          'Osprey and Eagle Creek packing cubes — durable, washable, and worth it',
          'Anker portable chargers — the most reliable brand for travel power',
          'Compression bags for bulky layers — cuts volume by up to 60%',
        ],
        link: '#', // TODO: replace with Amazon affiliate URL (use Amazon Associates)
        linkText: 'Shop Packing Essentials',
        sponsored: true,
      },
      {
        type: 'h2',
        text: 'Why Travel Insurance Is Non-Negotiable',
      },
      {
        type: 'paragraph',
        text: 'This section matters more than any other on this page. Travel insurance is the one item most travelers skip when budgeting a trip, and the one item that can make the difference between a minor setback and a financial catastrophe. A single emergency medical evacuation from Japan to the USA can cost over $80,000. A cancelled flight can trigger $2,000–$5,000 in non-refundable hotel and tour losses. Travel insurance for a two-week Japan trip costs roughly $60–$150. The math is not complicated.',
      },
      {
        type: 'paragraph',
        text: 'The key is buying it early — ideally within 14 days of your first trip deposit — to unlock the widest coverage including pre-existing condition waivers and "cancel for any reason" add-ons. Here is how the leading providers compare:',
      },
      {
        type: 'affiliate_table',
        caption: 'Travel Insurance Comparison — Japan & USA Trips',
        disclaimer: '* Prices are estimates based on a 14-day trip for one adult. Actual quotes vary by age, trip cost, and destination. Links below are affiliate links — we may earn a commission at no cost to you.',
        columns: ['Provider', 'Best For', 'Key Coverage', 'Est. Cost*', 'Rating'],
        rows: [
          {
            provider: 'World Nomads',
            bestFor: 'Adventure travelers',
            coverage: 'Medical, trip cancellation, adventure sports, gear theft',
            cost: '$80–$150',
            rating: 5,
            link: '#', // TODO: replace with World Nomads affiliate URL
            linkText: 'Get Quote',
          },
          {
            provider: 'InsureMyTrip',
            bestFor: 'Comparing options',
            coverage: 'Compare 20+ providers, full trip protection, medical',
            cost: '$60–$200',
            rating: 5,
            link: '#', // TODO: replace with InsureMyTrip affiliate URL
            linkText: 'Compare Plans',
          },
          {
            provider: 'Allianz Travel',
            bestFor: 'Families & business',
            coverage: 'Cancel for any reason, trip delay, emergency medical',
            cost: '$50–$180',
            rating: 4,
            link: '#', // TODO: replace with Allianz affiliate URL
            linkText: 'Get Quote',
          },
          {
            provider: 'SafetyWing',
            bestFor: 'Long stays & nomads',
            coverage: 'Medical-only, monthly subscription, global coverage',
            cost: '$42–$84/mo',
            rating: 4,
            link: '#', // TODO: replace with SafetyWing affiliate URL
            linkText: 'Sign Up',
          },
        ],
      },
      {
        type: 'tip',
        text: 'Always read the exclusions before you buy. Adventure sports, pre-existing conditions, and alcohol-related incidents are commonly excluded by default. World Nomads explicitly covers most adventure activities — always verify your specific activities are listed.',
      },
      {
        type: 'h2',
        text: 'Day of Departure',
      },
      {
        type: 'list',
        items: [
          'Arrive at the airport 3 hours early for international flights (2 hours minimum)',
          'Check in online 24 hours before — most airlines allow seat selection and bag drop preparation',
          'Screenshot all boarding passes, hotel confirmations, and insurance policy numbers — no Wi-Fi needed',
          'Keep your passport, phone, and a credit card in your carry-on, never in checked luggage',
          'Set out-of-office replies and any auto-pays that might be due while you\'re away',
          'Leave a copy of your itinerary with someone at home',
        ],
      },
      {
        type: 'paragraph',
        text: 'The goal of a good pre-trip routine is simple: to run out of things to worry about before the plane leaves the ground. Once you are up in the air, the work is done. Everything after that is the trip itself.',
      },
    ],
  },
]

export function getArticleBySlug(slug) {
  return articles.find(a => a.slug === slug) || null
}
