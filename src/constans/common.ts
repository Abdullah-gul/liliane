import { FiHome, FiGlobe, FiClipboard, FiMail, FiUser, FiBookOpen } from 'react-icons/fi'

export const HOST = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000'

export const NAV_ITEMS = [
  { path: '/', label: 'Home', Icon: FiHome },
  { path: '/about', label: 'About', Icon: FiUser },
  { path: '/blog', label: 'Blog', Icon: FiGlobe },
  { path: '/projects', label: 'Projects', Icon: FiClipboard },
  { path: '/contact', label: 'Contact', Icon: FiMail },
  // { path: '/guestbook', label: 'Guestbook', Icon: FiBookOpen },
]

export const PAGE_TITLES = {
  '/': '._',
  '/about': 'About',
  '/blog': 'Blog',
  '/projects': 'Projects', 
  '/contact': 'Contact',
  // '/guestbook': 'G-book',
}

export const SOCIALS = {
  UT: 'https://www.youtube.com/@lilianemallah3385',
  IG: 'https://www.instagram.com/lilianemallah?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  IN: 'https://www.linkedin.com/in/liliane-el-mallah-945505115',
  WA: 'https://api.whatsapp.com/send?phone=+97455477728&text=Hey',
}

export const RESUME_URL = 'https://drive.google.com/file/d/1ytO7InWLVjJGryqRC0QZdc60bU1iesph/view?usp=sharing'

export const FORMSPREE_KEY = 'xoqyaqqe'

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCVXW6MTdRVtYPTOoV92ruBQ3ZQcF5Ho0g',
  authDomain: 'dede-ard.firebaseapp.com',
  databaseURL: 'https://dede-ard.firebaseio.com',
  projectId: 'dede-ard',
  storageBucket: 'dede-ard.appspot.com',
  messagingSenderId: '120930847292',
  appId: '1:120930847292:web:eb77034f59e9ee37b65139',
  measurementId: 'G-KJRFL3X06T',
}
