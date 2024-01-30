import { handleError } from '../utils/handle-error'
import instance from '../utils/instance'

const loginForm = document.getElementById('login')

if (loginForm) {
  const handleSubmit = (evt) => {
    evt.preventDefault()

    const formData = new FormData(loginForm)

    const username = formData.get('username')
    const password = formData.get('password')

    const params = { username, password }

    instance
      .post('login', params)
      .then(({ data }) => {
        handleError()

        if (data.token) {
          localStorage.setItem('token', data.token)
        }

        location.replace('/user')
      })
      .catch((err) => {
        handleError(err)
      })
  }

  loginForm.addEventListener('submit', handleSubmit)
}
