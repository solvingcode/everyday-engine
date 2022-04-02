import ClientError from '../../../exception/type/ClientError.js'

export default function (target, name) {
    const unit = target
    const componentName = name
    const component = unit.findComponentByName(componentName)
    if (!component) {
        throw new ClientError(`${this.getName()}: ${componentName} not found`)
    }
    return component
}