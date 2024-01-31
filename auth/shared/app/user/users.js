import { handleError } from '../utils/handle-error'
import { createHandleAddEventListenerDelete } from './delete'

export const createGetUsers = (axiosInstance) => {
  const users = document.getElementById('users')
  const handleAddEventListenerDelete =
    createHandleAddEventListenerDelete(axiosInstance)

  const createUserTable = (data) => {
    let tableBody = ``

    data.forEach(
      (user) =>
        (tableBody += `
    <tr>
      <td>${user.username}</td>
      <td>${user.role}</td>
      <td>${user.email ?? '-'}</td>
      <td>
      <button class='btn btn-danger' data-delete data-id='${user.id}'>
      Удалить
      </button>
      <td>
    </tr>`)
    )

    users.innerHTML = `<table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Логин</th>
        <th scope="col">Роль</th>
        <th scope="col">Email</th>
        <th scope="col">Действия</th>
      </tr>
    </thead>

    <tbody>
    ${tableBody}
    </tbody>
  </table>
  `
  }

  const handleGetUsers = () => {
    axiosInstance('users')
      .then(({ data }) => {
        createUserTable(data.users)
        handleAddEventListenerDelete(handleGetUsers)
      })
      .catch(handleError)
  }

  if (users) {
    window.addEventListener('load', handleGetUsers)
  }
}
