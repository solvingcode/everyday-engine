define(function () {

    /**
     * Define the layout of the screen
     */
    class Layout { }

    Layout.zone = {
        LEFT: 'left',
        TOP: 'top',
        RIGHT: 'right',
        BOTTOM: 'bottom'
    }

    Layout.type = {
        DRAW: 'draw',
        ACTION: 'action',
        STYLE: 'style',
        PANEL: 'panel',
        STYLE_COLOR: 'style_color',
        LAYER_ENTITY: 'layer_entity',
        LAYER_ACTION: 'layer_action',
        LIST_ELEMENT: 'list_element',
        TEXT: 'text',
        FORM: 'form',
        FORM_ELEMENT: 'form_element',
        GRAPH: 'graph',
        ICON: 'icon'
    }

    Layout.form = {
        CHECKBOX: 'checkbox',
        TEXT: 'text',
        DROPDOWN: 'dropdown',
        FILE: 'file'
    }

    export default Layout

})