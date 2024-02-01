import { handleError } from '../utils/handle-error'
import { handleSuccess } from '../utils/handle-success'
import { renderComments } from './render-comments'

export const createAddComment = (axiosInstance) => {
  const commentForm = document.getElementById('comment-form')

  if (commentForm) {
    const handleSubmit = (evt) => {
      evt.preventDefault()

      const formData = new FormData(commentForm)

      const content = formData.get('content')

      axiosInstance
        .post('add-comment', { content })
        .then(({ data }) => {
          handleSuccess(data)
          renderComments([data.comment])

          commentForm.reset()
        })
        .catch((err) => {
          handleError(err)
        })
    }

    commentForm.addEventListener('submit', handleSubmit)
  }
}
