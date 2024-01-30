const logoutButton = document.getElementById('logout')

if (logoutButton) {
  const handleLogout = () => {
    localStorage.removeItem('token')
    location.reload()
  }

  logoutButton.addEventListener('click', handleLogout)
}
