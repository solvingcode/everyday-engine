import Data from './Data.js'

/**
 * @class {AssetsManagerData}
 * @extends {Data}
 */
export default class AssetsManagerData extends Data {

    assets
    folders

    constructor() {
        super()
        this.assets = []
        this.folders = []
    }

    /**
     * @return {Asset[]}
     */
    getAssets() {
        return this.assets
    }

    /**
     * @param {Asset[]} assets
     */
    setAssets(assets) {
        this.assets = assets
    }

    /**
     * @return {Folder[]}
     */
    getFolders() {
        return this.folders
    }

    /**
     * @param {Folder[]} folders
     */
    setFolders(folders) {
        this.folders = folders
    }

    /**
     * @param {Asset[]} assets
     */
    concatAssets(assets) {
        this.setAssets(assets)
    }

    /**
     * @param {Folder[]} folders
     */
    concatFolders(folders) {
        this.concat(
            this.folders,
            folders,
            (tItem, sItem) => tItem.getName() === sItem.getName()
        )
    }

}