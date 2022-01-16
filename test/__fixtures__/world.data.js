import {TYPES} from '../../src/app/pobject/AttributeType.js'

export default {
    'dataId': 10,
    'unitManager': {
        'dataId': 20,
        'units': [
            {
                'dataId': 60,
                'id': 1617505336397,
                'name': 'maxresdefault',
                'components': [
                    {
                        'dataId': 40,
                        'id': 1617505255713,
                        'name': 'Mesh',
                        'attributes': [
                            {
                                'attrName': 'shape',
                                'attrType': TYPES.STRING,
                                'attrValue': 'rect'
                            },
                            {
                                'attrName': 'style',
                                'attrType': TYPES.STYLE,
                                'attrValue': {
                                    'colorOpacity': 1,
                                    'fillColorOpacity': 1
                                }
                            },
                            {
                                'attrName': 'size',
                                'attrType': TYPES.SIZE,
                                'attrValue': {
                                    'width': 1280,
                                    'height': 720
                                }
                            },
                            {
                                'attrName': 'vertices',
                                'attrType': TYPES.ARRAY | TYPES.VECTOR,
                                'attrValue': [
                                    {
                                        'x': 0,
                                        'y': 0,
                                        'z': 0
                                    },
                                    {
                                        'x': 1280,
                                        'y': 0,
                                        'z': 0
                                    },
                                    {
                                        'x': 1280,
                                        'y': 720,
                                        'z': 0
                                    },
                                    {
                                        'x': 0,
                                        'y': 720,
                                        'z': 0
                                    }
                                ]
                            },
                            {
                                'attrName': 'shapeVertices',
                                'attrType': TYPES.ARRAY | TYPES.VECTOR,
                                'attrValue': []
                            },
                            {
                                'attrName': 'generated',
                                'attrType': TYPES.BOOLEAN,
                                'attrValue': true
                            },
                            {
                                'attrName': 'assetId',
                                'attrType': TYPES.NUMBER,
                                'attrValue': 1617505275722
                            },
                            {
                                'attrName': 'imageRepeat',
                                'attrType': TYPES.BOOLEAN,
                                'attrValue': false
                            },
                            {
                                'attrName': 'enabled',
                                'attrType': TYPES.BOOLEAN,
                                'attrValue': true
                            }
                        ]
                    },
                    {
                        'dataId': 50,
                        'id': 1617505266666,
                        'name': 'Transform',
                        'attributes': [
                            {
                                'attrName': 'position',
                                'attrType': TYPES.VECTOR,
                                'attrValue': {
                                    'x': 150,
                                    'y': 80,
                                    'z': 0
                                }
                            },
                            {
                                'attrName': 'scale',
                                'attrType': TYPES.VECTOR,
                                'attrValue': {
                                    'x': 0,
                                    'y': 0,
                                    'z': 0
                                }
                            },
                            {
                                'attrName': 'rotation',
                                'attrType': TYPES.NUMBER,
                                'attrValue': 0
                            }
                        ]
                    }
                ]
            }
        ]
    },
    'camera': {
        'dataId': 4,
        'position': {
            'x': -924,
            'y': -490.5,
            'z': 0
        },
        'initPosition': {
            'x': -924,
            'y': -490.5,
            'z': 0
        },
        'scaleFactor': 0.2
    },
    'physics': {
        'dataId': 5,
        'toRestart': false,
        'isRunning': false,
        'types': {}
    },
    'resolution': {
        'width': 1848,
        'height': 981
    },
    'showGrid': false
}