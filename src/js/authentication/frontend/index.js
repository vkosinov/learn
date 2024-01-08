const form = document.getElementById('form')
const loginForm = document.getElementById('login')
const updateButton = document.getElementById('update')

const errorBlock = document.getElementById('error')
const users = document.getElementById('users')

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
        response.json().then((res) => {
          if (!response.ok) {
            if (errorBlock) {
              errorBlock.textContent = `${res.message}. ${
                res.error ? res.error : ''
              }`
            }
          } else {
            location.assign('/users.html')
          }
        })

        loginForm.reset()
      })
      .catch((err) => {
        if (errorBlock) {
          errorBlock.textContent = err
        }
      })
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

if (users) {
  const handleGetUsers = () => {
    fetch(`${BASE_URL}/get-users`).then((result) => {
      result.json().then((data) => {
        data.user.forEach((user) => {
          users.innerHTML += `
          <tr>
            <td>${user.username}</td>
            <td>${user.role}</td>
            <td>
              <button data-id=${user.id} class="delete">delete</button>
            </td>
          </tr>`
        })

        const deleteButtons = document.querySelectorAll('.delete')

        if (deleteButtons.length > 0) {
          const handleUserDelete = (evt) => {
            const { id } = evt.target.dataset

            const deleteData = JSON.stringify({
              id,
            })

            fetch(`${BASE_URL}/delete-user`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
              body: deleteData,
              credentials: 'include',
            })
              .then((response) => {
                console.info('response =', response)
                loginForm.reset()
              })
              .catch((err) => console.error(err))
          }

          deleteButtons.forEach((deleteButton) => {
            deleteButton.addEventListener('click', handleUserDelete)
          })
        }
      })
    })
  }

  window.addEventListener('load', handleGetUsers)
}
