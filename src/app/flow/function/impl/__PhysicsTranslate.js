import World from '../../../world/World.js'
import TransformHelper from '../../../utils/TransformHelper.js'

export default function (target, moveVector) {
    TransformHelper.translate(World.get(), target, moveVector)
}