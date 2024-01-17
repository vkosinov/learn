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

    const params = { username, password, email }

    instance
      .post('register', params)
      .then(({ data }) => {
        handleError()
        handleSuccess(data)
        registerForm.reset()

        localStorage.setItem('token', data.token)

        setTimeout(() => {
          location.assign('/')
        }, 1000)
      })
      .catch((err) => handleError(err))
  }

  registerForm.addEventListener('submit', handleSubmit)
}
