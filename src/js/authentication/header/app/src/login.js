import BASE_URL from '../../../shared/constants'
import handleError from './utils/handle-error'
import instance from './utils/instance'

const loginForm = document.getElementById('login')
const main = document.getElementById('main')
const userBlock = document.getElementById('user')
const authBlock = document.getElementById('auth')
const noAuthBlock = document.getElementById('not-auth')

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

        localStorage.setItem('token', data.token)

        handleGetUser()
        loginForm.reset()
      })
      .catch((err) => {
        handleError(err)
      })
  }

  loginForm.addEventListener('submit', handleSubmit)
}

const handleGetUser = () => {
  const token = localStorage.getItem('token')

  instance
    .get('get-user', {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(({ data }) => {
      renderUser(data.user)
    })
    .catch((err) => {
      handleError(err)

      noAuthBlock.classList.add('hidden')
      authBlock.classList.remove('hidden')
    })
}

if (main) {
  document.addEventListener('DOMContentLoaded', handleGetUser)
}

const renderUser = (user) => {
  if (!user) {
    userBlock.innerHTML = ``
    return
  }

  authBlock.classList.add('hidden')
  noAuthBlock.classList.remove('hidden')

  if (userBlock) {
    userBlock.innerHTML = `
    <p><b>username:</b> ${user.username}</p>
    <p><b>id:</b> ${user.id}</p>
    <p><b>email:</b> ${user.email ?? '-'}</p>
    <p><b>role:</b> ${user.role}</p>
    `
  }
}
