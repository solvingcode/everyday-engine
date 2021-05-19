import World from '../world/World.js'
import AssetsManager from '../manager/AssetsManager.js'
import Camera from '../core/Camera.js'
import Physics from '../physics/Physics.js'
import Asset from '../asset/Asset.js'
import PhysicsEngine from '../physics/engine/PhysicsEngine.js'
import Folder from '../asset/Folder.js'
import AssetType from '../asset/types/AssetType.js'
import Unit from '../unit/Unit.js'
import UnitManager from '../manager/UnitManager.js'
import Component from '../component/Component.js'
import {TYPES} from '../pobject/AttributeType.js'
import FunctionRegistry from '../flow/function/FunctionRegistry.js'
import AFunction from '../flow/function/AFunction.js'
import StackOperation from '../operation/StackOperation.js'
import TabManager from '../manager/TabManager.js'
import Tab from '../content/Tab.js'
import Content from '../content/Content.js'

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
        fillColorOpacity: {
            type: TYPES.NUMBER
        },
        borderSize: {
            type: TYPES.NUMBER
        },
        opacity: {
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
            type: TYPES.STRING
        },
        attrValue: {
            type: '[attrType]'
        }
    },
    [TYPES.ARRAY_VECTOR]: {
        element: {
            type: TYPES.VECTOR
        }
    },
    [TYPES.ARRAY_NUMBER]: {
        element: {
            type: TYPES.NUMBER
        }
    },
    [TYPES.ARRAY_STRING]: {
        element: {
            type: TYPES.STRING
        }
    },
    [TYPES.ARRAY_DYNAMIC_ATTRIBUTE]: {
        element: {
            type: TYPES.DYNAMIC_ATTRIBUTE
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
            cameraUnitId: {
                type: TYPES.NUMBER
            },
            showGrid: {
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
                                                    attributes: {
                                                        type: TYPES.ARRAY_DYNAMIC_ATTRIBUTE
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
                                                        type: TYPES.ARRAY_STRING
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    inputs: {
                                        type: TYPES.ARRAY_DYNAMIC_ATTRIBUTE
                                    },
                                    output: {
                                        prototype: TYPES.DYNAMIC_ATTRIBUTE
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
            physics: {
                type: Physics,
                meta: {
                    dataId: {
                        type: TYPES.NUMBER
                    },
                    physicsEngine: {
                        type: PhysicsEngine,
                        meta: {
                            dataId: {
                                type: TYPES.NUMBER
                            }
                        }
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
            }
        }
    }
}