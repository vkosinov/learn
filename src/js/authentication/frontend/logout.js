import BASE_URL from './constants'

const logoutButton = document.getElementById('logout')

if (logoutButton) {
  const handleLogout = () => {
    fetch(`${BASE_URL}/logout`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
    })
      .then(location.assign('/'))
      .catch((err) => {
        handleError(err)
      })
  }

  logoutButton.addEventListener('click', handleLogout)
}
