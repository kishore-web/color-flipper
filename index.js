let body = document.querySelector("body");
let button = document.querySelector("#btn")

body.addEventListener("click", ()=> {
  const newColor = rgbColor()
  body.style.backgroundColor = newColor
  button.innerText = newColor 
  
})
const rgbColor = () => {
  let r =  Math.floor(Math.random()*256)
  let g =  Math.floor(Math.random()*256)
  let b =  Math.floor(Math.random()*256)
  return `rgb(${r},${g},${b})`
}