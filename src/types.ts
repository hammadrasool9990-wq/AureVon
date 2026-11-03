export type InterestOption =
  | 'Digital Marketing'
  | 'Performance Marketing'
  | 'Website Development'
  | 'Business Collaboration'
  | 'General Inquiry'
  | 'Other';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string; // Contact Number (Required)
  message?: string; // Optional short message/note
  interest?: string;
  companyName?: string;
  website?: string;
  honeypot?: string; // Spam protection
}

export interface ContactSubmission extends ContactFormData {
  id: string;
  createdAt: string;
  status: 'received' | 'replied';
}

export interface SkillCategory {
  id: string;
  title: string;
  summary: string;
  focusTopics: string[];
  toolsAndFrameworks: string[];
  whyItMatters: string;
  iconName: string;
  category: 'marketing' | 'performance' | 'development';
}

export interface LearningMilestone {
  step: string;
  title: string;
  institution: string;
  mentorOrLead: string;
  location: string;
  description: string;
  keyTakeaways: string[];
}
