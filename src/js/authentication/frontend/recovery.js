import BASE_URL from './constants'
import handleError from './handle-error'
import handleSuccess from './handle-success'

const recoveryForm = document.getElementById('recovery')

if (recoveryForm) {
  const handleSubmit = (evt) => {
    evt.preventDefault()

    const formData = new FormData(recoveryForm)

    const email = formData.get('email')

    const data = JSON.stringify({ email })

    fetch(`${BASE_URL}/recovery`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
      credentials: 'include',
    })
      .then((response) => {
        response.json().then((res) => {
          if (!response.ok) {
            handleError(res)
          } else {
            handleError()
            handleSuccess({
              message: `<a href="/reset.html?id=${res.id}&token=${res.token}">Ссылка отправленная на email</a>`,
            })
          }
        })

        recoveryForm.reset()
      })
      .catch((err) => {
        handleError(err)
      })
  }

  recoveryForm.addEventListener('submit', handleSubmit)
}
