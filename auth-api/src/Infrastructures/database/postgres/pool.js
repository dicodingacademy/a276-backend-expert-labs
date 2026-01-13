/* istanbul ignore file */
import pg from 'pg';
import config from '../../../Commons/config.js';

const { Pool } = pg;

const pool = new Pool(config.database);

export default pool;
