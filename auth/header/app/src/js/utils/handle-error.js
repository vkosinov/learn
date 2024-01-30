import { v4 as uuidv4 } from 'uuid'

const alert = document.getElementById('alert')

export const handleError = (response) => {
  const id = uuidv4()

  if (alert && response) {
    alert.innerHTML = `
    <div class="alert alert-danger" role="alert" id="${id}">
    ${response?.data?.message ?? response.message}
    </div>`
  }
}
