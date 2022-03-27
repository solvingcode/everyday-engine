'use strict'

import Application from './core/Application.js'
import SceneLoop from './loop/SceneLoop.js'
import SetupLoop from './loop/SetupLoop.js'

window.EEClass = {}

new Application([SetupLoop, SceneLoop]).start()