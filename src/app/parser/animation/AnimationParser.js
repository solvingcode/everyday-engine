import Parser from '../Parser.js'
import ClientError from '../../exception/type/ClientError.js'
import Animation from '../../animation/Animation.js'
import KeyFrame from '../../animation/KeyFrame.js'

export default class AnimationParser extends Parser {

    /**
     * @param {Document} xmlDocument
     * @return {Animation}
     */
    static parse(xmlDocument) {
        if (xmlDocument.constructor === XMLDocument) {
            const xmlNode = xmlDocument.documentElement
            const name = xmlNode.getAttribute('name')
            const samples = xmlNode.getAttribute('samples')
            const animation = new Animation(name)
            const keyframes = []
            xmlNode.childNodes.forEach(cXmlNode => {
                const element = cXmlNode.nodeName
                if (element === 'frame') {
                    const asset = cXmlNode.getAttribute('asset')
                    const time = cXmlNode.getAttribute('time')
                    const id = parseInt(cXmlNode.getAttribute('id'))
                    const keyframe = new KeyFrame()
                    keyframe.setId(id)
                    keyframe.setAssetId(parseInt(asset))
                    keyframe.setTime(parseFloat(time))
                    keyframes.push(keyframe)
                }
            })
            animation.setFrames(keyframes)
            animation.setSamples(parseInt(samples))
            return animation
        } else {
            throw new ClientError(`${this.constructor.name}: data must be an XML Document`)
        }
    }

}