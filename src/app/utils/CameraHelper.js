export default class CameraHelper {

    /**
     * @param {Camera} camera
     * @param {Vector} position
     */
    static follow(camera, position){
        camera.getPosition().setX(position.getX())
        camera.getPosition().setY(position.getY())
    }

}
