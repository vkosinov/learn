const form = document.getElementById('form')
const loginForm = document.getElementById('login')
const updateButton = document.getElementById('update')
const deleteButton = document.getElementById('delete')

const BASE_URL = 'http://localhost:5000/api/auth'

if (form) {
  const handleSubmit = (evt) => {
    evt.preventDefault()

    const formData = new FormData(form)

    const username = formData.get('username')
    const password = formData.get('password')

    const data = JSON.stringify({ username, password })

    console.info('data = ', data)

    fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
      credentials: 'same-origin',
    })
      .then((response) => {
        console.info('response =', response)
        form.reset()
      })
      .catch((err) => console.error(err))
  }

  form.addEventListener('submit', handleSubmit)
}

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
        console.info('response =', response)
        loginForm.reset()
      })
      .catch((err) => console.error(err))
  }

  loginForm.addEventListener('submit', handleSubmit)
}

if (updateButton) {
  const data = JSON.stringify({
    id: '6599915dd16b272bc52ec2c6',
    role: 'admin',
  })

  const handleUserUpdate = () => {
    fetch(`${BASE_URL}/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then((response) => {
        console.info('response =', response)
        loginForm.reset()
      })
      .catch((err) => console.error(err))
  }

  updateButton.addEventListener('click', handleUserUpdate)
}

if (deleteButton) {
  const data = JSON.stringify({
    id: '659980aa7b8bf68b732eec29',
  })

  const handleUserDelete = () => {
    fetch(`${BASE_URL}/delete-user`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
      credentials: 'include',
    })
      .then((response) => {
        console.info('response =', response)
        loginForm.reset()
      })
      .catch((err) => console.error(err))
  }

  deleteButton.addEventListener('click', handleUserDelete)
}
