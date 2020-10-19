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
        PANEL: 'panel',
        STYLE_COLOR: 'style_color',
        LAYER_ENTITY: 'layer_entity',
        LAYER_ACTION: 'layer_action',
        TEXT: 'text',
        FORM: 'form',
        FORM_ELEMENT: 'form_element'
    }

    Layout.form = {
        CHECKBOX: 'checkbox',
        TEXT: 'text'
    }

    return Layout

})