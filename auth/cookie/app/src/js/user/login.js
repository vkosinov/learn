import { axiosInstance } from '../utils/axios-instance'
import { handleError } from '../utils/handle-error'

const loginForm = document.getElementById('login')

if (loginForm) {
  const handleSubmit = (evt) => {
    evt.preventDefault()

    const formData = new FormData(loginForm)

    const username = formData.get('username')
    const password = formData.get('password')

    const data = { username, password }

    axiosInstance
      .post('login', data)
      .then(() => {
        location.replace('/user')
      })
      .catch((err) => {
        handleError(err)
      })
  }

  loginForm.addEventListener('submit', handleSubmit)
}
