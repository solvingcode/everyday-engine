import SchemaMeta from './SchemaMeta.js'
import SystemError from '../exception/type/SystemError.js'

/**
 * @class {Schema}
 */
class Schema {
    /**
     * @param {string} prefix
     * @param {SchemaMeta} rootMeta
     * @returns {SchemaMeta}
     */
    static getMeta(prefix = '', rootMeta = null) {
        !rootMeta && (rootMeta = SchemaMeta)
        let resultMeta = {}
        for (let eMetaData in rootMeta) {
            if (rootMeta.hasOwnProperty(eMetaData)) {
                const {type, meta, prototype} = rootMeta[eMetaData]
                const metaPrefix = `${prefix}${eMetaData}`
                resultMeta[metaPrefix] = {
                    prototype: prototype || this.getPrototypeOf(type),
                    type: type || prototype
                }
                const subMeta = meta
                if (subMeta) {
                    resultMeta = Object.assign(resultMeta, this.getMeta(`${metaPrefix}.`, subMeta))
                }
            }
        }
        return resultMeta
    }

    /**
     * Get the prototype from the given type
     * @param {Class|string} type
     * @return {Class|string|null}
     */
    static getPrototypeOf(type) {
        let prototype = type
        if (!_.isString(type) && type !== Array) {
            prototype = this.findDataPrototypeOf(type)
            if (!prototype) {
                throw new SystemError(`${type.name} must extends Data type class!`)
            }
        }
        return prototype
    }

    /**
     * Find parent Data class
     * @param {Class} type
     * @return {Class|null}
     */
    static findDataPrototypeOf(type) {
        const prototype = Object.getPrototypeOf(type)
        if (prototype && prototype.name) {
            if (prototype.name.match(/^[a-zA-Z]+Data$/)) {
                return prototype
            } else {
                return this.findDataPrototypeOf(prototype)
            }
        }
        return null
    }

    /**
     * @param {string} path
     * @return {string}
     */
    static getParentPath(path) {
        const arrPath = path.split('.')
        if (arrPath.length) {
            arrPath.splice(arrPath.length - 1, 1)
            return arrPath.join('.')
        }
    }

    /**
     * @param {string} path
     * @return {string}
     */
    static getPathKey(path){
        const arrPath = path.split('.')
        if (arrPath.length) {
            return arrPath[arrPath.length - 1]
        }
    }
}

export default Schema