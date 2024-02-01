const logoutButton = document.getElementById('logout')
import { axiosInstance } from '../utils/axios-instance'
import { handleError } from 'utils/handle-error'

if (logoutButton) {
  const handleLogout = () => {
    axiosInstance
      .post('logout')
      .then(() => {
        location.replace('/')
      })
      .catch(handleError)
  }

  logoutButton.addEventListener('click', handleLogout)
}
