# QuizBot

QuizBot is a full-stack web application that enables users to generate AI-powered quizzes, get topic descriptions, read and write blog articles, and manage their accounts. The frontend is built with React and communicates with a backend API (Spring Boot/MySQL, not included here).

---


## Features

- **User Authentication:** Register and log in to access personalized features.
- **Quiz Generation:** Generate AI-powered quizzes on any topic.
- **Topic Description:** Get AI-generated descriptions for any topic.
- **Blog:** Read, write, and manage blog articles.
- **Account Management:** View and edit personal information, manage articles.
- **History:** View quiz and article history (static dashboard).
- **Responsive UI:** Works across devices.

---

## Tech Stack

- **Frontend:** React.js, React Router DOM, Axios, JS-Cookie, Material UI (MUI)
- **Styling:** CSS Modules, Google Fonts
- **Backend :** Spring Boot, MySQL 
- **Build Tool:** Vite

---

## React Concepts Used

- **Functional Components:** All UI is built using React functional components.
- **Hooks:** 
  - `useState` for local state management.
  - `useEffect` for side effects (e.g., data fetching).
  - `useNavigate`, `useLocation` from React Router for navigation and route state.
- **React Router:** 
  - `Routes`, `Route` for client-side routing.
  - `Link` for navigation.
- **Component Composition:** Reusable components like Header, Footer, ArticleCard.
- **Conditional Rendering:** Loading spinners, login-required prompts, error messages.
- **Form Handling:** Controlled components for forms, submission handlers.
- **API Integration:** All API calls abstracted in service files.
- **Stateful Lists:** Articles, blogs, and quiz questions rendered from arrays in state.
- **Props:** Data and callbacks passed as props.

---

## Major Components & Features

### 1. Landing Page
- **LandingPage:** Welcome screen, navigation to Home/About.

### 2. Authentication
- **LogIn:** Login form, calls `loginUser`.
- **SignUp:** Signup form, calls `createUser`.

### 3. Account Page
- **Account:** Shows user info, article form, and user's articles.
- **ArticleForm:** Create new articles.
- **ArticleCard:** Display individual articles.

### 4. Quiz Generation
- **HomePage:** Main dashboard for quizzes.
- **QuizCom:** Generate and take quizzes.

### 5. Describe Section
- **DescribeCom:** Users can enter any topic and receive an AI-generated description. This feature leverages the backend's AI capabilities to provide concise, informative explanations for any subject the user inputs.

### 6. Blog
- **Blog:** List and search blog articles.
- **BlogRead:** Read a full blog article.

### 7. History
- **History:** (Not Completed) user quiz statistics dashboard.

### 8. Error/Loading Handling
- **LoadingPage:** Loading spinner.
- **LoginRequire:** Prompt to log in if not authenticated.
- **ArticleNotFound:** 404 for missing articles.

### 9. Navigation
- **Header:** Top navigation bar.
- **SideHeader:** Mobile side navigation.

### 10. Footer
- **Footer:** Developer info and links.

---

## Routing

Routing is defined in `App.jsx` using React Router v6+:

- `/` → LandingPage
- `/home` → HomePage (quiz dashboard)
- `/history` → History (user stats)
- `/blog` → Blog (all articles)
- `/about` → About (project info)
- `/account` → Account (user profile, articles)
- `/login` → LogIn
- `/signup` → SignUp
- `/read/:id` → ArticleRead (user's article)
- `/editarticle/:id` → EditArticle
- `/readblog/:id` → BlogRead (blog article)

---

## API Integration

All API calls use Axios, with a base instance in `api.js`:

- **Authentication:** `loginUser`, `createUser`
- **Quiz:** `getQuiz`
- **Describe:** `getDescribe` (for topic descriptions)
- **Blog:** `getAllBlogs`, article CRUD

API endpoints are  RESTful, e.g., `/users/login`, `/quiz/getquiz`, `/describe/topic`.

---

## Authentication

- User ID is stored in cookies (via `js-cookie`).
- Protected pages check for user ID and show `LoginRequire` if not logged in.
- Login and signup forms handle authentication and navigation.

---

## Styling

- CSS Modules per feature (e.g., `HomeStyle.css`, `BlogStyle.css`).
- Google Fonts for typography.
- Responsive layouts with media queries.
- MUI icons for visual cues.

---

## How to Run This Project

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd quizbot
   ```
  

2. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the development server:**
   ```sh
   npm run dev
   ```

2. **Open the app in your browser:**
    ```sh
   http://localhost:5173


---


## Future Features

1. **Leaderboards & Rewards** – Global/friends’ leaderboards, quiz streaks, and badges.  
2. **Timed Quizzes & Difficulty Levels** – Add timers, categories, and difficulty settings.  
3. **User Profiles & Customization** – Avatars, bios, and achievement tracking.  
4. **Quiz Review & Explanations** – Show correct answers and detailed explanations.  
5. **Sharing & Notifications** – Share results on social media and get notified about new content.  
6. **Comments & Discussions** – Engage with others through comments on quizzes and articles.  
7. **User-Generated Quizzes** – Let users create and publish their own quizzes.  
8. **Mobile & Accessibility** – Mobile app support, dark mode, and accessibility features.    

## Spring Boot Back End Repo – https://github.com/Avishka14/quizbot-springboot-server



## Contributing

Contributions are welcome!

 - &copy; Avishka14
