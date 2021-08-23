import Parser from '../Parser.js'
import ClientError from '../../exception/type/ClientError.js'
import GradientColor, {GradientColorStop} from '../../pobject/GradientColor.js'

export default class GradientColorParser extends Parser {

    /**
     * @param {Document} xmlDocument
     * @return {GradientColor}
     */
    static parse(xmlDocument) {
        if (xmlDocument.constructor === XMLDocument) {
            const xmlNode = xmlDocument.documentElement
            const gradientColor = new GradientColor()
            const colorStops = []
            xmlNode.childNodes.forEach(cXmlNode => {
                const element = cXmlNode.nodeName
                if (element === 'colorStop') {
                    const color = cXmlNode.getAttribute('color')
                    const offset = cXmlNode.getAttribute('offset')
                    const colorStop = new GradientColorStop(color, offset)
                    colorStops.push(colorStop)
                }
            })
            gradientColor.setColors(colorStops)
            return gradientColor
        } else {
            throw new ClientError(`${this.constructor.name}: data must be an XML Document`)
        }
    }

}