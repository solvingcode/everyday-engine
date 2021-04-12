import Data from './Data.js'

export default class AssetTypeData extends Data{

    data

    /**
     * @param {*} data
     */
    setData(data){
        this.data = data
    }

    /**
     * @return {*}
     */
    getData(){
        return this.data
    }

}