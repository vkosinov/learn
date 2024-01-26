import BASE_URL from './constants'
import handleError from './handle-error'

const users = document.getElementById('users')

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
      response.json().then((res) => {
        if (!response.ok) {
          handleError(res)
        } else {
          users.innerHTML = ''
          handleGetUsers()
        }
      })
    })
    .catch((err) => handleError(err))
}

const handleGetUsers = () => {
  fetch(`${BASE_URL}/get-users`, { credentials: 'include' }).then((result) => {
    result
      .json()
      .then((data) => {
        if (result.ok) {
          data.user.forEach((user) => {
            users.innerHTML += `
        <tr>
          <td>${user.username}</td>
          <td>${user.role}</td>
          <td>${user.email}</td>
          <td>
            <button data-id=${user.id} class="delete">delete</button>
          </td>
        </tr>`
          })

          const deleteButtons = document.querySelectorAll('.delete')

          if (deleteButtons.length > 0) {
            deleteButtons.forEach((deleteButton) => {
              deleteButton.addEventListener('click', handleUserDelete)
            })
          }
        } else {
          handleError(data)
        }
      })
      .catch((err) => handleError(err))
  })
}

if (users) {
  window.addEventListener('load', handleGetUsers)
}
