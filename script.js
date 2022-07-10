const bars = document.querySelectorAll('.bars-div')
const heightDisplay = document.querySelector('.bars-height')

let [mon, tue, wed, thu, fri, sat, sun] = [
  17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48,
]

bars.forEach((bar) => {
  bar.addEventListener('click', () => {
    removeActiveClasses()
    bar.classList.add('show')
  })
})

function removeActiveClasses() {
  bars.forEach((bar) => {
    bar.classList.remove('show')
  })
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const updateHeight = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

document.querySelector('.mon').style.height = `${updateHeight(
  mon,
  10,
  55,
  1,
  15
)}rem`
document.querySelector('.tue').style.height = `${updateHeight(
  tue,
  10,
  55,
  1,
  15
)}rem`
document.querySelector('.wed').style.height = `${updateHeight(
  wed,
  10,
  55,
  1,
  15
)}rem`
document.querySelector('.thu').style.height = `${updateHeight(
  thu,
  10,
  55,
  1,
  15
)}rem`
document.querySelector('.fri').style.height = `${updateHeight(
  fri,
  10,
  55,
  1,
  15
)}rem`
document.querySelector('.sat').style.height = `${updateHeight(
  sat,
  10,
  55,
  1,
  15
)}rem`
document.querySelector('.sun').style.height = `${updateHeight(
  sun,
  10,
  55,
  1,
  15
)}rem`
