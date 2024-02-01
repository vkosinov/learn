import { handleError } from '../utils/handle-error'
import { renderComments } from './render-comments'

export const createGetComments = (axiosInstance) => {
  const commentsBlock = document.getElementById('comments')

  const handleGetComments = () => {
    axiosInstance('get-comments')
      .then(({ data }) => {
        renderComments(data.comments)
      })
      .catch((err) => handleError(err))
  }

  if (commentsBlock) {
    document.addEventListener('DOMContentLoaded', handleGetComments)
  }
}
