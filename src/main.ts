import './style.css'

console.log("This is the entry file for the project")

const canvas = document.querySelector('canvas') as HTMLCanvasElement

// Canvas context, will allow us to operate with the Canvas API, it's shorted as "c" because we will call it many time
const c = canvas.getContext("2d") as CanvasRenderingContext2D

canvas.width = 1024
canvas.height = 576
console.log(canvas)

const image : HTMLImageElement = new Image()
image.src = "./images/maps/test.png"
console.log(image)

image.onload = () => {
  const scaleFactor = 4
  c.scale(scaleFactor, scaleFactor)
  c.imageSmoothingEnabled = false
  c.drawImage(image, -200, -120)
  c.setTransform(1, 0, 0, 1, 0, 0)
}