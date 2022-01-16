import SerDe from './SerDe.js'

/**
 * @class {XmlSerDe}
 * @extends {SerDe}
 */
class XmlSerDe extends SerDe {

    /**
     * @override
     */
    serialize(data, key) {
        const xmlSerializer = new XMLSerializer()
        const root = document.implementation.createDocument('', '', null)
        const dataNode = this.exportData(key, data, root)
        root.appendChild(dataNode)
        return xmlSerializer.serializeToString(root)
    }

    /**
     * @override
     */
    deserialize(data, key) {
        const parser = new DOMParser()
        const node = parser.parseFromString(data, 'application/xml')
        return this.importData(key, node.documentElement)
    }

    /**
     * @private
     * @param {string} key
     * @param {HTMLElement|ChildNode} node
     * @return {Map<string, *>}
     */
    importData(key, node) {
        const isArray = key === 'element'
        let data = {}
        const attributes = node.attributes
        for (let nodeAttr in attributes) {
            if (attributes.hasOwnProperty(nodeAttr)) {
                const attribute = attributes[nodeAttr].name
                const attrValue = attributes[attribute].nodeValue
                if(attribute === 'value'){
                    data = attrValue
                }else{
                    data[attribute] = attrValue
                }
            }
        }
        node.childNodes.forEach(cNode => {
            const subObject = this.importData(cNode.nodeName, cNode)
            if (subObject) {
                if (_.isArray(subObject)) {
                    data = !Object.keys(data).length ? [] : data
                    data = data.concat(subObject)
                } else {
                    data = Object.assign(data, subObject)
                }
            }
        })
        return isArray ? [data] : {[key]: data}
    }

    /**
     * @private
     * @param {string} key
     * @param {Object|Array|number|string} data
     * @param {Document} root
     *
     * @returns {HTMLElement}
     */
    exportData(key, data, root) {
        const isArray = _.isArray(data)
        if (_.isObject(data) || _.isArray(data)) {
            const node = root.createElement(key)
            for (let iData in data) {
                if (data.hasOwnProperty(iData)) {
                    const pKey = isArray ? 'element' : iData
                    const pValue = data[iData]
                    const subNode = this.exportData(pKey, pValue, root)
                    if (subNode) {
                        node.appendChild(subNode)
                    } else {
                        if (pValue !== null && pValue !== undefined) {
                            node.setAttribute(pKey, pValue)
                        }
                    }
                }
            }
            return node
        }else if(key === 'element'){
            const node = root.createElement(key)
            node.setAttribute('value', data)
            return node
        }
        return null
    }

}

export default XmlSerDe