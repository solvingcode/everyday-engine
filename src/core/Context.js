const rootCanvas = document.getElementById('root')
const objectCanvas = document.getElementById('object')
const rootContext = rootCanvas.getContext('2d')
const objectContext = objectCanvas.getContext('2d')

rootContext.canvas.width = WINDOW_WIDTH
rootContext.canvas.height = WINDOW_HEIGHT
objectContext.canvas.width = WINDOW_WIDTH
objectContext.canvas.height = WINDOW_HEIGHT