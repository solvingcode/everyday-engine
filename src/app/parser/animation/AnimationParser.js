import Parser from '../Parser.js'
import StorageHelper from '../../utils/StorageHelper.js'
import * as StorageConstant from '../../constant/StorageConstant.js'

export default class AnimationParser extends Parser {

    /**
     * @param {Document} xmlDocument
     * @param {Storage} storage
     * @return {Promise<Animation>}
     */
    static async parse(xmlDocument, storage) {
        const stringData = (new XMLSerializer()).serializeToString(xmlDocument)
        return StorageHelper.parseXml(StorageConstant.type.ANIMATIONS, stringData, storage)
    }

    /**
     * @param {Document} xmlDocument
     * @param {string} newName
     */
    static rename(xmlDocument, newName) {
        const xmlNode = xmlDocument.documentElement
        xmlNode.setAttribute('name', newName)
    }

}