import World from '../../../world/World.js'
import AssetType from '../AssetType.js'
import AssetAnimationXmlGenerator from '../../../generator/animation/AssetAnimationXmlGenerator.js'
import FileHelper from '../../../utils/FileHelper.js'

export default class AssetAnimationXml extends AssetType {

    /**
     * @type {Document}
     */
    data

    /**
     * @type {string}
     */
    error

    constructor() {
        super()
        this.data = null
    }

    /**
     * @override
     */
    async load(data, asset) {
        return new Promise(resolve => {
            this.setDataUrl(data)
            const animation = this.parse()
            asset.setName(animation.getName())
            resolve(animation)
        })
    }

    /**
     * @override
     */
    open(asset, options) {
        const animationManager = World.get().getAnimationManager()
        animationManager.openEditing(asset)
    }

    /**
     * @return {Animation}
     */
    parse() {
        return World.get().getAnimationManager().load(this.data)
    }

    /**
     * @override
     */
    export(asset) {
        FileHelper.save(this.getDataUrl(), FileHelper.type.XML, asset.getName())
    }

    /**
     * @override
     * @param {Animation} animation
     * @param {Asset} asset
     */
    async generate(animation, asset) {
        const data = AssetAnimationXmlGenerator.get().generate(animation)
        await this.setDataUrl(data)
    }

    /**
     * @override
     */
    rename(oldName, newName) {
        if(this.data){
            const animationManager = World.get().getAnimationManager()
            const oldAnimation = animationManager.findByName(oldName)
            if (oldAnimation) {
                animationManager.delete(oldAnimation)
            }
            animationManager.rename(this.data, newName)
            this.parse()
        }
    }

    /**
     * @override
     * @param {Document} data
     */
    setData(data) {
        this.data = data
    }

    /**
     * @override
     * @return {Document}
     */
    getData() {
        return this.data
    }

    /**
     * @param {string} error
     */
    setError(error) {
        this.error = error
    }

    /**
     * @return {string}
     */
    getError() {
        return this.error
    }

    /**
     * @override
     */
    async setDataUrl(dataUrl) {
        const parser = new DOMParser()
        const doc = parser.parseFromString(dataUrl, 'application/xml')
        if (doc.documentElement.tagName === 'html') {
            this.setError(`Animation XML Parser: ${doc.documentElement.textContent}`)
        } else {
            this.setError('')
            this.data = doc
        }
    }

    /**
     * @override
     */
    getDataUrl() {
        return (new XMLSerializer()).serializeToString(this.data)
    }

    /**
     * @override
     */
    validate(data) {
        return true
    }
}