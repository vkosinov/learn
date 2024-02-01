import { v4 as uuidv4 } from 'uuid'

const alert = document.getElementById('alert')

export const handleSuccess = (res) => {
  const id = uuidv4()

  if (alert && res) {
    alert.innerHTML = `
    <div class="alert alert-success" role="alert" id="${id}">
    ${res?.response?.data?.message ?? res.message}
    </div>`
  }
}
