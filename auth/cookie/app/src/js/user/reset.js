import { handleSuccess } from 'utils/handle-success'
import { handleError } from 'utils/handle-error'
import { axiosInstance } from '../utils/axios-instance'

const resetForm = document.getElementById('reset')

if (resetForm) {
  const handleSubmit = (evt) => {
    evt.preventDefault()

    const formData = new FormData(resetForm)

    const password = formData.get('password')
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get('token')
    const id = urlParams.get('id')

    const params = { password, token, id }

    axiosInstance
      .post('reset', params)
      .then(({ data }) => {
        handleSuccess(data)

        setTimeout(() => {
          location.assign('/')
        }, 1000)

        resetForm.reset()
      })
      .catch(handleError)
  }

  resetForm.addEventListener('submit', handleSubmit)
}
