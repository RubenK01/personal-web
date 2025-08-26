export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Technology {
  id: string;
  name: string;
  icon: string;
  category: 'cloud' | 'devops' | 'monitoring' | 'security';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
}

export interface LeadForm {
  name: string;
  email: string;
  company?: string;
  phone?: string;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
} 