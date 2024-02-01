exports.logout = async (req, res) => {
  if (req.session) {
    req.session.destroy()

    res.status(200).json({ message: 'success' })
  }
}
