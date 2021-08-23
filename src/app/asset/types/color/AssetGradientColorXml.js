import AssetType from '../AssetType.js'
import GradientColorParser from '../../../parser/color/GradientColorParser.js'

export default class AssetGradientColorXml extends AssetType {

    /**
     * @type {GradientColor}
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
        await this.setDataUrl(data)
        return true
    }

    /**
     * @override
     */
    open(asset, options) {
    }

    /**
     * @return {GradientColor}
     */
    parse() {
    }

    /**
     * @override
     */
    export(asset) {
    }

    /**
     * @override
     * @param {GradientColor} gradientColor
     * @param {Asset} asset
     */
    async generate(gradientColor, asset) {
    }

    /**
     * @override
     */
    rename(oldName, newName) {
    }

    /**
     * @override
     * @return {GradientColor}
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
        await super.setDataUrl(dataUrl)
        const parser = new DOMParser()
        const doc = parser.parseFromString(dataUrl, 'application/xml')
        if (doc.documentElement.tagName === 'html') {
            this.setError(`${this.constructor.name}: ${doc.documentElement.textContent}`)
        } else {
            this.setError('')
            this.data = GradientColorParser.parse(doc)
        }
    }

    /**
     * @override
     */
    validate(data) {
        return true
    }
}