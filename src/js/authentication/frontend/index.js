const form = document.getElementById('form')
const baseUrl = 'http://localhost:5000/api/auth'

if (form) {
  const handleSubmit = (evt) => {
    evt.preventDefault()

    const formData = new FormData(form)

    const username = formData.get('username')
    const password = formData.get('password')

    const data = JSON.stringify({ username, password })

    console.info('data = ', data)

    fetch(`${baseUrl}/register`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then((response) => console.info('response =', response))
      .catch((err) => console.error(err))
  }

  form.addEventListener('submit', handleSubmit)
}
