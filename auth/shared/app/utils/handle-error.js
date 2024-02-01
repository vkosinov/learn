import { v4 as uuidv4 } from 'uuid'

const alert = document.getElementById('alert')

export const handleError = (res) => {
  const id = uuidv4()

  if (alert && res) {
    alert.innerHTML = `
    <div class="alert alert-danger" role="alert" id="${id}">
    ${res?.response?.data?.message ?? res.message}
    </div>`
  }
}
