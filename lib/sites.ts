export interface Site {
  name: string
  media: string
  w: number
  h: number
  tags: ('landing' | 'product' | 'immersive')[]
  what: string
  service: string
  plate: 1 | 2 | 3 | 4 | 5
}

const CLIPS = 'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/'

export const SITES: Site[] = [
  {
    name: 'Luxury Real Estate',
    media: CLIPS + 'hero%20sections/animated%20(38).webp',
    w: 640, h: 466,
    tags: ['landing'],
    what: 'A calm property page. We build these with the listing details marked up so Google and AI can read them.',
    service: 'Landing Page',
    plate: 1,
  },
  {
    name: 'Luxury Botanical',
    media: CLIPS + 'hero%20sections/animated%20(36).webp',
    w: 640, h: 470,
    tags: ['landing'],
    what: 'Soft motion for a lifestyle brand. We write the story in plain words, because plain words are what AI quotes.',
    service: 'Landing Page',
    plate: 2,
  },
  {
    name: 'Digital Experiences',
    media: CLIPS + 'hero%20sections/animated%20(40).webp',
    w: 640, h: 458,
    tags: ['landing'],
    what: 'A studio page with motion all through it. Hand-coded, so the moving parts never bury the text.',
    service: 'Landing Page',
    plate: 3,
  },
  {
    name: 'CoderCrest',
    media: CLIPS + 'hero%20sections/codercrest-hero-CoycO52t.gif',
    w: 800, h: 593,
    tags: ['product'],
    what: 'A developer tools site. We build these to answer "what does it do?" inside the first screen.',
    service: 'SaaS',
    plate: 4,
  },
  {
    name: 'Financial Suite',
    media: CLIPS + "prompts%20(i've%20added%20them%20to%20the%20motionsites)/f4444Area.mp4",
    w: 1468, h: 1080,
    tags: ['product'],
    what: 'A finance product page, shown here as a video clip. Clear claims on the page make for clearer AI answers.',
    service: 'Landing Page',
    plate: 5,
  },
  {
    name: 'AI Automation',
    media: CLIPS + 'hero%20sections/animated%20(83).webp',
    w: 640, h: 474,
    tags: ['product'],
    what: 'An AI product page. Pages like this have to explain themselves to people and to other AI at once.',
    service: 'Landing Page',
    plate: 1,
  },
  {
    name: '3D Collectible Hero',
    media: CLIPS + 'hero%20sections/animated%20(24).webp',
    w: 640, h: 470,
    tags: ['immersive'],
    what: 'A 3D product scene. We keep the words in real text, not baked into the art where AI cannot read them.',
    service: '3D Website',
    plate: 2,
  },
  {
    name: 'Interactive Portfolio',
    media: CLIPS + 'hero%20sections/animated%20(15).webp',
    w: 640, h: 476,
    tags: ['immersive'],
    what: 'An interactive portfolio hero. A section, not a whole page, and it still has to load fast to rank.',
    service: 'Hero section',
    plate: 3,
  },
  {
    name: 'Immersive Ocean',
    media: CLIPS + 'hero%20sections/animated%20(14).webp',
    w: 640, h: 478,
    tags: ['immersive'],
    what: 'An immersive 3D hero. Big feeling up top, plain readable text underneath for search and AI.',
    service: 'Hero section',
    plate: 4,
  },
]

export const TAGS: Record<string, string> = {
  landing: 'Landing & agency',
  product: 'Product & SaaS',
  immersive: '3D & interactive',
}
