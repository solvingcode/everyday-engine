import CameraComponent from '../../../component/internal/CameraComponent.js'
import Vector from '../../../utils/Vector.js'
import ContextTypeShapeGenerator from '../ContextTypeShapeGenerator.js'

export default class TDCameraShapeGenerator extends ContextTypeShapeGenerator {

    /**
     * @override
     */
    draw(unit, dataContext) {
        const cameraComponent = unit.getComponent(CameraComponent)
        const {context, scaleSize, camera} = dataContext
        const {width, height} = scaleSize
        const centerSize = new Vector({x: width / 2, y: height / 2})
        const trackPoint = Vector.add(camera.toCameraScale(cameraComponent.getTrackPoint()), centerSize)
        const deadZone = camera.toScaleSize(cameraComponent.getDeadZone())

        //camera bounds
        context.beginPath()
        context.rect(0, 0, width, height)

        if(cameraComponent.isDebug()){
            //middle borders
            context.moveTo(0, height / 2)
            context.lineTo(width, height / 2)
            context.moveTo(width / 2, 0)
            context.lineTo(width / 2, height)
            context.fillStyle = 'rgba(40,70,114,0.3)'
            context.fill()
            //dead zone
            context.fillStyle = 'rgba(0,0,0,0.2)'
            context.fillRect(centerSize.getX() - deadZone.getWidth() / 2, centerSize.getY() - deadZone.getHeight() / 2,
                deadZone.getWidth(), deadZone.getHeight())

            //tracking point
            const sizeTrackPoint = camera.toScaleNumber(10)
            context.fillStyle = 'rgb(213,199,25)'
            context.fillRect(trackPoint.getX() - sizeTrackPoint / 2, trackPoint.getY() - sizeTrackPoint / 2,
                sizeTrackPoint, sizeTrackPoint)
        }
    }

}