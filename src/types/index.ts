export interface Workshop {
  id: string;
  name: string;
  description: string;
  location: string;
  date: string;
  time: string;
  organizer: string;
  sponsors: string[];
  prerequisites: string[];
  maxAttendees: number;
  currentAttendees: number;
  pinImage: string;
  category: 'web-dev' | 'entrepreneurship' | 'ai' | 'tech' | 'networking';
}

export interface Attendee {
  id: string;
  name: string;
  email: string;
  phone: string;
  workshop: Workshop;
  registrationDate: string;
  pin?: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    github?: string;
    google?: string;
    linkedin?: string;
  };
}

export interface RegistrationForm {
  name: string;
  email: string;
  phone: string;
  workshopId: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    github?: string;
    google?: string;
    linkedin?: string;
  };
}

export interface FeedPost {
  id: string;
  image: string;
  caption: string;
  workshop: string;
  date: string;
  likes: number;
  comments: number;
}