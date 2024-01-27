import BASE_URL from './utils/constants'

const updateButton = document.getElementById('update')

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
      })
      .catch((err) => console.error(err))
  }

  updateButton.addEventListener('click', handleUserUpdate)
}
