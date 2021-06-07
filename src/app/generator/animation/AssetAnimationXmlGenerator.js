export default class AssetAnimationXmlGenerator {

    static instance

    /**
     * @param {Animation} animation
     * @return {string}
     */
    generate(animation) {
        const xmlSerializer = new XMLSerializer()
        const root = document.implementation.createDocument('', '', null)
        const parentNode = root.createElement('animation')
        parentNode.setAttribute('id', `${animation.getId()}`)
        parentNode.setAttribute('name', animation.getName())
        animation.getFrames().forEach(keyframe => {
            const nodeNode = root.createElement('frame')
            nodeNode.setAttribute('id', `${keyframe.getId()}`)
            nodeNode.setAttribute('asset', `${keyframe.getAssetId()}`)
            nodeNode.setAttribute('time', `${keyframe.getTime()}`)
            parentNode.appendChild(nodeNode)
        })
        root.appendChild(parentNode)
        return xmlSerializer.serializeToString(root)
    }

    /**
     * @return {AssetAnimationXmlGenerator}
     */
    static get() {
        if (!this.instance) {
            this.instance = new this()
        }
        return this.instance
    }

}