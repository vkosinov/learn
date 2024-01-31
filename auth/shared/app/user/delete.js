import { handleError } from '../utils/handle-error'
import { handleSuccess } from '../utils/handle-success'

export const createHandleAddEventListenerDelete =
  (axiosInstance) => (callback) => {
    const buttons = document.querySelectorAll('[data-delete')

    if (buttons.length > 0) {
      buttons.forEach((button) => {
        button.addEventListener(
          'click',
          handleUserDelete(axiosInstance, callback)
        )
      })
    }
  }

const handleUserDelete = (axiosInstance, callback) => (evt) => {
  const { id } = evt.target.dataset

  axiosInstance
    .delete('delete-user', { data: { id } })
    .then(({ data }) => {
      handleSuccess(data)

      if (callback) {
        callback()
      }
    })
    .catch(handleError)
}
