export default {
    vs: `
        attribute vec2 aPosition;
        attribute vec2 aTextureCoord;
    
        uniform vec2 uResolution;
        uniform vec2 uTranslation;
        uniform vec2 uRotation;
        uniform vec2 uScale;
        uniform vec4 uColor;
        
        varying vec4 vColor;
        varying highp vec2 vTextureCoord;
    
        void main() {
            //vec2 position = aPosition * uScale;
            vec2 position = aPosition * uScale * 2.0;
            position = position + (uTranslation/uResolution * 2.0) - 1.0;
            //position = position + uScale;
            gl_Position = vec4(position * vec2(1.0, -1.0), 0.0, 1.0);
            vColor = uColor;
            vTextureCoord = aTextureCoord;
        }
    `,
    fs: `
        precision mediump float;
        
        varying vec4 vColor;
        varying highp vec2 vTextureCoord;

        uniform sampler2D uSampler;
        
        void main() {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
        }
    `
}