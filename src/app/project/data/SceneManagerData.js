import Data from './Data.js'

export default class SceneManagerData extends Data{

    /**
     * @type {Scene[]}
     */
    scenes

    /**
     * @return {Scene[]}
     */
    getScenes(){
        return this.scenes
    }

    /**
     * @param {Scene[]} scenes
     */
    setScenes(scenes){
        this.scenes = scenes
    }

    concatScenes(scenes){
        this.setScenes(scenes)
    }

}