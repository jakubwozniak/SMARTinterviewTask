# KongsbergTable

KongsbergTable is a web application developed as part of a recruitment process to showcase web development skills. The application is designed to display and browse various types of data using customizable table components. Currently, it retrieves and displays books from the Google Books API, but it's flexible to work with any type of data due to its generic component design. The layout emphasizes a modern aesthetic that is both clear and intuitive for users, and it is fully responsive to ensure optimal viewing and interaction on various devices.

<img width="1024" alt="table" src="https://github.com/jakubwozniak/kongsberg-table/assets/8446297/746963e9-7efe-4ab4-872a-8346ae07dacb">


## 📋 <a name="table">Table of Contents</a>

1. ⚙️ [Tech Stack](#tech-stack)
2. 🔋 [Features](#features)
3. 🤸 [Quick Start](#quick-start)

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- TailwindCSS
- ShadCN
- RTK Query

## <a name="features">🔋 Features</a>

👉 **Browse Books:** Fetches and categorizes books from the Google Books API.

👉 **Sortable Columns:** Users can sort data by any column in the table.

👉 **RTK Query and React Context:** Utilizes RTK Query for efficient API fetching and React context for state management.

👉 **Column Visibility:** Allows users to hide columns to focus on specific data of interest.

👉 **Breadcrumb Navigation:** Provides breadcrumb navigation within the table to indicate the current path and enables users to navigate back to any point within the path.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)


**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_GOOGLE_API_URL=https://www.googleapis.com/books/v1/volumes
GOOGLE_API_KEY=

```

You can obtain GOOGLE_API_KEY by signing up on the  [Google](https://console.cloud.google.com/apis/credentials)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
