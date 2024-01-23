const Xss = require('../../shared/models/xss')

exports.xss = async (req, res) => {
  const token = req.cookies.jwt

  try {
    if (!token) {
      res.status(401).json({ message: 'No token' })
    } else {
      console.log(token)
      try {
        const result = await Xss.create({ token })
        if (result) {
          res.status(200).json({
            message: 'Token saved',
          })
        }
      } catch (err) {
        res.status(400).json({
          message: 'An error occurred',
          error: err.message,
        })
      }
    }
  } catch (err) {
    res.status(400).json({
      message: 'An error occurred',
      error: err.message,
    })
  }
}
