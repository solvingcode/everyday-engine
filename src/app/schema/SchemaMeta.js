import Vector from '../utils/Vector.js'
import Size from '../pobject/Size.js'
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

/**
 * Define the schema of project data.
 * Used to serialize/deserialize all data when saving/loading the project.
 * the schema of each data can be defined using type or prototype properties :
 *      - Type: the type can be a string (like 'number'), Array, or a Class of Data type.
 *              if type defined as Data, the Data parent class will be used for serializing,
 *              and the type for deserializing
 *      - Prototype: the prototype can be a string, Array or any Class
 *                   if prototype is specified, it will be used for serializing and deserializing
 */

export default {
    world: {
        type: World,
        meta: {
            dataId: {
                type: 'number'
            },
            mouseConstraintId: {
                type: 'number'
            },
            cameraUnitId: {
                type: 'number'
            },
            showGrid: {
                type: 'boolean'
            },
            unitManager: {
                type: UnitManager,
                meta: {
                    dataId: {
                        type: 'number'
                    },
                    units: {
                        type: Array,
                        meta: {
                            element: {
                                type: Unit,
                                meta: {
                                    dataId: {
                                        type: 'number'
                                    },
                                    id: {
                                        type: 'number'
                                    },
                                    name: {
                                        type: 'string'
                                    },
                                    components: {
                                        type: Array,
                                        meta: {
                                            element: {
                                                type: Component,
                                                meta: {
                                                    dataId: {
                                                        type: 'number'
                                                    },
                                                    id: {
                                                        type: 'number'
                                                    },
                                                    name: {
                                                        type: 'string'
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
                        type: 'number'
                    },
                    entityId: {
                        type: 'number'
                    },
                    position: {
                        prototype: Vector,
                        meta: {
                            x: {
                                type: 'number'
                            },
                            y: {
                                type: 'number'
                            },
                            z: {
                                type: 'number'
                            }
                        }
                    }
                }
            },
            physics: {
                type: Physics,
                meta: {
                    dataId: {
                        type: 'number'
                    },
                    physicsEngine: {
                        type: PhysicsEngine,
                        meta: {
                            dataId: {
                                type: 'number'
                            }
                        }
                    }
                }
            },
            resolution: {
                prototype: Size,
                meta: {
                    width: {
                        type: 'number'
                    },
                    height: {
                        type: 'number'
                    }
                }
            },
            assetsManager: {
                type: AssetsManager,
                meta: {
                    dataId: {
                        type: 'number'
                    },
                    assets: {
                        type: Array,
                        meta: {
                            element: {
                                type: Asset,
                                meta: {
                                    dataId: {
                                        type: 'number'
                                    },
                                    id: {
                                        type: 'number'
                                    },
                                    folderId: {
                                        type: 'number'
                                    },
                                    name: {
                                        type: 'string'
                                    },
                                    type: {
                                        prototype: AssetType,
                                        meta: {
                                            data: {
                                                type: AssetTypeData,
                                                meta: {
                                                    dataId: {
                                                        type: 'number'
                                                    },
                                                    size: {
                                                        prototype: Size,
                                                        meta: {
                                                            width: {
                                                                type: 'number'
                                                            },
                                                            height: {
                                                                type: 'number'
                                                            }
                                                        }
                                                    },
                                                    position: {
                                                        prototype: Vector,
                                                        meta: {
                                                            x: {
                                                                type: 'number'
                                                            },
                                                            y: {
                                                                type: 'number'
                                                            },
                                                            z: {
                                                                type: 'number'
                                                            }
                                                        }
                                                    },
                                                    dataUrl: {
                                                        type: 'string'
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
                                        type: 'number'
                                    },
                                    id: {
                                        type: 'number'
                                    },
                                    name: {
                                        type: 'string'
                                    },
                                    folderId: {
                                        type: 'number'
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