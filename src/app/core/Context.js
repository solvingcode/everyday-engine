import {SCENE_WIDTH, SCENE_HEIGHT} from './Constant.js'

export const objectCanvas = document.getElementById('object')
export const objectContext = objectCanvas.getContext('2d')

objectContext.canvas.width = SCENE_WIDTH
objectContext.canvas.height = SCENE_HEIGHT