import { v4 as uuidv4 } from 'uuid'

const alert = document.getElementById('alert')

export const handleError = ({ message }) => {
  const id = uuidv4()

  if (alert && message) {
    alert.innerHTML = `
    <div class="alert alert-danger" role="alert" id="${id}">
    ${message}
    </div>`
  }
}
