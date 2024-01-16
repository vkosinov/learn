import handleError from './utils/handle-error'
import handleSuccess from './utils/handle-success'
import instance from './utils/instance'

const registerForm = document.getElementById('register')

if (registerForm) {
  const handleSubmit = (evt) => {
    evt.preventDefault()

    const formData = new FormData(registerForm)

    const username = formData.get('username')
    const password = formData.get('password')
    const email = formData.get('email')

    const data = { username, password, email }

    instance
      .post('register', data)
      .then((response) => {
        handleError()
        handleSuccess(response)
        registerForm.reset()

        setTimeout(() => {
          location.assign('/')
        }, 1000)
      })
      .catch((err) => handleError(err))
  }

  registerForm.addEventListener('submit', handleSubmit)
}
