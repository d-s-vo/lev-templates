export interface OfferInfoRow {
  title: string;
  text: string;
}

// 2. Тип для самой карточки займа
export interface OfferCard {
  id: number;
  companyName: string; // Название (Webbankir)
  image: string;       // Логотип
  link: string;        // Ссылка для кнопки
  tags: array<string>;        // Тэги одной строкой ("Лидер..., Первый займ...")
  topLabel?: string;   // Желтая плашка "Лучший микрозайм" (опционально)
  info: OfferInfoRow[]; // Массив ровно из 4 объектов
}

// 3. Расширяем главный интерфейс данных
export interface HomePageData {
  // ...остальные поля (hero, features)...
  offers: OfferCard[];
}