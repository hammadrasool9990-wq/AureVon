import { SkillCategory, LearningMilestone } from '../types';

export const PERSONAL_INFO = {
  name: 'Hammad Rasool',
  tagline: 'Exploring Digital Marketing. Building Digital Experiences. Creating Opportunities.',
  headline: "Hello, I'm Hammad Rasool.",
  roles: ['Digital Marketing Learner', 'Aspiring Professional Marketer', 'Web Developer'],
  summary:
    "I'm Hammad Rasool, an aspiring digital marketing professional and web developer. I am developing my skills in professional marketing through NeXskill under the mentorship of Sir Ahmad Basit. I am passionate about understanding how businesses grow, connect with customers, and build their digital presence.",
  email: 'hammadrasool9990@gmail.com',
  educationPlatform: 'NeXskill – Be Productive',
  mentor: 'Sir Ahmad Basit',
  location: 'Gulberg, Lahore, Pakistan',
  website: 'https://aurevondev.vercel.app',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'digital-marketing',
    title: '1. Digital Marketing',
    summary:
      'Studying full-funnel digital marketing fundamentals, consumer purchase journeys, and multichannel communication strategies.',
    focusTopics: [
      'Inbound & outbound marketing principles',
      'Customer persona mapping & audience research',
      'Multi-channel messaging & positioning',
      'Content architecture & brand storytelling'
    ],
    toolsAndFrameworks: ['Customer Journey Mapping', 'Competitive Auditing', 'Content Calendars'],
    whyItMatters:
      'Gives businesses a coherent, consistent voice that engages target demographics at every touchpoint.',
    iconName: 'Megaphone',
    category: 'marketing',
  },
  {
    id: 'performance-marketing',
    title: '2. Performance Marketing',
    summary:
      'Exploring measurable, data-driven customer acquisition methods where campaigns are optimized against key unit economics.',
    focusTopics: [
      'ROAS (Return on Ad Spend) calculation',
      'CPA (Cost per Acquisition) & CAC modeling',
      'Click-Through Rate (CTR) optimization',
      'Conversion Rate Optimization (CRO) best practices'
    ],
    toolsAndFrameworks: ['Unit Economics Modeling', 'A/B Test Design', 'Attribution Models'],
    whyItMatters:
      'Ensures advertising capital delivers measurable revenue and clear accountability for founders and CEOs.',
    iconName: 'TrendingUp',
    category: 'performance',
  },
  {
    id: 'marketing-strategy',
    title: '3. Marketing Strategy',
    summary:
      'Developing structured analytical frameworks for understanding market dynamics, positioning, and scalable distribution.',
    focusTopics: [
      'Value proposition design & differentiation',
      'Funnel architecture (Top, Middle, Bottom)',
      'Market opportunity sizing & competitor analysis',
      'Customer retention & lifetime value (LTV) mechanics'
    ],
    toolsAndFrameworks: ['SWOT & PESTLE Frameworks', 'Funnel Blueprinting', 'Growth Matrices'],
    whyItMatters:
      'Prevents wasted ad spend by ensuring campaigns have clear strategic intent and defensible product positioning.',
    iconName: 'Target',
    category: 'marketing',
  },
  {
    id: 'web-development',
    title: '4. Web Development',
    summary:
      'Crafting clean, responsive, and high-performance digital web experiences that turn traffic into qualified relationships.',
    focusTopics: [
      'Modern responsive layouts (React, Tailwind CSS, TypeScript)',
      'High-converting landing page architecture',
      'Core Web Vitals & page speed optimization',
      'Clean semantic code & accessible user interfaces'
    ],
    toolsAndFrameworks: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5 / Modern JS'],
    whyItMatters:
      'A great marketing campaign requires a fast, friction-free website to convert visitors into business inquiries.',
    iconName: 'Code2',
    category: 'development',
  },
  {
    id: 'seo',
    title: '5. Search Engine Optimization (SEO)',
    summary:
      'Investigating technical SEO, search intent alignment, and structural website optimization for sustainable organic discovery.',
    focusTopics: [
      'Keyword research & search intent analysis',
      'On-page SEO, metadata & structured Schema markup',
      'Technical site health, crawlability & indexing',
      'Information hierarchy & internal linking models'
    ],
    toolsAndFrameworks: ['Search Intent Frameworks', 'Structured Data (JSON-LD)', 'Robots & Sitemap Architecture'],
    whyItMatters:
      'Builds compounding, long-term organic visibility without relying solely on recurring ad expenditure.',
    iconName: 'Search',
    category: 'marketing',
  },
  {
    id: 'brand-awareness',
    title: '6. Brand Awareness',
    summary:
      'Understanding how consistent brand touchpoints, positioning, and emotional resonance foster lasting corporate trust.',
    focusTopics: [
      'Brand identity consistency across channels',
      'Thought leadership & professional presence',
      'Building memorable brand recall',
      'Reputation building & trust signals'
    ],
    toolsAndFrameworks: ['Brand Guidelines Systems', 'Message Hierarchy', 'Proof Adjacency Principles'],
    whyItMatters:
      'Strong branding lowers customer acquisition costs and builds long-term authority in competitive industries.',
    iconName: 'Sparkles',
    category: 'marketing',
  },
  {
    id: 'customer-acquisition',
    title: '7. Customer Acquisition',
    summary:
      'Focusing on the psychology and mechanics of capturing qualified leads and guiding prospects through clear decisions.',
    focusTopics: [
      'High-intent lead capture mechanisms',
      'Offer structuring & risk reversal',
      'Landing page user experience (UX/CX)',
      'Friction reduction in contact and checkout flows'
    ],
    toolsAndFrameworks: ['Conversion Audits', 'Form Optimization Systems', 'Lead Nurture Paths'],
    whyItMatters:
      'Turns curious web visitors into committed conversations, business leads, and active opportunities.',
    iconName: 'Users',
    category: 'performance',
  },
  {
    id: 'digital-advertising',
    title: '8. Digital Advertising',
    summary:
      'Studying paid media channel dynamics, ad copy formulation, visual creatives, and budget distribution methodologies.',
    focusTopics: [
      'Ad creative testing & hook formulation',
      'Audience segmentation & retargeting strategies',
      'Paid social & search campaign mechanics',
      'Budget pacing & performance diagnosis'
    ],
    toolsAndFrameworks: ['Creative Angle Variations', 'Pixel & Event Architecture', 'Campaign Diagnostics'],
    whyItMatters:
      'Enables rapid market validation, targeted audience reach, and predictable top-of-funnel traffic generation.',
    iconName: 'BarChart3',
    category: 'performance',
  },
];

export const LEARNING_JOURNEY_STAGES: LearningMilestone[] = [
  {
    step: 'Foundation',
    title: 'Discovering the Convergence of Marketing & Code',
    institution: 'Self-Driven Exploration & Web Technologies',
    mentorOrLead: 'Independent Learning & Practical Projects',
    location: 'Lahore, Pakistan',
    description:
      'Recognized that the modern digital landscape requires both technical web capability and sharp marketing acumen. Began building responsive web applications while studying the psychology of online consumer behavior.',
    keyTakeaways: [
      'Modern web interfaces must be built for real users, not just aesthetics',
      'Performance, page speed, and clarity directly impact user action',
      'Deep curiosity for how internet businesses acquire and retain customers'
    ],
  },
  {
    step: 'Mentorship',
    title: 'Professional Marketing Immersion with Sir Ahmad Basit',
    institution: 'NeXskill – Be Productive',
    mentorOrLead: 'Sir Ahmad Basit (Marketing Mentor)',
    location: 'Arfa Software Technology Park, Lahore',
    description:
      'Enrolled in professional marketing education at NeXskill under the direct mentorship of Sir Ahmad Basit. Learning structured marketing methodologies, performance mindset, and real-world campaign principles.',
    keyTakeaways: [
      'Marketing is a rigorous discipline driven by metrics, strategy, and empathy',
      'Learning authentic campaign structure, customer journey mapping, and value creation',
      'Guidance and accountability from an experienced industry mentor'
    ],
  },
  {
    step: 'Ecosystem',
    title: 'Immersion in Arfa Software Technology Park',
    institution: 'Pakistan’s Premier Information Technology Hub',
    mentorOrLead: 'NeXskill Academic & Professional Environment',
    location: 'Arfa Kareem Tower, Ferozepur Road, Lahore',
    description:
      'Studying daily within Pakistan’s iconic technology tower surrounded by leading software houses, technology startups, and digital entrepreneurs. This environment fosters ambition, professional discipline, and technological readiness.',
    keyTakeaways: [
      'Close proximity to enterprise technology and software operations',
      'Professional decorum, collaborative discussions, and continuous learning',
      'Direct exposure to international business standards and tech culture'
    ],
  },
  {
    step: 'Active Focus',
    title: 'Connecting Code, Strategy, and Client Acquisition',
    institution: 'HAMMADRASOOL.com & Practical Portfolio',
    mentorOrLead: 'Continuous Application of NeXskill Insights',
    location: 'Lahore & Global Online Collaboration',
    description:
      'Applying marketing strategy and full-stack web development principles simultaneously. Preparing to collaborate with business founders, CEOs, and teams looking to sharpen their digital presence and explore growth opportunities.',
    keyTakeaways: [
      'Committed to radical honesty and transparent communication',
      'Refining performance modeling, conversion funnels, and web development',
      'Ready to assist and collaborate on emerging digital initiatives'
    ],
  },
];
