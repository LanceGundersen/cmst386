const modal = document.getElementById('myModal')
const span = document.getElementsByClassName('close')[0]

window.setTimeout(() => {
  modal.style.display = 'block'
}, 1000)

span.onclick = function() {
  modal.style.display = 'none'
}
