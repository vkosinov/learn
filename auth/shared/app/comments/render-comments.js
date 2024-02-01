export const renderComments = (comments) => {
  const commentsBlock = document.getElementById('comments')

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
