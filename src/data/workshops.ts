import { Workshop, FeedPost } from '@/types';
import pinWebDev from '@/assets/pin-web-dev.png';
import pinEntrepreneurship from '@/assets/pin-entrepreneurship.png';
import pinAI from '@/assets/pin-ai.png';
import pinTech from '@/assets/pin-tech.png';
import pinNetworking from '@/assets/pin-networking.png';
import feedEvent1 from '@/assets/feed-event-1.jpg';
import feedEvent2 from '@/assets/feed-event-2.jpg';

export const workshops: Workshop[] = [
  {
    id: '1',
    name: 'Desarrollo Web & Aplicaciones',
    description: 'Aprende las últimas tecnologías web y desarrolla aplicaciones modernas',
    location: 'Centro de Innovación Tecnológica, Hermosillo',
    date: '2024-10-15',
    time: '09:00 - 17:00',
    organizer: 'TechHub Hermosillo',
    sponsors: ['Microsoft', 'Google', 'AWS'],
    prerequisites: ['Conocimientos básicos de programación', 'Laptop personal'],
    maxAttendees: 50,
    currentAttendees: 32,
    pinImage: pinWebDev,
    category: 'web-dev'
  },
  {
    id: '2',
    name: 'Emprendimiento e Innovación',
    description: 'Desarrolla tu idea de negocio y aprende estrategias de emprendimiento',
    location: 'Incubadora UNISON, Hermosillo',
    date: '2024-10-18',
    time: '10:00 - 16:00',
    organizer: 'Startup Sonora',
    sponsors: ['INADEM', 'Banco Santander', 'UNISON'],
    prerequisites: ['Idea de negocio (opcional)', 'Ganas de emprender'],
    maxAttendees: 40,
    currentAttendees: 28,
    pinImage: pinEntrepreneurship,
    category: 'entrepreneurship'
  },
  {
    id: '3',
    name: 'Inteligencia Artificial',
    description: 'Explora el mundo de la IA y machine learning aplicado a tu industria',
    location: 'Centro de Ciencias, UNISON',
    date: '2024-10-22',
    time: '08:30 - 18:00',
    organizer: 'AI Sonora',
    sponsors: ['NVIDIA', 'Intel', 'IBM'],
    prerequisites: ['Matemáticas básicas', 'Programación en Python (básico)'],
    maxAttendees: 35,
    currentAttendees: 31,
    pinImage: pinAI,
    category: 'ai'
  },
  {
    id: '4',
    name: 'Nuevas Tecnologías',
    description: 'Descubre las tecnologías emergentes que cambiarán el futuro',
    location: 'Parque Tecnológico, Hermosillo',
    date: '2024-10-25',
    time: '09:00 - 15:00',
    organizer: 'Future Tech MX',
    sponsors: ['Samsung', 'Sony', 'Tesla'],
    prerequisites: ['Curiosidad tecnológica', 'Mente abierta'],
    maxAttendees: 60,
    currentAttendees: 45,
    pinImage: pinTech,
    category: 'tech'
  },
  {
    id: '5',
    name: 'Networking y Colaboración',
    description: 'Conecta con profesionales y expande tu red de contactos',
    location: 'Hotel Fiesta Americana, Hermosillo',
    date: '2024-10-28',
    time: '18:00 - 22:00',
    organizer: 'Business Network Sonora',
    sponsors: ['LinkedIn', 'WeWork', 'Eventbrite'],
    prerequisites: ['Tarjetas de presentación', 'Actitud colaborativa'],
    maxAttendees: 80,
    currentAttendees: 67,
    pinImage: pinNetworking,
    category: 'networking'
  }
];

export const feedPosts: FeedPost[] = [
  {
    id: '1',
    image: feedEvent1,
    caption: '¡Increíble sesión de coding en el último workshop de Desarrollo Web! 💻✨ #HermosilloTech #WebDev',
    workshop: 'Desarrollo Web & Aplicaciones',
    date: '2024-09-15',
    likes: 84,
    comments: 12
  },
  {
    id: '2',
    image: feedEvent2,
    caption: 'Pitching ideas innovadoras en nuestro workshop de Emprendimiento 🚀💡 #StartupSonora #Innovation',
    workshop: 'Emprendimiento e Innovación',
    date: '2024-09-12',
    likes: 67,
    comments: 8
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'María González',
    workshop: 'Desarrollo Web',
    comment: 'Excelente workshop! Aprendí tecnologías que uso en mi trabajo diario.',
    rating: 5,
    pin: pinWebDev
  },
  {
    id: '2',
    name: 'Carlos Mendoza',
    workshop: 'Emprendimiento',
    comment: 'Me ayudó a estructurar mi idea de negocio. Muy recomendado!',
    rating: 5,
    pin: pinEntrepreneurship
  },
  {
    id: '3',
    name: 'Ana Ruiz',
    workshop: 'Inteligencia Artificial',
    comment: 'Fascinante introducción al mundo de la IA. Quiero seguir aprendiendo.',
    rating: 5,
    pin: pinAI
  }
];