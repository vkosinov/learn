exports.logout = (req, res) => {
  res.cookie('jwt', '', { httpOnly: true, maxAge: '1' })
  res.status(200).json({ message: 'logout success' })
}
