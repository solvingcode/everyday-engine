define(function (require) {

    const HtmlFormTextUI = require('./HtmlFormTextUI.js')
    const EntityUI = require('../entity/EntityUI.js')

    class HtmlFormFileUI extends HtmlFormTextUI {
        /**
         * @override
         */
        static postCreate(item, el, uiRenderer) {
            super.postCreate(item, el, uiRenderer)
            const {parent} = item.element
            const entity = parent.getBindObject()
            const {meshBgColor} = entity
            const {width, height} = this.props.imageProps
            if (entity.getBackgroundImageBlob()) {
                const image = EntityUI.getImageFromMesh(meshBgColor, {width, height})
                const imageWrapper = document.createElement('div')
                imageWrapper.appendChild(image)
                el.appendChild(imageWrapper)
            }
        }

        /**
         * @override
         */
        static getValue(formElement) {
            const file = formElement.files && formElement.files[0]
            return file && URL.createObjectURL(file)
        }
    }

    HtmlFormFileUI.props = {
        tag: 'div',
        prefix: 'form-text-',
        className: 'form-input',
        inputProps: {
            tag: 'input',
            type: 'file',
            suffix: '-field'
        },
        imageProps: {
            width: 50,
            height: 50
        }
    }

    return HtmlFormFileUI
})