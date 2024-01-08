/* istanbul ignore file */
const { Pool } = require('pg');
const config = require('../../../Commons/config');

const pool = new Pool(config.testConfig);

module.exports = pool;
