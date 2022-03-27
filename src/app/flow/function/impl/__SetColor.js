import StyleComponent from '../../../component/internal/StyleComponent.js'

export default function (target, color) {
    const styleComponent = target.getComponent(StyleComponent)
    styleComponent.getStyle().setFillColor(color)
}