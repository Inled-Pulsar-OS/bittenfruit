export interface FAQItem {
  question: string;
  answer: string;
}

export interface VideoFeature {
  title: string;
  description: string;
  video: string;
  poster?: string;
}

export interface CloudProvider {
  name: string;
  logo: string;
}

export interface EditionCard {
  name: string;
  headline: string;
  description: string;
  badge: string;
  bootVariants: string[];
}
