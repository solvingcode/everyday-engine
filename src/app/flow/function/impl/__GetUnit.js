import World from '../../../world/World.js'
import ClientError from '../../../exception/type/ClientError.js'

export default function (name) {
    const unit = World.get().findUnitByName(name)
    if (!unit) {
        throw new ClientError(`GetUnit: ${name} not found`)
    }
    return unit
}