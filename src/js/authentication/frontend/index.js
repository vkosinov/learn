const form = document.getElementById('form')

if (form) {
  const handleSubmit = (evt) => {
    evt.preventDefault()

    const data = new FormData(form)

    fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      body: data,
    }).then((response) => response.json())
  }

  form.addEventListener('submit', handleSubmit)
}
