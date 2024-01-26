exports.getToken = (req) => req.headers.authorization.split(' ')[1]
