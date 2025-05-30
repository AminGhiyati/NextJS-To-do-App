# NextJS-To-do-App

A basic todo application built with Next.js and PostgreSQL.

## Setup

1. Install PostgreSQL
2. Create a database:
   ```sql
   CREATE DATABASE todo_db;
   ```
3. Create the todos table:
   ```sql
   CREATE TABLE todos (
       id SERIAL PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       completed BOOLEAN DEFAULT false,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```
4. Update `lib/db.js` with your PostgreSQL password
5. Install dependencies:
   ```bash
   npm install
   ```
6. Run the app:
   ```bash
   npm run dev
   ```

The app will be available at http://localhost:3000
