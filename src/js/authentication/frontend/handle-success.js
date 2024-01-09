const successBlock = document.getElementById('success')

const handleSuccess = (res) => {
  if (successBlock) {
    successBlock.textContent = `SUCCESS: ${res.message}`
  }
}

export default handleSuccess
