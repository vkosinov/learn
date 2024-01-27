import BASE_URL from './constants'
import handleError from './handle-error'

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

    const data = JSON.stringify({ username, password })

    fetch(`${BASE_URL}/login`, {
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
            handleError(res)
          } else {
            handleError()
            handleGetUser()
          }
        })

        loginForm.reset()
      })
      .catch((err) => {
        handleError(err)
      })
  }

  loginForm.addEventListener('submit', handleSubmit)
}

const handleGetUser = () => {
  fetch(`${BASE_URL}/get-user`, { credentials: 'include' }).then((result) => {
    result
      .json()
      .then((data) => {
        if (result.ok) {
          renderUser(data.user)
        } else {
          noAuthBlock.classList.add('hidden')
          authBlock.classList.remove('hidden')
        }
      })
      .catch((err) => handleError(err))
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
