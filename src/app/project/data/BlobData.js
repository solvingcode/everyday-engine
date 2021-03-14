import Data from './Data.js'

class BlobData extends Data{

    size
    position
    dataUrl

    /**
     * @param {Size} size
     */
    setSize(size) {
        this.size = size
    }

    /**
     * @return {Size}
     */
    getSize() {
        return this.size
    }

    /**
     * @param {Vector} position
     */
    setPosition(position) {
        this.position = position
    }

    /**
     * @return {Vector}
     */
    getPosition() {
        return this.position
    }

    /**
     * @param {string} dataUrl
     */
    async setDataUrl(dataUrl) {
        this.dataUrl = dataUrl
    }

    /**
     * @return {string}
     */
    getDataUrl() {
        return this.dataUrl
    }

}

export default BlobData