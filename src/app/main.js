'use strict'

import Application from './core/Application.js'
import Scene from './loop/Scene.js'
import Setup from './loop/Setup.js'

new Application([Setup, Scene]).start()