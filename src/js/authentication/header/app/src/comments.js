import { escapeHTML } from './utils/escape'
import handleError from './utils/handle-error'
import handleSuccess from './utils/handle-success'
import instance from './utils/instance'

const commentsBlock = document.getElementById('comments')
const commentForm = document.getElementById('comment-form')

if (commentForm) {
  const handleSubmit = (evt) => {
    evt.preventDefault()

    const formData = new FormData(commentForm)

    const content = formData.get('content')

    const params = { content }

    instance
      .post('add-comment', params)
      .then(({ data }) => {
        handleError()
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

const handleGetComments = () => {
  instance
    .get('get-comments')
    .then(({ data }) => {
      renderComments(data.comments)
    })
    .catch((err) => handleError(err))
}

if (commentsBlock) {
  document.addEventListener('DOMContentLoaded', handleGetComments)
}

const renderComments = (comments) => {
  if (!comments) {
    commentsBlock.innerHTML = ``
    return
  }

  if (commentsBlock) {
    comments.forEach((comment) => {
      commentsBlock.innerHTML += `
  <div>
    <p><b>Дата:</b> ${new Date(comment.createdAt).toLocaleDateString()}</p>
    <p><b>Контент:</b> ${comment.content}</p>
    <p><b>id:</b> ${comment.id}</p>
  </div><hr />`
    })
  }
}
