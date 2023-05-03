let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')
let pmamEl = document.getElementById('pmam')

function updateSaat() {
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let pmam = 'AM'

  if (h > 12) {
    h = h - 12
    pmam = 'PM'
  }

  h = h < 10 ? '0' + h : h
  m = m < 10 ? '0' + m : m
  s = s < 10 ? '0' + s : s

  hour.innerText = h
  minute.innerText = m
  second.innerText = s
  pmamEl.innerText = pmam

  setTimeout(() => {
    updateSaat()
  }, 1000)
}
updateSaat()
