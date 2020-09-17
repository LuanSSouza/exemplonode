const connection = require('../utils/knex');

const get = async(req, res) => {
    let extras = await connection.select('id', 'nome').from('exemplo');
    res.status(200).send(extras).end();
}

const post = async(req, res) => {
    let { nome } = req.body;
    await connection.insert({ 'nome': nome}).into('exemplo');
    res.status(201).send('null').end();
}

module.exports = { get, post };