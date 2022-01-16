import Data from './Data.js'
import ClientError from '../../exception/type/ClientError.js'
import Tag from '../../preference/tag/Tag.js'

export default class TagPreferenceData extends Data {

    /**
     * @type {Tag[]}
     */
    tags

    constructor() {
        super()
        this.tags = []
    }

    /**
     * @param {Tag[]} tags
     */
    setTags(tags) {
        this.tags = tags
    }

    /**
     * @param {string} name
     * @return {Tag}
     */
    addTag(name) {
        if (this.findByName(name)) {
            throw new ClientError(`Tag "${name}" already created`)
        }
        return this.add(name)
    }

    /**
     * @param {string} name
     * @return {Tag}
     */
    tryAddTag(name) {
        if (!this.findByName(name)) {
            return this.add(name)
        }
    }

    /**
     * @private
     * @param {string} name
     * @return {Tag}
     */
    add(name) {
        const tag = new Tag(name)
        this.tags.push(tag)
        return tag
    }

    /**
     * @param {number} id
     * @return {Tag}
     */
    find(id) {
        return this.tags.find(tag => tag.getId() === id)
    }

    /**
     * @param {string} name
     * @return {Tag}
     */
    findByName(name) {
        return this.tags.find(tag => tag.getName() === name)
    }

    /**
     * @param {Tag} tag
     */
    delete(tag) {
        const index = this.getTags().findIndex((element) => element === tag)
        if (index >= 0) {
            return this.getTags().splice(index, 1)
        } else {
            throw new ClientError(`Tag "${tag.getName()}" not found!`)
        }
    }

    /**
     * @return {Tag[]}
     */
    getTags() {
        return this.tags
    }

    /**
     * @param {Tag[]} tags
     */
    concatTags(tags) {
        this.concat(
            this.tags,
            tags,
            (tItem, sItem) => tItem.getName() === sItem.getName()
        )
    }

}