import Application from '../app/core/Application.js'
import RunGame from '../app/loop/RunGame.js'
import * as __ from '../app/compiler/__.js'
import UnitActor from '../app/compiler/UnitActor.js'
import UnitAnimator from '../app/compiler/UnitAnimator.js'

window.EEClass = {}
window.UnitActor = UnitActor
window.UnitAnimator = UnitAnimator
window.__ = __

new Application([RunGame]).start()