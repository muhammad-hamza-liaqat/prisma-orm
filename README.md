# Node.js + Prisma Project

This project uses **Node.js**, **Express**, and **Prisma ORM** for database management. It includes a development workflow with migrations, Prisma Client, and Prisma Studio.

---

## **Setup & Installation**

Install dependencies:

```bash
npm install
```

Initialize Prisma (if not already):

```bash
npx prisma init
```

This creates `prisma/schema.prisma` and `.env`.

---

## **Prisma Commands & Workflow**

| Command | Description |
|---------|-------------|
| `npx prisma migrate dev --name <migration_name>` | Creates a new migration, applies it to the database, and generates Prisma Client. Example: `npx prisma migrate dev --name init` |
| `npx prisma migrate deploy` | Applies all existing migrations (typically for production or fresh DB). |
| `npx prisma migrate reset` | Drops all tables, reapplies migrations, regenerates Prisma Client, and runs seed script if configured (useful for development). |
| `rm prisma/dev.db` | Deletes SQLite database manually. For PostgreSQL/MySQL: `DROP DATABASE your_db_name; CREATE DATABASE your_db_name;` |
| `npx prisma generate` | Regenerates Prisma Client after schema changes. |
| `npx prisma studio` | Opens Prisma Studio in the browser to view and edit database records. |
| `npx prisma db pull` | Pulls the current database schema into `schema.prisma`. |
| `npx prisma format` | Formats `schema.prisma` file. |
| `npx prisma migrate status` | Shows migration status (applied, pending, or failed). |

---

## **Development Workflow**

1. Edit your `prisma/schema.prisma` file.  
2. Run `npx prisma migrate dev --name <descriptive_name>` to create and apply migrations.  
3. Use `npx prisma generate` to update Prisma Client.  
4. Inspect or edit data via `npx prisma studio`.  
5. Use `npm run dev` to start your Node.js server with nodemon.  
6. Reset the database anytime with `npx prisma migrate reset` for a fresh start.

---

## **NPM Scripts**

```json
"scripts": {
  "dev": "nodemon src/index.js",
  "start": "node src/index.js",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

- `npm run dev` → start development server with auto-reload  
- `npm run lint` → check code style  
- `npm run lint:fix` → automatically fix lint issues  

---

## **Best Practices**

- Use **Airbnb style guide** with ESLint for consistent code formatting.  
- Always run migrations after editing the schema.  
- Use Prisma Studio to inspect or edit records during development.  
- Keep your `.env` secure and do not commit sensitive credentials.