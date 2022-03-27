import DynamicAttributeHelper from '../../../utils/DynamicAttributeHelper.js'

export default function (attributes, name) {
    const attribute = DynamicAttributeHelper.get(attributes, name)
    return attribute.getAttrValue()
}