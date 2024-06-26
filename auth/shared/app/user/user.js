import { handleError } from '../utils/handle-error'

export const createGetUser = (axiosInstance) => {
  const userBlock = document.getElementById('user')
  const logout = document.getElementById('logout')

  const handleGetUser = () => {
    if (
      location.pathname === '/' ||
      location.pathname === '/user' ||
      location.pathname === '/users'
    ) {
      axiosInstance('user')
        .then(({ data }) => {
          if (logout) {
            logout.classList.remove('hidden')

            if (location.pathname === '/') {
              location.assign('/user')
            }
          }

          renderUser(data.user)
        })
        .catch((err) => console.error(err.message))
    }
  }

  document.addEventListener('DOMContentLoaded', handleGetUser)

  const renderUser = (user) => {
    if (!user) {
      userBlock.innerHTML = ``
      return
    }

    if (userBlock) {
      userBlock.innerHTML = `
    <li class="list-group-item"><b>username:</b> ${user.username}</li>
    <li class="list-group-item"><b>id:</b> ${user.id}</li>
    <li class="list-group-item"><b>email:</b> ${user.email ?? '-'}</li>
    <li class="list-group-item"><b>role:</b> ${user.role}</li>
    `
    }
  }
}
