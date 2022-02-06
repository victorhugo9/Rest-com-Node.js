import { Pool } from "pg";

const connectionString = 'postgres://cbewhbhk:SjD1YSic1d0i-LOef07jE6ERLXVmV0eI@kashin.db.elephantsql.com/cbewhbhk'

const db = new Pool({ connectionString })

export default db;
