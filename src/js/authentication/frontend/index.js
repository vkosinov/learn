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
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
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
    id: '65991c9dc38e1a667c5139fd',
    role: 'admin',
  })

  const handleUserUpdate = () => {
    fetch(`${BASE_URL}/update`, {
      method: 'POST',
      mode: 'cors',
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
    id: '65991bba1ce0027092bef7bb',
  })

  const handleUserDelete = () => {
    fetch(`${BASE_URL}/delete-user`, {
      method: 'DELETE',
      mode: 'cors',
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

  deleteButton.addEventListener('click', handleUserDelete)
}
