<div align="center">

  <!-- <img src="https://github.com/username/repo-pulse/raw/main/public/logo.png" alt="RepoPulse Logo" width="120" height="120"> -->

  <h1>GitNova</h1>

  <p>
    <strong>Поисковик репозиториев GitHub с современным стеком 2026 года</strong><br>
    React 19 · TypeScript · FSD · TanStack Query v5 · RxJS · Suspense · Skeleton · Error Boundary
  </p>

  <!-- <p>
    <a href="https://github.com/username/repo-pulse/actions">
      <img src="https://img.shields.io/github/actions/workflow/status/username/repo-pulse/ci.yml?branch=main&style=for-the-badge&logo=github" alt="CI Status">
    </a>
    <a href="https://github.com/username/repo-pulse/stargazers">
      <img src="https://img.shields.io/github/stars/username/repo-pulse?style=for-the-badge&logo=starship&color=C9CBFF&logoColor=C9CBFF" alt="Stars">
    </a>
    <a href="https://github.com/username/repo-pulse/issues">
      <img src="https://img.shields.io/github/issues/username/repo-pulse?style=for-the-badge" alt="Issues">
    </a>
    <a href="https://github.com/username/repo-pulse/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/username/repo-pulse?style=for-the-badge" alt="License">
    </a>
  </p> -->
<!-- 
  <br>

  <a href="https://repo-pulse.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Посмотреть%20демо-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Demo">
  </a>
  &nbsp;&nbsp;
  <a href="https://github.com/username/repo-pulse">
    <img src="https://img.shields.io/badge/Исходный%20код-181717?style=for-the-badge&logo=github&logoColor=white" alt="Source">
  </a> -->

</div>

<br>

## ✨ О проекте

**GitNova** — это демонстрационный проект-портфолио, который показывает, как может выглядеть современное фронтенд-приложение в 2026 году:

- Чистая и масштабируемая архитектура **Feature-Sliced Design (FSD)**
- Полноценное управление серверным состоянием через **TanStack Query v5**
- Реактивный debounce поиска с помощью **RxJS**
- Ленивая загрузка страниц и компонентов с **Suspense**
- Красивые скелетоны вместо спиннеров
- Глобальный **Error Boundary**
- Unit-тесты с **Vitest + Testing Library**
- Полностью типизированный TypeScript + React 19

Проект полностью production-ready, оптимизирован и готов к расширению.



## 🚀 Стек

| Технология              | Версия     | Для чего                              |
|-------------------------|------------|---------------------------------------|
| React                   | 19         | UI-библиотека                         |
| TypeScript              | 5.6+       | Типизация                             |
| Vite                    | 6.x        | Сборщик и dev-сервер                  |
| TanStack Query          | 5.64+      | Server state, кэширование, loading    |
| RxJS                    | 7.8+       | Debounce поискового ввода             |
| React Router DOM        | 7.x        | Навигация                             |
| Tailwind CSS            | 3.4+       | Стили                                 |
| clsx + tailwind-merge   | —          | Удобное объединение классов           |
| Vitest + Testing Lib    | —          | Тестирование компонентов              |
| Error Boundary          | —          | Защита от крашей                      |

## 🖥️ Демо - временно отключил

**[https://*****.app](https://*****/.app)**  
(или другая ссылка после деплоя)

## 📦 Установка и запуск

```bash
# Клонируем репозиторий
git clone ************
cd ********

# Устанавливаем зависимости
npm install

# Запускаем в режиме разработки
npm run dev

# Собираем production-билд
npm run build

# Превью production-билда локально
npm run preview

# Запуск тестов
# npm test
# npm run test:ui          
# npm run test:coverage   