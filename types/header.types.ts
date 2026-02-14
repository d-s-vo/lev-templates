export interface NavItem {
  label: string;
  to: string; // путь для NuxtLink
  external?: boolean; // флаг для внешних ссылок
}

export interface ContactInfo {
  phone: string;
  email: string;
  address?: string;
}

export interface HeaderData {
  logoText: string; // или url логотипа
  navigation: NavItem[];
  contacts: ContactInfo;
  ctaButton?: { // Кнопка призыва к действию (например, "Войти")
    label: string;
    to: string;
  };
}