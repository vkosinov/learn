import { handleError } from '../utils/handle-error'
import { handleSuccess } from '../utils/handle-success'
import { axiosInstance } from '../utils/axios-instance'

const registerForm = document.getElementById('register')

if (registerForm) {
  const handleSubmit = (evt) => {
    evt.preventDefault()

    const formData = new FormData(registerForm)

    const username = formData.get('username')
    const password = formData.get('password')
    const email = formData.get('email')

    const params = { username, password, email }

    axiosInstance
      .post('register', params)
      .then(({ data }) => {
        handleSuccess(data)
        registerForm.reset()

        setTimeout(() => {
          location.assign('/')
        }, 1000)
      })
      .catch((err) => handleError(err))
  }

  registerForm.addEventListener('submit', handleSubmit)
}
