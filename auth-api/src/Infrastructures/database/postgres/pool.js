/* istanbul ignore file */
import { Pool } from 'pg';
import config from '../../../Commons/config.js';

const pool = process.env.NODE_ENV === 'test' ? new Pool(config) : new Pool();

export default pool;