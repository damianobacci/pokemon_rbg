import './style.css'

console.log("This is the entry file for the project")

const canvas = document.querySelector('canvas') as HTMLCanvasElement

// Canvas context, will allow us to operate with the Canvas API, it's shorted as "c" because we will call it many time
const c = canvas.getContext("2d")

console.log(c)

canvas.width = 1024
canvas.height = 576
console.log(canvas)
