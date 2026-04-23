import { Category } from "../shared";

type CatalogEntry = {
  name: string;
  category: Category;
  description: string;
};

/**
 * Hardcoded catalog of known DESIGN.md slugs with human-readable names, categories,
 * and short descriptions sourced from the awesome-design-md README.
 *
 * Unknown slugs returned by the GitHub API fall back to "Other" with a generated name.
 */
export const CATALOG: Record<string, CatalogEntry> = {
  // AI & LLM Platforms
  claude: {
    name: "Claude",
    category: "AI & LLM Platforms",
    description: "Anthropic's AI assistant. Warm terracotta accent, clean editorial layout.",
  },
  cohere: {
    name: "Cohere",
    category: "AI & LLM Platforms",
    description: "Enterprise AI platform. Vibrant gradients, data-rich dashboard aesthetic.",
  },
  elevenlabs: {
    name: "ElevenLabs",
    category: "AI & LLM Platforms",
    description: "AI voice platform. Dark cinematic UI, audio-waveform aesthetics.",
  },
  minimax: {
    name: "Minimax",
    category: "AI & LLM Platforms",
    description: "AI model provider. Bold dark interface with neon accents.",
  },
  "mistral.ai": {
    name: "Mistral AI",
    category: "AI & LLM Platforms",
    description: "Open-weight LLM provider. French-engineered minimalism, purple-toned.",
  },
  ollama: {
    name: "Ollama",
    category: "AI & LLM Platforms",
    description: "Run LLMs locally. Terminal-first, monochrome simplicity.",
  },
  "opencode.ai": {
    name: "OpenCode AI",
    category: "AI & LLM Platforms",
    description: "AI coding platform. Developer-centric dark theme.",
  },
  replicate: {
    name: "Replicate",
    category: "AI & LLM Platforms",
    description: "Run ML models via API. Clean white canvas, code-forward.",
  },
  runwayml: {
    name: "RunwayML",
    category: "AI & LLM Platforms",
    description: "AI video generation. Cinematic dark UI, media-rich layout.",
  },
  "together.ai": {
    name: "Together AI",
    category: "AI & LLM Platforms",
    description: "Open-source AI infrastructure. Technical, blueprint-style design.",
  },
  voltagent: {
    name: "VoltAgent",
    category: "AI & LLM Platforms",
    description: "AI agent framework. Void-black canvas, emerald accent, terminal-native.",
  },
  "x.ai": {
    name: "xAI",
    category: "AI & LLM Platforms",
    description: "Elon Musk's AI lab. Stark monochrome, futuristic minimalism.",
  },

  // Developer Tools & IDEs
  cursor: {
    name: "Cursor",
    category: "Developer Tools & IDEs",
    description: "AI-first code editor. Sleek dark interface, gradient accents.",
  },
  expo: {
    name: "Expo",
    category: "Developer Tools & IDEs",
    description: "React Native platform. Dark theme, tight letter-spacing, code-centric.",
  },
  lovable: {
    name: "Lovable",
    category: "Developer Tools & IDEs",
    description: "AI full-stack builder. Playful gradients, friendly dev aesthetic.",
  },
  raycast: {
    name: "Raycast",
    category: "Developer Tools & IDEs",
    description: "Productivity launcher. Sleek dark chrome, vibrant gradient accents.",
  },
  superhuman: {
    name: "Superhuman",
    category: "Developer Tools & IDEs",
    description: "Fast email client. Premium dark UI, keyboard-first, purple glow.",
  },
  vercel: {
    name: "Vercel",
    category: "Developer Tools & IDEs",
    description: "Frontend deployment platform. Black and white precision, Geist font.",
  },
  warp: {
    name: "Warp",
    category: "Developer Tools & IDEs",
    description: "Modern terminal. Dark IDE-like interface, block-based command UI.",
  },

  // Backend, Database & DevOps
  clickhouse: {
    name: "ClickHouse",
    category: "Backend, Database & DevOps",
    description: "Fast analytics database. Yellow-accented, technical documentation style.",
  },
  composio: {
    name: "Composio",
    category: "Backend, Database & DevOps",
    description: "Tool integration platform. Modern dark with colorful integration icons.",
  },
  hashicorp: {
    name: "HashiCorp",
    category: "Backend, Database & DevOps",
    description: "Infrastructure automation. Enterprise-clean, black and white.",
  },
  mongodb: {
    name: "MongoDB",
    category: "Backend, Database & DevOps",
    description: "Document database. Green leaf branding, developer documentation focus.",
  },
  posthog: {
    name: "PostHog",
    category: "Backend, Database & DevOps",
    description: "Product analytics. Playful hedgehog branding, developer-friendly dark UI.",
  },
  sanity: {
    name: "Sanity",
    category: "Backend, Database & DevOps",
    description: "Headless CMS. Red accent, content-first editorial layout.",
  },
  sentry: {
    name: "Sentry",
    category: "Backend, Database & DevOps",
    description: "Error monitoring. Dark dashboard, data-dense, pink-purple accent.",
  },
  supabase: {
    name: "Supabase",
    category: "Backend, Database & DevOps",
    description: "Open-source Firebase alternative. Dark emerald theme, code-first.",
  },

  // Productivity & SaaS
  cal: {
    name: "Cal.com",
    category: "Productivity & SaaS",
    description: "Open-source scheduling. Clean neutral UI, developer-oriented simplicity.",
  },
  intercom: {
    name: "Intercom",
    category: "Productivity & SaaS",
    description: "Customer messaging. Friendly blue palette, conversational UI patterns.",
  },
  "linear.app": {
    name: "Linear",
    category: "Productivity & SaaS",
    description: "Project management for engineers. Ultra-minimal, precise, purple accent.",
  },
  mintlify: {
    name: "Mintlify",
    category: "Productivity & SaaS",
    description: "Documentation platform. Clean, green-accented, reading-optimized.",
  },
  notion: {
    name: "Notion",
    category: "Productivity & SaaS",
    description: "All-in-one workspace. Warm minimalism, serif headings, soft surfaces.",
  },
  resend: {
    name: "Resend",
    category: "Productivity & SaaS",
    description: "Email API for developers. Minimal dark theme, monospace accents.",
  },
  zapier: {
    name: "Zapier",
    category: "Productivity & SaaS",
    description: "Automation platform. Warm orange, friendly illustration-driven.",
  },
  // Design & Creative Tools
  airtable: {
    name: "Airtable",
    category: "Design & Creative Tools",
    description: "Spreadsheet-database hybrid. Colorful, friendly, structured data aesthetic.",
  },
  clay: {
    name: "Clay",
    category: "Design & Creative Tools",
    description: "Creative agency. Organic shapes, soft gradients, art-directed layout.",
  },
  figma: {
    name: "Figma",
    category: "Design & Creative Tools",
    description: "Collaborative design tool. Vibrant multi-color, playful yet professional.",
  },
  framer: {
    name: "Framer",
    category: "Design & Creative Tools",
    description: "Website builder. Bold black and blue, motion-first, design-forward.",
  },
  miro: {
    name: "Miro",
    category: "Design & Creative Tools",
    description: "Visual collaboration. Bright yellow accent, infinite canvas aesthetic.",
  },
  webflow: {
    name: "Webflow",
    category: "Design & Creative Tools",
    description: "Visual web builder. Blue-accented, polished marketing site aesthetic.",
  },

  // Fintech & Crypto
  binance: {
    name: "Binance",
    category: "Fintech & Crypto",
    description: "Crypto exchange. Bold Binance Yellow on monochrome, trading-floor urgency.",
  },
  coinbase: {
    name: "Coinbase",
    category: "Fintech & Crypto",
    description: "Crypto exchange. Clean blue identity, trust-focused, institutional feel.",
  },
  kraken: {
    name: "Kraken",
    category: "Fintech & Crypto",
    description: "Crypto trading platform. Purple-accented dark UI, data-dense dashboards.",
  },
  mastercard: {
    name: "Mastercard",
    category: "Fintech & Crypto",
    description: "Global payments network. Warm cream canvas, orbital pill shapes, editorial warmth.",
  },
  revolut: {
    name: "Revolut",
    category: "Fintech & Crypto",
    description: "Digital banking. Sleek dark interface, gradient cards, fintech precision.",
  },
  stripe: {
    name: "Stripe",
    category: "Fintech & Crypto",
    description: "Payment infrastructure. Signature purple gradients, weight-300 elegance.",
  },
  wise: {
    name: "Wise",
    category: "Fintech & Crypto",
    description: "International money transfer. Bright green accent, friendly and clear.",
  },

  // E-commerce & Retail
  airbnb: {
    name: "Airbnb",
    category: "E-commerce & Retail",
    description: "Travel marketplace. Warm coral accent, photography-driven, rounded UI.",
  },
  meta: {
    name: "Meta",
    category: "E-commerce & Retail",
    description: "Tech retail store. Photography-first, binary light/dark surfaces, Meta Blue CTAs.",
  },
  nike: {
    name: "Nike",
    category: "E-commerce & Retail",
    description: "Athletic retail. Monochrome UI, massive uppercase Futura, full-bleed photography.",
  },
  shopify: {
    name: "Shopify",
    category: "E-commerce & Retail",
    description: "E-commerce platform. Dark-first cinematic, neon green accent, ultra-light display type.",
  },
  starbucks: {
    name: "Starbucks",
    category: "E-commerce & Retail",
    description: "Coffee retail flagship. Four-tier earth-green system, warm cream canvas, SoDoSans typography.",
  },

  // Media & Consumer Tech
  apple: {
    name: "Apple",
    category: "Media & Consumer Tech",
    description: "Consumer electronics. Premium white space, SF Pro, cinematic imagery.",
  },
  ibm: {
    name: "IBM",
    category: "Media & Consumer Tech",
    description: "Enterprise technology. Carbon design system, structured blue palette.",
  },
  nvidia: {
    name: "NVIDIA",
    category: "Media & Consumer Tech",
    description: "GPU computing. Green-black energy, technical power aesthetic.",
  },
  pinterest: {
    name: "Pinterest",
    category: "Media & Consumer Tech",
    description: "Visual discovery platform. Red accent, masonry grid, image-first.",
  },
  playstation: {
    name: "PlayStation",
    category: "Media & Consumer Tech",
    description: "Gaming console retail. Three-surface channel layout, cyan hover-scale interaction.",
  },
  spacex: {
    name: "SpaceX",
    category: "Media & Consumer Tech",
    description: "Space technology. Stark black and white, full-bleed imagery, futuristic.",
  },
  spotify: {
    name: "Spotify",
    category: "Media & Consumer Tech",
    description: "Music streaming. Vibrant green on dark, bold type, album-art-driven.",
  },
  theverge: {
    name: "The Verge",
    category: "Media & Consumer Tech",
    description: "Tech editorial media. Acid-mint and ultraviolet accents, Manuka display type.",
  },
  uber: {
    name: "Uber",
    category: "Media & Consumer Tech",
    description: "Mobility platform. Bold black and white, tight type, urban energy.",
  },
  vodafone: {
    name: "Vodafone",
    category: "Media & Consumer Tech",
    description: "Global telecom brand. Monumental uppercase display, Vodafone Red chapter bands.",
  },
  wired: {
    name: "WIRED",
    category: "Media & Consumer Tech",
    description: "Tech magazine. Paper-white broadsheet density, custom serif, ink-blue links.",
  },

  // Automotive
  bmw: {
    name: "BMW",
    category: "Automotive",
    description: "Luxury automotive. Dark premium surfaces, precise German engineering aesthetic.",
  },
  bugatti: {
    name: "Bugatti",
    category: "Automotive",
    description: "Luxury hypercar. Cinema-black canvas, monochrome austerity, monumental display type.",
  },
  ferrari: {
    name: "Ferrari",
    category: "Automotive",
    description: "Luxury automotive. Chiaroscuro black-white editorial, Ferrari Red with extreme sparseness.",
  },
  lamborghini: {
    name: "Lamborghini",
    category: "Automotive",
    description: "Luxury automotive. True black cathedral, gold accent, LamboType custom Neo-Grotesk.",
  },
  renault: {
    name: "Renault",
    category: "Automotive",
    description: "French automotive. Vivid aurora gradients, NouvelR proprietary typeface, zero-radius buttons.",
  },
  tesla: {
    name: "Tesla",
    category: "Automotive",
    description: "Electric vehicles. Radical subtraction, cinematic full-viewport photography, Universal Sans.",
  },
};

export function humanizeSlug(slug: string): string {
  return slug
    .split(/[-.]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function lookupCatalog(slug: string): CatalogEntry {
  return (
    CATALOG[slug] ?? {
      name: humanizeSlug(slug),
      category: "Other",
      description: "",
    }
  );
}
