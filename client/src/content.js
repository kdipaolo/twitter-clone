import { Home, Bell, Zap, Mail } from 'react-feather'

// Content for header links
export const links = [
  {
    to: '/',
    name: 'Home',
    icon: Home
  },
  {
    to: '/moments',
    name: 'Moments',
    icon: Bell
  },
  {
    to: '/notifications',
    name: 'Notifications',
    icon: Zap
  },
  {
    to: '/messages',
    name: 'Messages',
    icon: Mail
  }
]
