/* istanbul ignore file */
import { Pool } from 'pg';
import config from '../../../Commons/config.js';

const pool = new Pool(config.database);

export default pool;