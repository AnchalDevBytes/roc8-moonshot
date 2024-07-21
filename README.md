# Roc8-Moonshot Fullstack Assignment

This project was developed as a take-home assignment for a Fullstack Developer position at Roc8-Career as part of the Moonshot competition. The application is built using Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL, and is deployed on Vercel.

## Features

- **Signup System with OTP**: Users can sign up with their email. An OTP is sent to the provided email for verification.
- **Login**: Users can log in using their email and password.
- **Category Management**: Logged-in users can view all categories and toggle (check/uncheck) their selection. The selected categories are saved to their profile and persisted across sessions.

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AnchalDevBytes/roc8-moonshot.git
cd roc8-moonshot
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```plaintext

API_BASE_URL="same as the base url for this app"
DATABASE_URL="postgres database connection string"

ACCESS_TOKEN_SECRET="Put here your secret access token key"
REFRESH_TOKEN_SECRET="Put here your secret refresh token key"
MAILERSEND_API_KEY="Put here your mailersend api key"


```

### Running the Application

1. Generate Prisma model in Database:

```bash
npm run db:generate
```

2. seed 100 of data in database:

```bash
cd src/data
node seed.js
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

## Deployment

The application is deployed on Vercel. [live]()

## Contact

For any query or feedback, feel free to contact me at [anchalrajtech@gmail.com](mailto:anchalrajtech@gmail.com).