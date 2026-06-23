export interface Memory {
  id: string;
  episode: number;
  title: string;
  subtitle: string;
  date: string;
  genre: string[];
  description: string;
  longDescription: string;
  favoriteMoment: string;
  quote: string;
  images: string[];
  videos: string[];
  progress: number; // 0-100 watch progress
}

export interface TrendingCard {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface TopPickCard {
  id: string;
  title: string;
  reason: string;
  metadata: string;
  tag: string;
}

export interface TimelineMilestone {
  id: string;
  title: string;
  date: string;
  description: string;
  emoji: string;
}

export interface Stat {
  label: string;
  value: string;
  sublabel?: string;
}

// ─── Episodes ───────────────────────────────────────────────────────────────
export const memories: Memory[] = [
  {
    id: "the-beginning",
    episode: 1,
    title: "The Beginning",
    subtitle: "Where it all started",
    date: "2023",
    genre: ["Romance", "Mystery"],
    description: "Two strangers who had no idea what the universe was quietly arranging for them.",
    longDescription:
      "Before any of this existed, there were two separate worlds. Two people living their own stories, not knowing that fate was gently writing them into the same chapter. This is where it began — not with a grand gesture, but with a moment so quiet you almost missed it.",
    favoriteMoment: "The exact second everything changed.",
    quote: "Some beginnings don't announce themselves. They just happen.",
    images: ["/images/beginning-1.webp", "/images/placeholder-2.jpg"],
    videos: [],
    progress: 100,
  },
  {
    id: "first-conversation",
    episode: 2,
    title: "First Conversation",
    subtitle: "When words became the bridge",
    date: "2023",
    genre: ["Comedy", "Romance"],
    description: "The first real conversation. Awkward pauses, genuine laughs, and one very good impression.",
    longDescription:
      "It started with a message — or maybe a reply. The kind of conversation that goes longer than you planned and ends way too soon. Somewhere between the jokes and the random tangents, something clicked.",
    favoriteMoment: "When the conversation kept going and neither wanted to stop.",
    quote: "Good conversations are rare. Great ones change you.",
    images: ["/images/first-conv.webp", "/images/placeholder-4.jpg"],
    videos: [],
    progress: 100,
  },
  {
    id: "first-date",
    episode: 3,
    title: "First Date",
    subtitle: "Nervous energy and good food",
    date: "2023",
    genre: ["Romance", "Drama"],
    description: "The one where everything was perfectly imperfect and somehow exactly right.",
    longDescription:
      "First dates have a particular kind of magic. The careful planning, the overthinking, the moment you see them and forget every scripted line. This one had all of it — and something more. A quiet certainty that this was just the beginning.",
    favoriteMoment: "The moment the nervousness turned into just... comfort.",
    quote: "The best first dates feel like you've known each other forever.",
    images: ["/images/first-date-1.png", "/images/placeholder-6.jpg"],
    videos: [],
    progress: 100,
  },
  {
    id: "favorite-memories",
    episode: 4,
    title: "Favorite Memories",
    subtitle: "A collection of the best moments",
    date: "2023–2026",
    genre: ["Romance", "Comedy", "Adventure"],
    description: "Not every great moment is a big event. Sometimes it's just the Tuesday afternoons.",
    longDescription:
      "This episode is a highlight reel — the laughs that came out of nowhere, the quiet moments that felt enormous, the photos that don't fully capture how good it actually felt to be there. These are the favorites. The ones that get replayed.",
    favoriteMoment: "All of them. Genuinely all of them.",
    quote: "Memory is the diary we all carry about with us.",
    images: [
      "/images/fav-memories-2.jpg",
      "/images/fav-memories-1.webp",
      "/images/fav-memories-3.webp",
    ],
    videos: [],
    progress: 78,
  },
  {
    id: "adventures-together",
    episode: 5,
    title: "Adventures Together",
    subtitle: "Every trip, every detour",
    date: "2024–2026",
    genre: ["Adventure", "Documentary"],
    description: "The places visited, the roads taken, and a few wrong turns that turned out to be the best part.",
    longDescription:
      "Every adventure has a navigator and a dreamer. Together that ratio shifts constantly. These are the trips — short and long, planned and spontaneous — that built a shared map of the world. More countries, cities, and roads still waiting.",
    favoriteMoment: "Getting completely lost and finding something better.",
    quote: "We travel not to escape life, but so life doesn't escape us.",
    images: ["/images/adventures-1.webp", "/images/adventures-2.webp"],
    videos: [],
    progress: 65,
  },
  {
    id: "piyusha's-birthday-celeb",
    episode: 6,
    title: "Piyusha's First Birthday Together",
    subtitle: "A core memory — the first one I got to celebrate with you",
    date: "2025",
    genre: ["Romance", "Surprises", "Milestone"],
    description: "The first birthday I got to celebrate with you. Every detail planned with love, every moment something I'll never forget.",
    longDescription:
      "There's a particular kind of joy in planning someone's birthday when you know them well enough to know exactly what will make them smile — and nervous enough to want everything to be perfect anyway. This was the first birthday I got to celebrate with you, and I wanted it to feel like something. Not just a dinner or a cake, but a whole day that said: you matter, you're loved, and I'm really glad you were born. Every small detail was thought through. Every moment felt earned. This is a core memory — the kind that doesn't fade.",
    favoriteMoment: "The moment you realised what was happening and smiled like that.",
    quote: "The best birthdays aren't celebrated — they're felt.",
    images: ["/images/birthday-celeb-1.webp", "/images/birthday-celeb-2.webp", "/images/birthday-celeb-3.webp"],
    videos: [],
    progress: 100,
  },
];

// ─── Trending Cards ──────────────────────────────────────────────────────────
export const trendingMemories: TrendingCard[] = [
  {
    id: "smile",
    title: "Her Smile",
    description: "The one that breaks concentration mid-sentence.",
    image: "/images/her-smile.webp",
    tag: "Most Replayed",
  },
  {
    id: "selfies",
    title: "Random Selfies",
    description: "Hundreds of photos. Exactly 0 bad ones.",
    image: "/images/random-selfie.webp",
    tag: "Fan Favourite",
  },
  {
    id: "funny",
    title: "Funny Moments",
    description: "The inside jokes that still land every time.",
    image: "/images/funny-1.webp",
    tag: "Comedy",
  },
  {
    id: "calls",
    title: "Late Night Calls",
    description: "Started with 10 minutes. Went till 3am.",
    image: "/images/late-night.webp",
    tag: "Classic",
  },
  {
    id: "places",
    title: "Places We Visited",
    description: "Every location, every memory attached to it.",
    image: "/images/placs-missed.webp",
    tag: "Adventure",
  },
];

// ─── Top Picks ───────────────────────────────────────────────────────────────
export const topPicks: TopPickCard[] = [
  {
    id: "food-dates",
    title: "Unlimited Food Dates",
    reason: "Because you watched Bhushan",
    metadata: "Ongoing Series · All Cuisines · 10/10 IMDb",
    tag: "Highly Rated",
  },
  {
    id: "road-trips",
    title: "Random Road Trips",
    reason: "Based on your history",
    metadata: "Adventure · No Fixed Destination · New Episodes Weekly",
    tag: "New",
  },
  {
    id: "future-adventures",
    title: "Future Adventures",
    reason: "Coming soon to your screens",
    metadata: "Upcoming · Bucket List · Premium",
    tag: "Upcoming",
  },
  {
    id: "more-flowers",
    title: "More Flowers",
    reason: "Recommended for you",
    metadata: "Romance · Surprise Drops · Always Appreciated",
    tag: "Trending",
  },
  {
    id: "lifetime-love",
    title: "Lifetime Subscription to Love",
    reason: "Because you deserve it",
    metadata: "Unlimited · Auto-renews forever · No cancellation",
    tag: "Exclusive",
  },
];

// ─── Timeline ────────────────────────────────────────────────────────────────
export const timeline: TimelineMilestone[] = [
  {
    id: "first-convo",
    title: "First Conversation",
    date: "2023",
    description: "The message that started everything. A small ping that opened up the whole story.",
    emoji: "💬",
  },
  {
    id: "first-meet",
    title: "First Meeting",
    date: "2023",
    description: "From online to in-person. The moment the photo became a real person standing right there.",
    emoji: "✨",
  },
  {
    id: "first-date",
    title: "First Date",
    date: "2023",
    description: "Proper first date. Nervous, exciting, and way too short.",
    emoji: "🍽️",
  },
  {
    id: "first-trip",
    title: "First Trip Together",
    date: "2024",
    description: "The first real adventure. Shared playlists, shared views, shared memories.",
    emoji: "✈️",
  },
  {
    id: "special-moments",
    title: "Special Moments",
    date: "2024–2025",
    description: "A collection of quiet, unremarkable moments that turned out to matter the most.",
    emoji: "🌟",
  },
  {
    id: "first-car",
    title: "Our First Car",
    date: "2025",
    description: "A milestone. The world suddenly got bigger. Road trips became real.",
    emoji: "🚗",
  },
  {
    id: "birthday-2026",
    title: "Birthday 2026",
    date: "June 23, 2026",
    description: "This moment right now. The one being written live.",
    emoji: "🎂",
  },
];

// ─── Stats ───────────────────────────────────────────────────────────────────
export const stats: Stat[] = [
  { label: "Days Together", value: "1,000+", sublabel: "and counting" },
  { label: "Photos Taken", value: "∞", sublabel: "approximately" },
  { label: "Trips Completed", value: "Many", sublabel: "more loading..." },
  { label: "Favourite Food Dates", value: "Countless", sublabel: "always hungry" },
  { label: "Arguments Won by Bhushan", value: "0", sublabel: "official record" },
  { label: "Arguments Won by Piyusha", value: "100%", sublabel: "undefeated" },
  { label: "Late Night Calls", value: "Too Many", sublabel: "zero regrets" },
  { label: "Inside Jokes Created", value: "∞", sublabel: "non-transferable" },
];
