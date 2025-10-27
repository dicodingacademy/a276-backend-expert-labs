/* istanbul ignore file */
import pg from 'pg';
import config from '../../../Commons/config.js';

const pool = process.env.NODE_ENV === 'test' ? new Pool(testConfig) : new Pool();

export default pool;
