import Layout from '../../../../layout/Layout.js'
import {SCENE_WIDTH} from '../../../../core/Constant.js'

class DefaultButtonUI {
    /**
     * Draw a button.
     * @param {MenuItem} item
     * @param {uiRenderer} uiRenderer
     */
    static draw(item, uiRenderer) {
        this.config(item, uiRenderer)
        const {context} = uiRenderer
        const element = item.element
        let colorButton = this.props.colorButton
        let colorText = this.props.colorText
        if (element.isSelected()) {
            colorButton = this.props.colorButtonSelected
            colorText = this.props.colorTextSelected
        }
        context.fillStyle = colorButton
        context.fillRect(item.position.x, item.position.y, this.props.width, this.props.height)
        context.fillStyle = colorText
        context.font = `${this.props.textSize}px Arial`
        context.fillText(
            element.props.name,
            item.position.x + this.props.padding.x,
            item.position.y + this.props.textSize + this.props.padding.y
        )
    }

    /**
     * Configure menu items props
     * @param {MenuItemUI} item
     * @param {UIRenderer} uiRenderer
     */
    static config(item, uiRenderer) {
        const {x0, y0, isVertical} = uiRenderer.getZoneProps(item.element.zone)
        const {width, height} = this.props
        item.position = {
            x: x0 + (!isVertical && item.index * (this.props.width + this.props.padding.x)),
            y: y0 + (isVertical && item.index * (this.props.height + this.props.padding.y))
        }
        item.width = width
        item.height = height
    }
}

DefaultButtonUI.props = {
    width: 85,
    height: 40,
    padding: {x: 10, y: 10},
    textSize: 16,
    colorButton: '#CCCCCC',
    colorButtonSelected: '#3333DD',
    colorText: '#000000',
    colorTextSelected: '#DDDDDD',
    zone: {
        [Layout.zone.LEFT]: {
            x0: 20,
            y0: 20,
            isVertical: true
        },
        [Layout.zone.TOP]: {
            x0: 160,
            y0: 20,
            isVertical: false
        },
        [Layout.zone.RIGHT]: {
            x0: SCENE_WIDTH - 250,
            y0: 20,
            isVertical: true
        }
    }
}

export default DefaultButtonUI