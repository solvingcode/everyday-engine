import Application from '../app/core/Application.js'
import PreviewGameLoop from '../app/loop/PreviewGameLoop.js'
import * as __ from '../app/compiler/__.js'

window.EEClass = {}
window.__ = __

new Application([PreviewGameLoop]).start()