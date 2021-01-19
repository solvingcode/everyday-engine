const objectCanvas = document.getElementById('object')
const objectContext = objectCanvas.getContext('2d')

objectContext.canvas.width = SCENE_WIDTH
objectContext.canvas.height = SCENE_HEIGHT
objectContext.canvas.style = `left: ${SCENE_POSITION_X}px; top: ${SCENE_POSITION_Y}px`