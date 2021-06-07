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
                    keyframe.setAssetId(asset)
                    keyframe.setTime(time)
                    keyframes.push(keyframe)
                }
            })
            animation.setFrames(keyframes)
            return animation
        } else {
            throw new ClientError(`${this.constructor.name}: data must be an XML Document`)
        }
    }

}