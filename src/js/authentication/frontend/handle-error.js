const errorBlock = document.getElementById('error')

const handleError = (res) => {
  if (errorBlock) {
    if (res) {
      errorBlock.textContent = `ERROR: ${res.message}. ${
        res.error ? res.error : ''
      }`
    } else {
      errorBlock.textContent = ''
    }
  }
}

export default handleError
