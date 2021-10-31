import World from '../world/World.js'
import AssetsManager from '../manager/AssetsManager.js'
import Camera from '../core/Camera.js'
import Asset from '../asset/Asset.js'
import Folder from '../asset/Folder.js'
import AssetType from '../asset/types/AssetType.js'
import Unit from '../unit/Unit.js'
import UnitManager from '../manager/UnitManager.js'
import Component from '../component/Component.js'
import {TYPES} from '../pobject/AttributeType.js'
import FunctionRegistry from '../registry/FunctionRegistry.js'
import AFunction from '../flow/function/AFunction.js'
import StackOperation from '../operation/StackOperation.js'
import TabManager from '../manager/TabManager.js'
import Tab from '../content/Tab.js'
import Content from '../content/Content.js'
import Preference from '../preference/Preference.js'
import GameInputPreference from '../preference/gameInput/GameInputPreference.js'
import GameInput from '../preference/gameInput/GameInput.js'
import ComponentRegistry from '../registry/ComponentRegistry.js'
import MaskGroupPreference from '../preference/maskgroup/MaskGroupPreference.js'
import MaskGroup from '../preference/maskgroup/MaskGroup.js'
import MaterialRegistry from '../registry/MaterialRegistry.js'
import Material from '../material/Material.js'
import SceneManager from '../manager/SceneManager.js'
import Scene from '../scene/Scene.js'
import TagPreference from '../preference/tag/TagPreference.js'
import Tag from '../preference/tag/Tag.js'
import AnimationManager from '../manager/AnimationManager.js'
import Animation from '../animation/Animation.js'
import AnimationProperty from '../animation/AnimationProperty.js'
import KeyFrame from '../animation/KeyFrame.js'
import ScriptManager from '../manager/ScriptManager.js'
import ANode from '../flow/node/ANode.js'
import NodeInput from '../pobject/NodeInput.js'
import ClassScript from '../flow/ClassScript.js'
import FunctionScript from '../flow/FunctionScript.js'

/**
 * Define the schema of project data.
 * Used to serialize/deserialize all data when saving/loading the project.
 * the schema of each data can be defined using type or prototype properties :
 *      - Type: the type can be a string (like TYPES.NUMBER), Array, or a Class of Data type.
 *              if type defined as Data, the Data parent class will be used for serializing,
 *              and the type for deserializing
 *      - Prototype: the prototype can be a string, Array or any Class
 *                   if prototype is specified, it will be used for serializing and deserializing
 */

export const PrefSchema = {
    [TYPES.VECTOR]: {
        x: {
            type: TYPES.NUMBER
        },
        y: {
            type: TYPES.NUMBER
        },
        z: {
            type: TYPES.NUMBER
        }
    },
    [TYPES.SIZE]: {
        width: {
            type: TYPES.NUMBER
        },
        height: {
            type: TYPES.NUMBER
        }
    },
    [TYPES.MESH]: {
        dataId: {
            type: TYPES.NUMBER
        },
        size: {
            type: TYPES.SIZE
        },
        position: {
            type: TYPES.VECTOR
        },
        dataUrl: {
            type: TYPES.STRING
        }
    },
    [TYPES.STYLE]: {
        color: {
            type: TYPES.STRING
        },
        colorOpacity: {
            type: TYPES.NUMBER
        },
        fillColor: {
            type: TYPES.STRING
        },
        gradientColorAssetId: {
            type: TYPES.NUMBER
        },
        fillColorOpacity: {
            type: TYPES.NUMBER
        },
        borderSize: {
            type: TYPES.NUMBER
        },
        opacity: {
            type: TYPES.NUMBER
        },
        shadowColor: {
            type: TYPES.STRING
        },
        shadowPosition: {
            type: TYPES.VECTOR
        },
        shadowBlur: {
            type: TYPES.NUMBER
        }
    },
    [TYPES.DYNAMIC_ATTRIBUTE]: {
        id: {
            type: TYPES.NUMBER
        },
        attrName: {
            type: TYPES.STRING
        },
        attrType: {
            type: TYPES.NUMBER
        },
        attrRule: {
            type: TYPES.ANY
        },
        attrValue: {
            type: '[attrType]'
        }
    }
}

export default {
    world: {
        type: World,
        meta: {
            dataId: {
                type: TYPES.NUMBER
            },
            mouseConstraintId: {
                type: TYPES.NUMBER
            },
            showGrid: {
                type: TYPES.BOOLEAN
            },
            componentRegistry: {
                type: ComponentRegistry,
                meta: {
                    dataId: {
                        type: TYPES.NUMBER
                    },
                    name: {
                        type: TYPES.STRING
                    },
                    registry: {
                        type: Array,
                        meta: {
                            element: {
                                type: Component,
                                meta: {
                                    dataId: {
                                        type: TYPES.NUMBER
                                    },
                                    id: {
                                        type: TYPES.NUMBER
                                    },
                                    hidden: {
                                        type: TYPES.BOOLEAN
                                    },
                                    name: {
                                        type: TYPES.STRING
                                    },
                                    attributes: {
                                        type: TYPES.ARRAY | TYPES.DYNAMIC_ATTRIBUTE
                                    }
                                }
                            }
                        }
                    }
                }
            },
            materialRegistry: {
                type: MaterialRegistry,
                meta: {
                    dataId: {
                        type: TYPES.NUMBER
                    },
                    name: {
                        type: TYPES.STRING
                    },
                    registry: {
                        type: Array,
                        meta: {
                            element: {
                                type: Material,
                                meta: {
                                    dataId: {
                                        type: TYPES.NUMBER
                                    },
                                    id: {
                                        type: TYPES.NUMBER
                                    },
                                    name: {
                                        type: TYPES.STRING
                                    }
                                }
                            }
                        }
                    }
                }
            },
            functionRegistry: {
                type: FunctionRegistry,
                meta: {
                    dataId: {
                        type: TYPES.NUMBER
                    },
                    name: {
                        type: TYPES.STRING
                    },
                    registry: {
                        type: Array,
                        meta: {
                            element: {
                                type: AFunction,
                                meta: {
                                    dataId: {
                                        type: TYPES.NUMBER
                                    },
                                    id: {
                                        type: TYPES.NUMBER
                                    },
                                    name: {
                                        type: TYPES.STRING
                                    },
                                    stack: {
                                        type: Array,
                                        meta: {
                                            element: {
                                                prototype: StackOperation,
                                                meta: {
                                                    operation: {
                                                        type: TYPES.STRING
                                                    },
                                                    args: {
                                                        type: TYPES.ARRAY | TYPES.STRING
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    inputs: {
                                        type: TYPES.ARRAY | TYPES.DYNAMIC_ATTRIBUTE
                                    },
                                    output: {
                                        prototype: TYPES.DYNAMIC_ATTRIBUTE
                                    },
                                    access: {
                                        type: TYPES.NUMBER
                                    },
                                    className: {
                                        type: TYPES.STRING
                                    },
                                    parentClassName: {
                                        type: TYPES.STRING
                                    }
                                }
                            }
                        }
                    }
                }
            },
            tabManager: {
                type: TabManager,
                meta: {
                    dataId: {
                        type: TYPES.NUMBER
                    },
                    tabs: {
                        type: Array,
                        meta: {
                            element: {
                                type: Tab,
                                meta: {
                                    dataId: {
                                        type: TYPES.NUMBER
                                    },
                                    id: {
                                        type: TYPES.NUMBER
                                    },
                                    name: {
                                        type: TYPES.STRING
                                    },
                                    selected: {
                                        type: TYPES.BOOLEAN
                                    },
                                    content: {
                                        type: Content,
                                        meta: {
                                            dataId: {
                                                type: TYPES.NUMBER
                                            },
                                            id: {
                                                type: TYPES.NUMBER
                                            },
                                            dataContentId: {
                                                type: TYPES.NUMBER
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            sceneManager: {
                type: SceneManager,
                meta: {
                    dataId: {
                        type: TYPES.NUMBER
                    },
                    scenes: {
                        type: Array,
                        meta: {
                            element: {
                                type: Scene,
                                meta: {
                                    dataId: {
                                        type: TYPES.NUMBER
                                    },
                                    id: {
                                        type: TYPES.NUMBER
                                    },
                                    index: {
                                        type: TYPES.NUMBER
                                    },
                                    name: {
                                        type: TYPES.STRING
                                    },
                                    active: {
                                        type: TYPES.BOOLEAN
                                    },
                                    included: {
                                        type: TYPES.BOOLEAN
                                    },
                                    unitManager: {
                                        type: UnitManager,
                                        meta: {
                                            dataId: {
                                                type: TYPES.NUMBER
                                            },
                                            units: {
                                                type: Array,
                                                meta: {
                                                    element: {
                                                        type: Unit,
                                                        meta: {
                                                            dataId: {
                                                                type: TYPES.NUMBER
                                                            },
                                                            id: {
                                                                type: TYPES.NUMBER
                                                            },
                                                            assetId: {
                                                                type: TYPES.NUMBER
                                                            },
                                                            enabled: {
                                                                type: TYPES.BOOLEAN
                                                            },
                                                            maskGroupId: {
                                                                type: TYPES.NUMBER
                                                            },
                                                            tagId: {
                                                                type: TYPES.NUMBER
                                                            },
                                                            unitParentId: {
                                                                type: TYPES.NUMBER
                                                            },
                                                            name: {
                                                                type: TYPES.STRING
                                                            },
                                                            components: {
                                                                type: Array,
                                                                meta: {
                                                                    element: {
                                                                        type: Component,
                                                                        meta: {
                                                                            dataId: {
                                                                                type: TYPES.NUMBER
                                                                            },
                                                                            id: {
                                                                                type: TYPES.NUMBER
                                                                            },
                                                                            name: {
                                                                                type: TYPES.STRING
                                                                            },
                                                                            hidden: {
                                                                                type: TYPES.BOOLEAN
                                                                            },
                                                                            attributes: {
                                                                                type: TYPES.ARRAY | TYPES.DYNAMIC_ATTRIBUTE
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            preference: {
                type: Preference,
                meta: {
                    dataId: {
                        type: TYPES.NUMBER
                    },
                    gameInput: {
                        type: GameInputPreference,
                        meta: {
                            dataId: {
                                type: TYPES.NUMBER
                            },
                            inputs: {
                                type: Array,
                                meta: {
                                    element: {
                                        type: GameInput,
                                        meta: {
                                            dataId: {
                                                type: TYPES.NUMBER
                                            },
                                            id: {
                                                type: TYPES.NUMBER
                                            },
                                            name: {
                                                type: TYPES.STRING
                                            },
                                            key: {
                                                type: TYPES.STRING
                                            },
                                            value: {
                                                type: TYPES.DYNAMIC_ATTRIBUTE
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    maskGroup: {
                        type: MaskGroupPreference,
                        meta: {
                            dataId: {
                                type: TYPES.NUMBER
                            },
                            masks: {
                                type: Array,
                                meta: {
                                    element: {
                                        type: MaskGroup,
                                        meta: {
                                            dataId: {
                                                type: TYPES.NUMBER
                                            },
                                            id: {
                                                type: TYPES.NUMBER
                                            },
                                            name: {
                                                type: TYPES.STRING
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    tag: {
                        type: TagPreference,
                        meta: {
                            dataId: {
                                type: TYPES.NUMBER
                            },
                            tags: {
                                type: Array,
                                meta: {
                                    element: {
                                        type: Tag,
                                        meta: {
                                            dataId: {
                                                type: TYPES.NUMBER
                                            },
                                            id: {
                                                type: TYPES.NUMBER
                                            },
                                            name: {
                                                type: TYPES.STRING
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            camera: {
                type: Camera,
                meta: {
                    dataId: {
                        type: TYPES.NUMBER
                    },
                    position: {
                        prototype: TYPES.VECTOR
                    }
                }
            },
            resolution: {
                prototype: TYPES.SIZE
            },
            assetsManager: {
                type: AssetsManager,
                meta: {
                    dataId: {
                        type: TYPES.NUMBER
                    },
                    assets: {
                        type: Array,
                        meta: {
                            element: {
                                type: Asset,
                                meta: {
                                    dataId: {
                                        type: TYPES.NUMBER
                                    },
                                    id: {
                                        type: TYPES.NUMBER
                                    },
                                    folderId: {
                                        type: TYPES.NUMBER
                                    },
                                    name: {
                                        type: TYPES.STRING
                                    },
                                    type: {
                                        type: AssetType,
                                        meta: {
                                            dataId: {
                                                type: TYPES.NUMBER
                                            },
                                            dataUrl: {
                                                type: TYPES.STRING
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    folders: {
                        type: Array,
                        meta: {
                            element: {
                                type: Folder,
                                meta: {
                                    dataId: {
                                        type: TYPES.NUMBER
                                    },
                                    id: {
                                        type: TYPES.NUMBER
                                    },
                                    name: {
                                        type: TYPES.STRING
                                    },
                                    folderId: {
                                        type: TYPES.NUMBER
                                    }
                                }
                            }
                        }
                    }
                }
            },
            animationManager: {
                type: AnimationManager,
                meta: {
                    animations: {
                        type: Array,
                        meta: {
                            element: {
                                type: Animation,
                                meta: {
                                    dataId: {
                                        type: TYPES.NUMBER
                                    },
                                    id: {
                                        type: TYPES.NUMBER
                                    },
                                    name: {
                                        type: TYPES.STRING
                                    },
                                    samples: {
                                        type: TYPES.NUMBER
                                    },
                                    duration: {
                                        type: TYPES.NUMBER
                                    },
                                    lengthSecond: {
                                        type: TYPES.NUMBER
                                    },
                                    controllerAssetId: {
                                        type: TYPES.NUMBER
                                    },
                                    properties: {
                                        type: Array,
                                        meta: {
                                            element: {
                                                type: AnimationProperty,
                                                meta: {
                                                    dataId: {
                                                        type: TYPES.NUMBER
                                                    },
                                                    id: {
                                                        type: TYPES.NUMBER
                                                    },
                                                    componentName: {
                                                        type: TYPES.STRING,
                                                    },
                                                    attributeName: {
                                                        type: TYPES.STRING,
                                                    },
                                                    frames: {
                                                        type: Array,
                                                        meta: {
                                                            element: {
                                                                type: KeyFrame,
                                                                meta: {
                                                                    dataId: {
                                                                        type: TYPES.NUMBER
                                                                    },
                                                                    id: {
                                                                        type: TYPES.NUMBER
                                                                    },
                                                                    time: {
                                                                        type: TYPES.NUMBER
                                                                    },
                                                                    attribute: {
                                                                        type: TYPES.DYNAMIC_ATTRIBUTE
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            scriptManager: {
                type: ScriptManager,
                meta: {
                    scripts: {
                        type: Array,
                        meta: {
                            element: {
                                type: ClassScript,
                                meta: {
                                    dataId: {
                                        type: TYPES.NUMBER
                                    },
                                    id: {
                                        type: TYPES.NUMBER
                                    },
                                    name: {
                                        type: TYPES.STRING
                                    },
                                    status: {
                                        type: TYPES.STRING
                                    },
                                    parentName: {
                                        type: TYPES.STRING
                                    },
                                    assetId: {
                                        type: TYPES.NUMBER
                                    },
                                    functions: {
                                        type: Array,
                                        meta: {
                                            element: {
                                                type: FunctionScript,
                                                meta: {
                                                    dataId: {
                                                        type: TYPES.NUMBER
                                                    },
                                                    id: {
                                                        type: TYPES.NUMBER
                                                    },
                                                    name: {
                                                        type: TYPES.STRING
                                                    },
                                                    camera: {
                                                        type: Camera,
                                                        meta: {
                                                            dataId: {
                                                                type: TYPES.NUMBER
                                                            },
                                                            position: {
                                                                prototype: TYPES.VECTOR
                                                            }
                                                        }
                                                    },
                                                    access: {
                                                        type: TYPES.NUMBER
                                                    },
                                                    nodes: {
                                                        type: Array,
                                                        meta: {
                                                            element: {
                                                                type: ANode,
                                                                meta: {
                                                                    dataId: {
                                                                        type: TYPES.NUMBER
                                                                    },
                                                                    id: {
                                                                        type: TYPES.NUMBER
                                                                    },
                                                                    sourceName: {
                                                                        type: TYPES.STRING
                                                                    },
                                                                    position: {
                                                                        type: TYPES.VECTOR
                                                                    },
                                                                    inputs: {
                                                                        type: Array,
                                                                        meta: {
                                                                            element: {
                                                                                type: NodeInput,
                                                                                meta: {
                                                                                    dataId: {
                                                                                        type: TYPES.NUMBER
                                                                                    },
                                                                                    id: {
                                                                                        type: TYPES.NUMBER
                                                                                    },
                                                                                    sourceNodeId: {
                                                                                        type: TYPES.NUMBER
                                                                                    },
                                                                                    nodeId: {
                                                                                        type: TYPES.NUMBER
                                                                                    },
                                                                                    sourceName: {
                                                                                        type: TYPES.STRING
                                                                                    },
                                                                                    targetName: {
                                                                                        type: TYPES.STRING
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}