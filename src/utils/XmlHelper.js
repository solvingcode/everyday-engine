define(function () {

    /**
     * @class {XmlHelper}
     */
    class XmlHelper {

        /**
         * @param {Map<string, *>} data
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
                            node.setAttribute(pKey, pValue)
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