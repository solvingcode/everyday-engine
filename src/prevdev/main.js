import Application from '/src/app/core/Application.js'
import PreviewGameLoop from '/src/app/loop/PreviewGameLoop.js'
import * as __ from '/src/app/compiler/__.js'

window.__ = __

new Application([PreviewGameLoop]).start()