/* istanbul ignore file */
import pkg from 'pg';
import config from '../../../Commons/config.js';

const { Pool } = pkg;

const pool = new Pool(config.database);

export default pool;
