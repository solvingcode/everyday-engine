import ImageHelper from '../../../../../utils/ImageHelper.js'
import Size from '../../../../../pobject/Size.js'

/**
 * @class {ImageUI}
 */
class ImageUI {

    /**
     * @param {Mesh} mesh
     * @param {{width: number, height: number}} props
     * @param {number} version
     * @return {HTMLImageElement}
     */
    static getImage(mesh, props, version = 0) {
        return this.getImageFromMesh(mesh, props, version)
    }

    /**
     * @param {Mesh} mesh
     * @param {{width: number, height: number}} props
     * @param {number} version
     * @return {HTMLImageElement}
     */
    static getImageFromMesh(mesh, props , version) {
        const {context} = mesh
        const width = props.width || mesh.size.width
        const height = props.height || mesh.size.height

        const image = new Image()
        image.src = ImageHelper.getDataURL(context.canvas, new Size({width, height}))
        if(version){
            image.id = `${version}`
        }

        return image
    }
}

export default ImageUI