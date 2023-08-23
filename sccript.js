function copyTelefono() {
    navigator.clipboard.writeText('+34647163825')
  .then(() => {
    console.log('Texto copiado al portapapeles')
  })
  .catch(err => {
    console.error('Error al copiar al portapapeles:', err)
  })
}

function copyCorreo() {
    navigator.clipboard.writeText('calitcam@gmail.com')
  .then(() => {
    console.log('Texto copiado al portapapeles')
  })
  .catch(err => {
    console.error('Error al copiar al portapapeles:', err)
  })
}