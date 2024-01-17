const successBlock = document.getElementById('success')

const handleSuccess = (res) => {
  if (successBlock) {
    if (res) {
      successBlock.innerHTML = `SUCCESS: ${res.message}`
    } else {
      successBlock.innerHTML = ''
    }
  }
}

export default handleSuccess
