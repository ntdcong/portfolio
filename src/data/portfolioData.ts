export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl: string;
}

export interface TimelineItem {
  id: number;
  type: 'education' | 'experience';
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Germanly (Deutsch Learning Web)',
    description: 'A web-app for learning German vocabulary and grammar efficiently. It supports public notebook sharing, multiple study modes, verb conjugation lookup, and integrated AI assistance.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    githubUrl: 'https://github.com/ntdcong/germanly',
    demoUrl: 'https://deutsch.ct.ws',
    imageUrl: '/api/placeholder/400/250'
  },
    {
    id: 2,
    title: 'E-Club Management System',
    description: 'A club management platform with dashboards, event scheduling, attendance tracking, user roles, and integrated email notifications.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'Cloudinary'],
    githubUrl: 'https://github.com/ntdcong/E-Club',
    demoUrl: 'https://e-club.kesug.com',
    imageUrl: '/api/placeholder/400/250'
  },
  {
    id: 3,
    title: 'DeutschEasy Extension',
    description: 'German Noun & Verb Lookup Assistant, automatically takes the word you just selected, sends a query to verbformen.com to get detailed information about that word.',
    technologies: ['Chrome Extension', 'JavaScript', 'Data Scraping'],
    githubUrl: 'https://github.com/ntdcong/DeutschEasy_Extension',
    imageUrl: '/api/placeholder/400/250'
  },
  {
    id: 4,
    title: 'Umlaut Picker',
    description: 'A lightweight desktop utility to quickly insert German umlauts (ä, ö, ü, ß) and special characters with customizable hotkeys, system tray support, and auto-paste.',
    technologies: ['Python', 'Tkinter', 'Keyboard', 'Pystray', 'Pillow'],
    githubUrl: 'https://github.com/ntdcong/umlaut_picker',
    imageUrl: '/api/placeholder/400/250'
  },
  {
    id: 5,
    title: 'Novel Management',
    description: 'A mobile app for managing novels, write your own novel and reading lists, built with Flutter and Firebase authentication/database.',
    technologies: ['Flutter', 'Firebase Auth', 'Firebase Firestore'],
    githubUrl: 'https://github.com/ntdcong/Novel_Management',
    imageUrl: '/api/placeholder/400/250'
  },
  {
    id: 6,
    title: 'E-Commerce Platform',
    description: 'A very basic e-commerce MVC project using Spring Boot with CRUD operations, MySQL integration, and VNPAY payment gateway support.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'VNPAY'],
    githubUrl: 'https://github.com/ntdcong/E_Commerce',
    imageUrl: '/api/placeholder/400/250'
  }
];


export const timeline: TimelineItem[] = [
  {
    id: 1,
    type: 'education',
    title: 'Bachelor of Information Technology',
    organization: 'HUTECH University',
    period: '2021 - Present',
    description: 'Focused on web development, software engineering, and applied projects in chatbots and language learning tools.'
  },
  {
    id: 2,
    type: 'experience',
    title: 'Freelance Developer',
    organization: 'Self-initiated projects & IECS collaborations',
    period: '2022 - Present',
    description: 'Built multiple apps for German language learning and vocational study support, including chatbots, Zalo MiniApp, and flashcard web apps.'
  },
  {
    id: 3,
    type: 'experience',
    title: 'Open Source Contributor',
    organization: 'GitHub (ntdcong)',
    period: '2021 - Present',
    description: 'Created and maintained public repositories such as umlaut_picker, germanly, slack-translate-bot, and fasttrack projects.'
  }
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TailwindCSS', 'Bootstrap', 'ZaloMiniApp', 'JavaScript', 'TypeScript']
  },
  {
    category: 'Backend',
    items: ['PHP', 'Node.js', 'Express', 'Flask', 'PostgreSQL', 'MySQL', 'Redis']
  },
  {
    category: 'DevOps & Tools',
    items: ['GitHub', 'Cloudflare Workers', 'Vercel', 'Render', 'Docker', 'n8n', 'CI/CD']
  },
  {
    category: 'Other',
    items: ['Slack Bot', 'Zalo Bot', 'LINE Bot', 'Telegram Bot', 'Firebase', 'Flutter', 'Python', 'Java', 'Spring Boot', 'C#', ]
  }
];

export const profile = {
  name: 'Nguyen Thanh Duy Cong',
  role: 'Student Developer & IT Enthusiast',
  tagline: '"Programming for life and being able to use it to help others"',
  bio: `I am a man passionate about creating practical applications for education, 
        life, and companies. I enjoy experimenting with all kinds of technologies 
        (I mean EVERYTHING) to build products that combine creativity with real-world utility.`,
  interests: ['Technologys', 'Musics', 'Novels', 'Games', 'Traveling', 'Gym', 'Cooking'],
  social: {
    github: 'https://github.com/ntdcong',
    linkedin: 'https://linkedin.com/in/ntdcong',
    email: 'duycong2580@gmail.com'
  }
};
