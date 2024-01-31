import { axiosInstance } from '../utils/axios-instance'
import { handleError } from 'utils/handle-error'

const logoutButton = document.getElementById('logout')

if (logoutButton) {
  const handleLogout = () => {
    axiosInstance
      .post('logout')
      .then(location.assign('/'))
      .catch((err) => {
        handleError(err)
      })
  }

  logoutButton.addEventListener('click', handleLogout)
}
