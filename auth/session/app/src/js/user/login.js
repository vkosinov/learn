import { handleError } from 'utils/handle-error'
import { axiosInstance } from '../utils/axios-instance'

const loginForm = document.getElementById('login')

if (loginForm) {
  const handleSubmit = (evt) => {
    evt.preventDefault()

    const formData = new FormData(loginForm)

    const username = formData.get('username')
    const password = formData.get('password')

    const params = { username, password }

    axiosInstance
      .post('login', params)
      .then(({ data }) => {
        sessionStorage.setItem('csrf-token', data.csrfToken)
        location.replace('/user')
      })
      .catch((err) => {
        handleError(err)
      })
  }

  loginForm.addEventListener('submit', handleSubmit)
}
