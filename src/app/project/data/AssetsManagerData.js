import Data from './Data.js'

/**
 * @class {AssetsManagerData}
 * @extends {Data}
 */
export default class AssetsManagerData extends Data {

    assets
    folders

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

}