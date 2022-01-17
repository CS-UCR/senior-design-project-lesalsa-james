const notFound = (req, res, next) => {
    const error = new Error(`Not Found -${req.originalURL}`);
    res.status(404);
    next(error);
}

module.exports = { notFound };