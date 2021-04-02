import World from '../world/World.js'
import AssetsManager from '../manager/AssetsManager.js'
import Camera from '../core/Camera.js'
import Physics from '../physics/Physics.js'
import Asset from '../asset/Asset.js'
import PhysicsEngine from '../physics/engine/PhysicsEngine.js'
import Folder from '../asset/Folder.js'
import AssetType from '../asset/types/AssetType.js'
import AssetTypeData from '../asset/types/AssetTypeData.js'
import Unit from '../unit/Unit.js'
import UnitManager from '../manager/UnitManager.js'
import Component from '../component/Component.js'
import ComponentAttribute from '../pobject/ComponentAttribute.js'
import {TYPES} from '../pobject/AttributeType.js'

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
                                                        type: Array,
                                                        meta: {
                                                            element: {
                                                                prototype: ComponentAttribute,
                                                                meta: {
                                                                    attrName: {
                                                                        type: TYPES.STRING
                                                                    },
                                                                    attrType: {
                                                                        type: TYPES.STRING
                                                                    },
                                                                    attrValue: {
                                                                        type: '[attrType]'
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
            camera: {
                type: Camera,
                meta: {
                    dataId: {
                        type: TYPES.NUMBER
                    },
                    entityId: {
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
                                        prototype: AssetType,
                                        meta: {
                                            data: {
                                                type: AssetTypeData,
                                                meta: {
                                                    dataId: {
                                                        type: TYPES.NUMBER
                                                    },
                                                    size: {
                                                        prototype: TYPES.SIZE
                                                    },
                                                    position: {
                                                        prototype: TYPES.VECTOR
                                                    },
                                                    dataUrl: {
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