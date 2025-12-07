export enum Language {
  EN = 'EN',
  CN = 'CN'
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface CurriculumStage {
  title: string;
  years: string;
  description: string;
  highlights: string[];
}

export interface Content {
  nav: {
    home: string;
    about: string;
    curriculum: string;
    contact: string;
    apply: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  intro: {
    title: string;
    text: string;
  };
  features: Feature[];
  curriculum: {
    title: string;
    subtitle: string;
    primary: CurriculumStage;
    secondary: CurriculumStage;
  };
  cta: {
    title: string;
    text: string;
    button: string;
  };
  chatbot: {
    welcome: string;
    placeholder: string;
    send: string;
    thinking: string;
  };
}