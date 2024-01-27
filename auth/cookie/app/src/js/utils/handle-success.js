import { v4 as uuidv4 } from 'uuid'

const alert = document.getElementById('alert')

export const handleSuccess = ({ message }) => {
  const id = uuidv4()

  if (alert && message) {
    alert.innerHTML = `
    <div class="alert alert-success" role="alert" id="${id}">
    ${message}
    </div>`
  }
}
