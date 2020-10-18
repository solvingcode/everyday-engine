define(function () {

    /**
     * Define the layout of the screen
     */
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
        LAYER_ACTION: 'layer_action',
        TEXT: 'text',
        FORM: 'form',
        FORM_CHECKBOX: 'form_checkbox'
    }

    return Layout

})