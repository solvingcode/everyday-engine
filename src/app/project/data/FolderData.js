import Data from './Data.js'

/**
 * @abstract
 * @extends {Data}
 */
export default class FolderData extends Data {

    id
    name
    folderId

    /**
     * @param {number} id
     */
    setId(id) {
        this.id = id
    }

    /**
     * @return {number|null}
     */
    getId() {
        return this.id
    }

    /**
     * @param {string} name
     */
    setName(name) {
        this.name = name
    }

    /**
     * @return {string}
     */
    getName() {
        return this.name
    }

    /**
     * @param {number} folderId
     */
    setFolderId(folderId){
        this.folderId = folderId
    }

    /**
     * @return {number}
     */
    getFolderId(){
        return this.folderId
    }

}