import BASE_URL from './constants'
import handleError from './handle-error'
import handleSuccess from './handle-success'

const resetForm = document.getElementById('reset')

if (resetForm) {
  const handleSubmit = (evt) => {
    evt.preventDefault()

    const formData = new FormData(resetForm)

    const password = formData.get('password')
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')
    const id = urlParams.get('id')

    const data = JSON.stringify({ password, token, id })

    fetch(`${BASE_URL}/reset`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
      credentials: 'include',
    })
      .then((response) => {
        response.json().then((res) => {
          if (!response.ok) {
            handleSuccess()
            handleError(res)
          } else {
            handleError()
            handleSuccess(res)

            setTimeout(() => {
              location.assign('/')
            }, 1000)
          }
        })

        resetForm.reset()
      })
      .catch((err) => {
        handleError(err)
      })
  }

  resetForm.addEventListener('submit', handleSubmit)
}
