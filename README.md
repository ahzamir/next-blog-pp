# Blog App - Next.js, TypeScript, and Tailwind CSS

This is a fullstack blog application built using **Next.js**, **TypeScript**, and **Tailwind CSS**. The app allows users to view a list of blog posts and create new posts. The project showcases server-side rendering (SSR) and client-side rendering (CSR) with static data. It also highlights the use of API routes to simulate basic CRUD operations.

## Features

- 📄 View a list of blog posts on the homepage
- 📝 Add new blog posts via a form submission
- ⚡ Client-side and Server-side rendering
- 🎨 Responsive design with **Tailwind CSS**
- 🛠️ Built with **TypeScript** for type safety
- 🚀 API routes with Next.js for handling requests (simulated for now)

## Table of Contents

- [Technologies](#technologies)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Scripts](#scripts)

## Technologies

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Setup Instructions

### 1. Clone the Repository

```bash
git clone git@github.com:ahzamir/next-blog-pp.git
cd blog-app
```

### 2. Install Dependencies

Make sure you have Node.js installed. Then, run the following command to install the dependencies:

```bash
npm install
```

### 3. Configure Tailwind CSS

Tailwind CSS is already configured in the project, but if you want to customize it, you can do so in the `tailwind.config.js` file.

### 4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

### 5. Build the Project for Production

To build the project for production, use the following command:

```bash
npm run build
```

This will generate a `.next` directory with optimized production assets.

## Project Structure

```
├── src
│   ├── app
│   │   ├── posts
│   │   │   └── [id].tsx  # Dynamic route for individual posts
│   │   |   └── new-post
│   │   │       └── page.tsx  # Page for adding new posts
│   │   └── page.tsx      # Blog homepage with the list of posts
│   ├── components
│   │   └── Layout.tsx    # Layout component for consistent structure
│   |   └── NewPostComponent.tsx # Component for adding new posts
│   |   └── PostComponent.tsx # Component for displaying individual posts
│   |   └── Posts.tsx # Component for displaying list of posts
│   ├── lib
│   │   └── posts.ts       # Static data for blog posts
│   ├── models
│   │   └── Post.ts       # Post model (interface)
│   └── services
│       └── PostService.ts # Simulated service for handling post data
├── public
│   └── favicon.ico       # Favicon
├── styles
│   └── globals.css       # Global CSS file with Tailwind imports
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

### Important Files and Directories

- **`src/app/page.tsx`**: Main page listing blog posts.
- **`src/app/new-post/page.tsx`**: Page for adding new posts.
- **`src/app/posts/[id].tsx`**: Dynamic route for individual posts.
- **`src/components/Layout.tsx`**: Layout component for consistent page structure.
- **`src/services/PostService.ts`**: Simulates API requests for post management.

## Development Workflow

### 1. Creating a New Post

The app allows you to create a new post from the `/new-post` route. After submitting the form, a success message is displayed, and the form is reset.

### 2. Viewing Blog Posts

Blog posts are listed on the homepage (`/`). Clicking on a post title will take you to the individual post page.

### 3. API Routes (Simulated)

In the future, these routes can be connected to a real database, but for now, they are simulated using static data in the `PostService.ts` file.

## Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the project for production.
- **`npm start`**: Start the production server after building the project.
