import BASE_URL from './constants'
import handleError from './handle-error'

const loginForm = document.getElementById('login')

if (loginForm) {
  const handleSubmit = (evt) => {
    evt.preventDefault()

    const formData = new FormData(loginForm)

    const username = formData.get('username')
    const password = formData.get('password')

    const data = JSON.stringify({ username, password })

    console.info('data = ', data)

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
            location.assign('/users.html')
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
