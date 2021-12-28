import { Pool } from "pg";

const connectionString = 'postgres://loging:senha@castor.db.elephantsql.com/login';

const db = new Pool({connectionString});

export default db;
