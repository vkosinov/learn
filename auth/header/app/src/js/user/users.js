import { handleError } from '../utils/handle-error'
import instance from '../utils/instance'

const users = document.getElementById('users')

const handleUserDelete = (evt) => {
  const { id } = evt.target.dataset

  instance
    .delete('delete-user', { data: { id } })
    .then(() => {
      users.innerHTML = ''
      handleGetUsers()
    })
    .catch((err) => handleError(err))
}

const handleGetUsers = () => {
  instance
    .get('get-users')
    .then(({ data }) => {
      data.users.forEach((user) => {
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
    })
    .catch((err) => handleError(err))
}

if (users) {
  window.addEventListener('load', handleGetUsers)
}
