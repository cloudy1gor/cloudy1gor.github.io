const langArr = {
  cv: {
    ua: "Моє CV",
    en: "My CV",
  },

  content: {
    ua: "Мої роботи",
    en: "Portfollio",
  },

  about: {
    ua: "Про мене",
    en: "About me",
  },

  name: {
    ua: "Ігор",
    en: "Ihor",
  },

  contacts: {
    ua: "Контакти",
    en: "Contacts",
  },

  topTitle: {
    ua: "Web-розробник з фокусом на Laravel та Vue.",
    en: "Web Developer focused on Laravel and Vue.",
  },

  service: {
    ua: "Ключові компетенції:",
    en: "Core competencies:",
  },

  backendTitle: {
    ua: "Backend",
    en: "Backend",
  },

  backendList: {
    ua: `
  <li>PHP (OOP, SOLID, шаблони проєктування)</li>
  <li>Laravel: API, middleware, queue, кастомні пакети</li>
  <li>MySQL/PostgreSQL/NoSQL: складні запити, оптимізація</li>
  <li>Redis: кеш, сесії, черги</li>
  <li>Postman: тестування REST API, перевірка авторизації, автоматизація запитів</li>
  <li>GitHub: контроль версій, робота з pull requests та branching</li>
  <li>Захист: XSS, CSRF, SQL Injection</li>
  <li>Робота з API та webhook</li>
  <li>Docker: середовище розробки та продакшн</li>
  <li>Linux та Bash: налаштування середовища, автоматизація задач скриптами</li>
  <li>CI/CD: Github Actions, Deployer</li>
  <li>Тестування: PHPUnit</li>
  <li>WordPress: розробка тем, кастомних плагінів</li>
    `.trim(),
    
    en: `
  <li>PHP (OOP, SOLID, design patterns)</li>
  <li>Laravel: API, middleware, queues, custom packages</li>
  <li>MySQL/PostgreSQL/NoSQL: complex queries, optimization</li>
  <li>Redis: cache, sessions, queues</li>
  <li>Postman: testing REST APIs, auth verification, request automation</li>
  <li>GitHub: version control, working with pull requests and branching</li>
  <li>Security: XSS, CSRF, SQL Injection protection</li>
  <li>Working with APIs and webhooks</li>
  <li>Docker: dev & production environments</li>
  <li>Linux and Bash: environment setup, task automation with scripts</li>
  <li>CI/CD: Github Actions, Deployer</li>
  <li>Testing: PHPUnit</li>
  <li>WordPress: theme development, custom plugins</li>
  `.trim(),
  },

  frontendTitle: {
    ua: "Frontend",
    en: "Frontend",
  },

  frontendList: {
    ua: `
  <li>JavaScript (ES6+), модульність, async/await</li>
  <li>Vue: API композиції, Vue Маршрутизатор, Pinia / Provide-Inject</li>
  <li>HTML5, SCSS, адаптивна верстка, BEM</li>
  <li>Vite/Webpack/Gulp: конфігурація, збірка</li>
  <li>Axios/Fetch: запити, обробка помилок</li>
  <li>Tailwind/Bootstrap: швидка верстка</li>
  <li>Анімації: Framer Motion, Transition Group</li>
  <li>Оптимізація: Lighthouse, lazy loading</li>
  <li>Кросбраузерність та тестування</li>
  <li>Інтеграція сторонніх бібліотек (Swiper, Chart.js, AOS)</li>
  <li>Робота з Figma</li>
    `.trim(),

    en: `
  <li>JavaScript (ES6+), modularity, async/await</li>
  <li>Vue: Composition API, Vue Router, Pinia/Provide-Inject</li>
  <li>HTML5, SCSS, responsive layout, BEM</li>
  <li>Vite/Webpack/Gulp: config and build</li>
  <li>Axios/Fetch: API requests, error handling</li>
  <li>Tailwind/Bootstrap: rapid layout</li>
  <li>Animations: Framer Motion, Transition Group</li>
  <li>Optimization: Lighthouse, lazy loading</li>
  <li>Cross-browser support and testing</li>
  <li>Integration of 3rd-party libraries (Swiper, Chart.js, AOS)</li>
  <li>Working with Figma</li>
    `.trim(),
  },

  support: {
    ua: "Підтримка проєктів та масштабування!",
    en: "Project support and scaling!",
  },

  achievementsTitle: {
    ua: "Achievements",
    en: "Achievements",
  },

  achievementsList: {
    ua: `
  <li>Налаштував простий CI/CD-процес через GitHub Actions для автоматичного деплою на хостинг.</li>
  <li>Розробив кастомну адмін-панель для невеликого онлайн-магазину (~500 товарів) на Laravel + Vue.</li>
  <li>Покращив оцінку Google PageSpeed з 60 до 88+ за рахунок lazy loading та оптимізації зображень.</li>
  <li>Інтегрував CRM та оплату через Stripe для сайту послуг — зекономив клієнту час на обробку замовлень.</li>
  <li>Реалізував кешування з Redis для зменшення навантаження на БД у періоди пікової активності.</li>
  <li>Поступово замінив jQuery-функціонал на React компоненти у старому проєкті для покращення підтримки.</li>
    `.trim(),

    en: `
  <li>Set up a basic CI/CD pipeline via GitHub Actions for automated hosting deployment.</li>
  <li>Built a custom admin panel for a small online store (~500 products) using Laravel + Vue.</li>
  <li>Improved Google PageSpeed score from 60 to 88+ by adding lazy loading and image optimization.</li>
  <li>Integrated CRM and Stripe payments for a service-based site — reduced manual order processing time.</li>
  <li>Implemented Redis caching to ease DB load during peak activity periods.</li>
  <li>Gradually replaced jQuery-based code with React components to modernize a legacy project.</li>
    `.trim(),
  }
};
