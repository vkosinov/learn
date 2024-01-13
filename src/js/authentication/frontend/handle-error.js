const errorBlock = document.getElementById('error')

const handleError = (res) => {
  if (errorBlock) {
    if (res) {
      errorBlock.innerHTML = `ERROR: ${res.message}. ${
        res.error ? res.error : ''
      }`
    } else {
      errorBlock.innerHTML = ''
    }
  }
}

export default handleError
