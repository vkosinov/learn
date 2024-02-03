exports.csrfProtection = (req, res, next) => {
  const isHeader = req.headers['x-csrf-protection']

  if (isHeader) {
    next()
  } else {
    return res.status(400).json({ message: 'Not X-CSRF-PROTECTION header' })
  }
}
