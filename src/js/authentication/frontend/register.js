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
    const email = formData.get('email')

    const data = JSON.stringify({ username, password, email })

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

            setTimeout(() => {
              location.assign('/')
            }, 1000)
          }
        })
      })
      .catch((err) => handleError(err))
  }

  registerForm.addEventListener('submit', handleSubmit)
}
