import World from '../../../world/World.js'

export default function (position) {
    return World.get().getCamera().toCanvasCoord(position)
}