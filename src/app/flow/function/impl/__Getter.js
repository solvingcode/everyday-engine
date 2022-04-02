import ClassHelper from '../../../utils/ClassHelper.js'

export default function (target, property) {
    const getterString = ClassHelper.getGetter(target, property)
    return target[getterString]()
}