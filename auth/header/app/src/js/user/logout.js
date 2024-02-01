const logoutButton = document.getElementById('logout')

if (logoutButton) {
  const handleLogout = () => {
    localStorage.removeItem('token')
    location.replace('/')
  }

  logoutButton.addEventListener('click', handleLogout)
}
