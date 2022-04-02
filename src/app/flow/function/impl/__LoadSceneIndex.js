import World from '../../../world/World.js'

export default function (sceneIndex, additiveMode) {
    const scene = World.get().getSceneManager().findByIndex(sceneIndex)
    scene.setIncluded(true)
}