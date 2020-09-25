define(function () {

    class Layout { }

    Layout.zone = {
        LEFT: 'left',
        TOP: 'top',
        RIGHT: 'right'
    }

    Layout.type = {
        DRAW: 'draw',
        ACTION: 'action',
        STYLE: 'style',
        LAYER: 'layer',
        STYLE_COLOR: 'style_color',
        LAYER_ENTITY: 'layer_entity',
        LAYER_ACTION: 'layer_action'
    }

    return Layout

})