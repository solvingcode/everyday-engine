import Window from '../../../core/Window.js'

export default function (key) {
    const keyboard = Window.get().keyboard
    return keyboard.isKeyPressed(key)
}