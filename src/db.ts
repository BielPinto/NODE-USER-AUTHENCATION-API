import { Pool } from "pg";

const connectionString = 'postgres://login:senha@castor.db.elephantsql.com/login';

const db = new Pool({connectionString});

export default db;
