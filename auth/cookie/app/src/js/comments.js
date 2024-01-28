import { handleError } from './utils/handle-error'
import { handleSuccess } from './utils/handle-success'
import { axiosInstance } from './utils/axios-instance'

const commentsBlock = document.getElementById('comments')
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

const renderComments = (comments) => {
  if (!comments) {
    commentsBlock.innerHTML = ``
    return
  }

  if (commentsBlock) {
    comments.forEach((comment) => {
      commentsBlock.innerHTML += `
  <div class="card mb-4">
      <div class="card card-header">
        <div class="row">
          <div class="col">
            Дата:</b> ${new Date(comment.createdAt).toLocaleDateString()}
          </div>

          <div class="col">id:</b> ${comment.id}</div>
        </div>
      </div>

      <div class="card-body">
      ${comment.content}
      </div>
  </div>`
    })
  }
}
