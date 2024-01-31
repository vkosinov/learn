import { handleError } from '../utils/handle-error'
import { handleSuccess } from '../utils/handle-success'

export const createRecoveryPassword = (axiosInstance) => {
  const recoveryForm = document.getElementById('recovery')

  if (recoveryForm) {
    const handleSubmit = (evt) => {
      evt.preventDefault()

      const formData = new FormData(recoveryForm)

      const email = formData.get('email')

      const params = { email }

      axiosInstance
        .post('recovery', params)
        .then(({ data }) => {
          handleSuccess({
            message: `
          <p>
            Ссылка на сброс пароля:
            <a href="/reset?id=${data.id}&token=${data.token}">Изменить пароль</a>
          </p>`,
          })

          recoveryForm.reset()
        })
        .catch((err) => {
          handleError(err)
        })
    }

    recoveryForm.addEventListener('submit', handleSubmit)
  }
}
