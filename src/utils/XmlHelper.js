define(function () {

    /**
     * @class {XmlHelper}
     */
    class XmlHelper {

        /**
         * @param {Object} data
         * @returns {string}
         */
        static export(data) {
            if (_.isArray(data)) {
                throw new TypeError('Data to export as XML must be an Object')
            }
            const xmlSerializer = new XMLSerializer()
            const root = document.implementation.createDocument('', '', null)
            const dataNode = this.exportData('project', data, root)
            root.appendChild(dataNode)
            return xmlSerializer.serializeToString(root)
        }

        /**
         * @param {string} data
         * @returns {Map<string, *>}
         */
        static import(data) {
            if (_.isArray(data)) {
                throw new TypeError('Data to export as XML must be an Object')
            }
            const parser = new DOMParser()
            const node = parser.parseFromString(data, 'application/xml')
            return this.importData('project', node.documentElement)
        }

        /**
         * @param {string} key
         * @param {HTMLElement|ChildNode} node
         */
        static importData(key, node){
            const isArray = key === 'element'
            let data = {}
            const attributes = node.attributes
            for(let nodeAttr in attributes){
                if(attributes.hasOwnProperty(nodeAttr)){
                    const attribute = attributes[nodeAttr].name
                    data[attribute] = attributes[attribute].nodeValue
                }
            }
            node.childNodes.forEach(cNode => {
                const subObject = this.importData(cNode.nodeName, cNode)
                if(subObject){
                    if(_.isArray(subObject)){
                        data = !Object.keys(data).length ? [] : data
                        data = data.concat(subObject)
                    }else{
                        data = Object.assign(data, subObject)
                    }
                }
            })
            return isArray ? [data] : {[key]: data}
        }

        /**
         * @param {string} key
         * @param {Object|Array} data
         * @param {Document} root
         *
         * @returns {HTMLElement}
         */
        static exportData(key, data, root) {
            const isArray = _.isArray(data)
            if(_.isObject(data) || _.isArray(data)) {
                const node = root.createElement(key)
                for (let iData in data) {
                    if (data.hasOwnProperty(iData)) {
                        const pKey = isArray ? 'element' : iData
                        const pValue = data[iData]
                        const subNode = this.exportData(pKey, pValue, root)
                        if (subNode) {
                            node.appendChild(subNode)
                        } else {
                            pValue !== null && node.setAttribute(pKey, pValue)
                        }
                    }
                }
                return node
            }
            return null
        }

    }

    return XmlHelper

})