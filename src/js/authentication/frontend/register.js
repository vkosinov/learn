import BASE_URL from './constants'
import handleError from './handle-error'
import handleSuccess from './handle-success'

const registerForm = document.getElementById('register')

if (registerForm) {
  const handleSubmit = (evt) => {
    evt.preventDefault()

    const formData = new FormData(registerForm)

    const username = formData.get('username')
    const password = formData.get('password')

    const data = JSON.stringify({ username, password })

    fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
      credentials: 'same-origin',
    })
      .then((response) => {
        response.json().then((res) => {
          if (!response.ok) {
            handleError(res)
          } else {
            handleError()
            handleSuccess(res)
            registerForm.reset()
          }
        })
      })
      .catch((err) => handleError(err))
  }

  registerForm.addEventListener('submit', handleSubmit)
}
