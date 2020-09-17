const errorHandler = (error, req, res, next) => {
    res.status(500);
    res.json({ message: error.message ? error.message : 'Algo deu errado!' });
}

module.exports = errorHandler;