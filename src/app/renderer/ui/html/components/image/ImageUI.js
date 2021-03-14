import ImageHelper from '../../../../../utils/ImageHelper.js'
import Size from '../../../../../pobject/Size.js'

/**
 * @class {ImageUI}
 */
class ImageUI {

    /**
     * @param {Mesh} mesh
     * @param {{width: number, height: number}} props
     * @return {HTMLImageElement}
     */
    static getImage(mesh, props) {
        return this.getImageFromMesh(mesh, props)
    }

    /**
     * @param {Mesh} mesh
     * @param {{width: number, height: number}} props
     * @return {HTMLImageElement}
     */
    static getImageFromMesh(mesh, props = {}) {
        const {context} = mesh
        const width = props.width || mesh.size.width
        const height = props.height || mesh.size.height

        const image = new Image()
        image.src = ImageHelper.getDataURL(context.canvas, new Size({width, height}))

        return image
    }
}

export default ImageUI