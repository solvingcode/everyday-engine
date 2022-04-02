import TransformHelper from '../../../utils/TransformHelper.js'
import World from '../../../world/World.js'

export default function (target, moveVector) {
    TransformHelper.translate(World.get(), target, moveVector)
}