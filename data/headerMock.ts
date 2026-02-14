import type { HeaderData } from '../types'

export const mockHeaderData: HeaderData = {
  logoText: 'MyProject',
  navigation: [
    { label: 'О нас', to: '/about' },
    { label: 'Услуги', to: '/services' },
    { label: 'Блог', to: '/blog' },
  ],
  contacts: {
    phone: '+7 (999) 000-00-00',
    email: 'hello@myproject.com',
    address: 'г. Москва, ул. Пушкина, д. Колотушкина'
  },
  ctaButton: {
    label: 'Связаться',
    to: '/contact'
  }
}