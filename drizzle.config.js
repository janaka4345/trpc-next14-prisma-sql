/** @type { import("drizzle-kit").Config } */
export default {
  schema: ".db/schema.js",
  driver: 'pg',
  out: './drizzle',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  }
};