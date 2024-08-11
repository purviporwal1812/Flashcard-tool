import { createPool } from 'mysql2/promise'; // Promise-based MySQL

const pool = createPool({
  host: 'localhost',
  user: 'purvi',
  password: '2468',
  database: 'flashcard', // Ensure this matches your database name
});

export default pool;
