import BASE_URL from './constants'
import { escapeHTML } from './escape'
import handleError from './handle-error'
import handleSuccess from './handle-success'

const commentsBlock = document.getElementById('comments')
const commentForm = document.getElementById('comment-form')

if (commentForm) {
  const handleSubmit = (evt) => {
    evt.preventDefault()

    const formData = new FormData(commentForm)

    const content = formData.get('content')

    const data = JSON.stringify({ content })

    fetch(`${BASE_URL}/add-comment`, {
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
            handleSuccess(res)
            renderComments([res.comment])
          }
        })

        commentForm.reset()
      })
      .catch((err) => {
        handleError(err)
      })
  }

  commentForm.addEventListener('submit', handleSubmit)
}

const handleGetComments = () => {
  fetch(`${BASE_URL}/get-comments`, { credentials: 'include' }).then(
    (result) => {
      result
        .json()
        .then((data) => {
          if (result.ok) {
            renderComments(data.comments)
          } else {
            handleError(data)
          }
        })
        .catch((err) => handleError(err))
    }
  )
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
    <p><b>Контент:</b> ${escapeHTML(comment.content)}</p>
    <p><b>id:</b> ${comment.id}</p>
  </div><hr />`
    })
  }
}
